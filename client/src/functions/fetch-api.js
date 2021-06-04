import config from "../config";

/**
 *
 * @param {*} path
 * @param {*} method
 * @param {*} body
 * @returns
 */
const fetchApi = async (path, method, body = null) => {
    const url = config.apiBaseUrl + path;

    const options = {
        method,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: body !== null && JSON.stringify(body),
    };

    return fetch(url, options);
};

/**
 *
 * @param {*} user
 * @returns
 */
export const getUser = async (user) => {
    const response = await fetchApi("/users", "GET", null);

    if (response.status === 200) {
        return [];
    } else if (response.status === 401) {
        const data = await response.json();

        return data.errors;
    } else {
        throw new Error();
    }
};

/**
 *
 * @param {*} user
 * @returns
 */
export const createUser = async (user) => {
    const response = await fetchApi("/users", "POST", user);

    if (response.status === 201) {
        return [];
    } else if (response.status === 400) {
        const data = await response.json();

        return data.errors;
    } else {
        throw new Error();
    }
};
