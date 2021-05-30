import axios from "axios";

export const api = axios.create({
    baseUrl: "http://pokeapi.co/api/v2"
})