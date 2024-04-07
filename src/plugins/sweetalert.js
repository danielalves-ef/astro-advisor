import Swal from 'sweetalert2'

export default {
    install(app) {
        app.provide("$swal", Swal)
    }
}