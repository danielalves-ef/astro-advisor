// Utilities
import { defineStore } from 'pinia'


export const useChatgptStore = defineStore('chatgpt', (
) => {
    async function fetchEventAssistente(text) {

        try {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Bearer " + import.meta.env.VITE_CHATGPT_KEY);

            const payload = {
                model: "gpt-3.5-turbo-0125",
                messages: [
                    {
                        role: "system",
                        content: `Atue como um especialista de eventos, você precisa incluir essas informações em campos separados e retornar um json com esses campos: 
                         {name: string, startDate: date, startTime: time, endDate: date, endTime: time, localName: string, country: string, region: string, genres: array[string], lineup: array[string], price: number || obj, description: string, age: string, website: array[{name: string, url: string}]}`
                    },
                    {
                        role: "user",
                        content: `TEXTO: ${text}`
                    }
                ]
            }

            const raw = JSON.stringify(payload);
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };
            const response = await fetch("https://api.openai.com/v1/chat/completions", requestOptions);
            const result = await response.json();
            console.log({ result })
            return result
        } catch (error) {
            console.log({ error });
            return error
        }
    }

    return { fetchEventAssistente }

})
