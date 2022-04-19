import axios from "axios";

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization: "Client-ID LuFkowtmQrUmi2FxQr4UNRBgYnVrqbNvZITdjeSK6iU"
        }
})