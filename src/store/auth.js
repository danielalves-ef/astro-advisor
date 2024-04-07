// Utilities
import { defineStore } from 'pinia'
import { auth, functions, httpsCallable } from '../plugins/firebase'
import { useFirebaseStore } from "@/store/firebase";
import { onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, updateProfile, getIdTokenResult, signInWithEmailAndPassword } from 'firebase/auth'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        loggedIn: false,
        user: null,
        error: {
            message: "",
            code: 0,
        },
        message: "",
    }),
    actions: {
        async loginWithGoogle() {
            const provider = new GoogleAuthProvider();
            try {
                const result = await signInWithPopup(auth, provider);
                const { displayName, email, uid } = result.user;
                this.user = {
                    uid, displayName, email
                };
                this.loggedIn = true;
                console.log(`Successfully Logged In. Welcome ${displayName} (${email}) `)
                this.message = `Successfully Logged In. Welcome ${displayName} (${email}) `;

            } catch (error) {
                this.error.message = error.message;
                this.error.code = error.code;
            }
        },
        async loginWithEmail(email, password) {
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                if (user) {
                    this.user = {
                        displayName: user.displayName,
                        email: user.email,
                        uid: user.uid,
                        photoURL: user.photoURL
                    }
                    this.loggedIn = true;
                }

            } catch (error) {
                console.log({ error })
            }
        },
        async registerWithEmail2(user, password) {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, user.email, password);
                user.id = userCredential.user.uid
                const firebase = useFirebaseStore();
                const firebaseResponse = await firebase.registerUser(user)
                await updateProfile(userCredential.user, { displayName: name });

                return {
                    ok: true,
                    data: userCredential.user,
                    notify: firebaseResponse.notify
                }
            } catch (error) {
                console.log({ error });
                return {
                    ok: false,
                    error
                }
            }
        },
        async registerWithEmail(user, password) {
            const createUser = httpsCallable(functions, "createUser");
            const { data } = await createUser({ user, password });
            console.log({ data });
        },
        async logout() {
            console.log("logout");
            signOut(auth).then(() => {
                this.loggedIn = false;
                this.user = null;
                this.message = "Successfully logged out"
            }).catch((error) => {
                this.error.message = error.message;
                this.error.code = error.code;
            })
        },
        getCurrentUser() {
            return new Promise((resolve) => {
                const unsubscribe = onAuthStateChanged(auth, (user) => {
                    console.log("onAuthStateChanged")
                    if (user) {
                        this.loggedIn = true;
                        this.user = {
                            displayName: user.displayName,
                            email: user.email,
                            uid: user.uid,
                            photoURL: user.photoURL
                        }
                    }
                    else {
                        this.loggedIn = false;
                        this.user = null;
                    }
                    unsubscribe();
                    resolve(user);
                })
            })
        },
        setCurrentUser(user) {
            console.log("setCurrentUser", user)
            this.user = user;
            this.loggedIn = user ? true : false;
        },
        async getUserClaims() {
            const user = await this.getCurrentUser();
            console.log({ user })
            const idToken = auth.currentUser ? await getIdTokenResult(auth.currentUser) : null
            console.log({ idToken })
            return idToken;
        }
    }
})
