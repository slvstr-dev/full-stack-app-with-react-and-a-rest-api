import { baseUrl } from "../config";

/**
 * Fetch data from REST API
 * @param {string} path
 * @param {string} method
 * @param {object} body
 * @param {object} credentials
 */
const fetchApi = async (path, method, body, credentials) => {
    const url = baseUrl + path;

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
 * Get user from database
 * @param {object} credentials
 */
export const getUser = async (credentials) => {
    const response = await fetchApi("/users", "GET", null, credentials);
    const data = await response.json();

    if (response.status === 200) {
        return data.user;
    } else if (response.status === 401) {
        return null;
    } else {
        throw new Error();
    }
};

/**
 * Add user to database
 * @param {object} user
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
 * Get all courses from database
 * @returns
 */
export const getCourses = async () => {
    const response = await fetchApi("/courses", "GET", null, null);
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
 * Get course from database
 * @param {string} id
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
 * Add course to database
 * @param {object} course
 * @param {object} loggedInUser
 */
export const createCourse = async (course, loggedInUser) => {
    const response = await fetchApi("/courses", "POST", course, {
        emailAddress: loggedInUser.emailAddress,
        password: loggedInUser.password,
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
 * Update course on database
 * @param {object} course
 * @param {object} loggedInUser
 */
export const updateCourse = async (course, loggedInUser) => {
    const response = await fetchApi(`/courses/${course.id}`, "PUT", course, {
        emailAddress: loggedInUser.emailAddress,
        password: loggedInUser.password,
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
 * Delete course from database
 * @param {string} id
 * @param {object} loggedInUser
 */
export const deleteCourse = async (id, loggedInUser) => {
    const response = await fetchApi(`/courses/${id}`, "DELETE", null, {
        emailAddress: loggedInUser.emailAddress,
        password: loggedInUser.password,
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
