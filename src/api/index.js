import request from "./request";

export const get = (source, id = undefined) => request({
    url: `/${id}`,
    method: "GET",
    cancelToken: source.token
});

export const post = (source, content) => request({
    url: "/post/",
    method: "POST",
    cancelToken: source.token,
    data: {
        content
    }
});
