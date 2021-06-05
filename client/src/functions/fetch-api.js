import { baseUrl } from "../config";

/**
 *
 * @param {*} path
 * @param {*} method
 * @param {*} body
 * @param {*} credentials
 * @returns
 */
const fetchApi = async (path, method, body, credentials) => {
    const url = baseUrl.api + path;

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
 * @param {*} credentials
 * @returns
 */
export const getUser = async (credentials) => {
    const response = await fetchApi("/users", "GET", null, credentials);
    const data = await response.json();

    if (response.status === 200) {
        return data.user;
    } else if (response.status === 401) {
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
 * @returns
 */
export const getCourses = async () => {
    const response = await fetchApi("/courses/", "GET", null, null);
    const data = await response.json();

    if (response.status === 200) {
        return data.courses;
    } else if (response.status === 401) {
        return data.message;
    } else {
        throw new Error();
    }
};

/**
 *
 * @param {*} id
 * @returns
 */
export const getCourse = async (id) => {
    const response = await fetchApi(`/courses/${id}`, "GET", null, null);
    const data = await response.json();

    if (response.status === 200) {
        return data.course;
    } else if (response.status === 401) {
        return data.message;
    } else {
        throw new Error();
    }
};

/**
 *
 * @param {*} course
 * @param {*} credentials
 */
export const createCourse = async (course) => {
    const response = await fetchApi("/courses", "POST", course, {
        emailAddress: "hello@slvstr.dev",
        password: "123",
    });

    if (response.status === 201) {
        return [];
    } else if (response.status === 401) {
        const data = await response.json();

        return data.message;
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
export const updateCourse = async (course) => {
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
 * @param {*} id
 * @param {*} credentials
 * @returns
 */
export const deleteCourse = async (id) => {
    const response = await fetchApi(`/courses/${id}`, "DELETE", null, {
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
