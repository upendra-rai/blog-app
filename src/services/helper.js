import axious from "axios";

export const BASE_URL='http://localhost:9090';

export const myAxios=axious.create({
    baseURL: BASE_URL
})