import request from "./request";

export const getById = id => request({
    url: `/${id}`,
    method: "GET"
});

export const getAll = () => request({
    url: "/",
    method: "GET"
});

export const post = content => request({
    url: "/post/",
    method: "POST",
    data: {
        content
    }
});
