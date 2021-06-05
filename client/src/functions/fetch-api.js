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
export const getUser = async (credentials) => {
    const response = await fetchApi("/users", "GET", null, credentials);

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

/**
 *
 * @param {*} course
 * @param {*} credentials
 */
export const createCourse = async (course, credentials) => {
    const response = await fetchApi("/courses", "POST", course, {
        emailAddress: "hello@slvstr.dev",
        password: "123",
    });

    if (response.status === 201) {
        return [];
    } else if (response.status === 401) {
        const data = await response.json();

        return data;
    } else if (response.status === 400) {
        const data = await response.json();

        return data.errors;
    } else {
        throw new Error();
    }
};

/**
 *
 * @param {*} course
 * @param {*} credentials
 * @returns
 */
export const updateCourse = async (course, credentials) => {
    const response = await fetchApi(`/courses/${course.id}`, "PUT", course, {
        emailAddress: "hello@slvstr.dev",
        password: "123",
    });

    if (response.status === 204) {
        return [];
    } else if (response.status === 403) {
        return [];
    } else if (response.status === 400) {
        const data = await response.json();

        return data.errors;
    } else {
        throw new Error();
    }
};

/**
 *
 * @param {*} course
 * @param {*} credentials
 * @returns
 */
export const deleteCourse = async (course, credentials) => {
    const response = await fetchApi(`/courses/${course.id}`, "DELETE", course, {
        emailAddress: "hello@slvstr.dev",
        password: "123",
    });

    if (response.status === 204) {
        return [];
    } else if (response.status === 403) {
        return [];
    } else if (response.status === 400) {
        const data = await response.json();

        return data.errors;
    } else {
        throw new Error();
    }
};
