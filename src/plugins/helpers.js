export default {
    install(app) {
        const helpers = {}
        helpers.momento = (data) => {
            const antes = data;
            const agora = Date.now();
            const minutos = (agora - antes) / 1000 / 60;
            if (minutos < 60) {
                return Math.floor(minutos) + " min"
            }
            const horas = minutos / 60;
            if (horas < 24) {
                return Math.floor(horas) + " h"
            }
            const dias = horas / 24;
            if (dias < 7) {
                return Math.floor(dias) + " d"
            }
            const semanas = dias / 7;
            return Math.floor(semanas) + " sem"
        }

        helpers.fieldAttrs = {
            "rounded": "pill",
            "variant": "outlined",
            "density": "compact",
            "color": "primary",
            "class": "mt-1"
        }
        app.provide("$helpers", helpers);

    }
}