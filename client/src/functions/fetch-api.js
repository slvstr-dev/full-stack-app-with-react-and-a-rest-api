import config from "../config";

/**
 *
 * @param {*} path
 * @param {*} method
 * @param {*} body
 * @param {*} credentials
 * @returns
 */
const fetchApi = async (path, method, body, credentials) => {
    const url = config.apiBaseUrl + path;

    const options = {
        method,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    };

    if (body !== null) {
        options.body = JSON.stringify(body);
    }

    if (credentials !== null) {
        const encodedCredentials = btoa(
            `${credentials.emailAddress}:${credentials.password}`
        );

        options.headers["Authorization"] = `Basic ${encodedCredentials}`;
    }

    return fetch(url, options);
};

/**
 *
 * @param {*} emailAddress
 * @param {*} password
 * @returns
 */
export const getUser = async (emailAddress, password) => {
    const response = await fetchApi("/users", "GET", null, {
        emailAddress,
        password,
    });

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
    const response = await fetchApi("/users", "POST", user, null);

    if (response.status === 201) {
        return [];
    } else if (response.status === 400) {
        const data = await response.json();

        return data.errors;
    } else {
        throw new Error();
    }
};
