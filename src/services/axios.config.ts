import axios from "axios"

const BASE_URL = "http://shop.cyberlearn.vn/api";

/**
 * axios
 * -axiosWiththoutAuth: những api public
 * -axiosAuth: những api private - cần xác minh
 * 
 */

export const axiosWithoutAuth = axios.create({
    baseURL: BASE_URL,
    //Thời gian đợi một request hoàn thành
    timeout: 180_000,  //180000
})