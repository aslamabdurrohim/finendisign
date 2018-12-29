/* eslint no-console: 0 */

import axios from "axios";
import { baseURL } from "../utils/consts";

const client = axios.create({
    baseURL
});

const request = options => {
    const onSuccess = response => {
        console.debug("Request Successfull", response);
        return response.data;
    };

    const onError = error => {
        console.error("Request Failed: ", error.config);
        if (error.response) {
            console.error("Status: ", error.response.status);
            console.error("Data: ", error.response.data);
            console.error("Headers: ", error.response.headers);
        } else {
            console.error("Error Message: ", error.message);
        }

        return Promise.reject(error.response || error.message);
    };

    client.defaults.headers.post["content-type"] = "application/json";

    return client(options)
        .then(onSuccess)
        .catch(onError);
};

export default request;
