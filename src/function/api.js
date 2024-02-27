import {
    ApiClient,
    LeagueControllerApi,
    MemberControllerApi,
    SportControllerApi,
    TeamControllerApi,
    CreateMember, Login
} from "@hufs-ezport/api-client";

// Get API root URL from next.config.js
const API_ROOT_URL = process.env.EZPORTS_API_ROOT_URL;

function defaultConfig(token = undefined) {
    const client = new ApiClient();

    // Replace API root url
    client.basePath = API_ROOT_URL;

    // Remove User-Agent header
    client.defaultHeaders = {};

    // If access token provided, set token to header
    if (token) {
        client.authentications["bearer"] = token;
    }

    return client;
}

/**
 * @return {Promise<import("@hufs-ezport/api-client").ApiResponseListGetSport>}
 */
export async function getSportList() {
    const api = new SportControllerApi(defaultConfig());

    return new Promise((resolve, reject) => {
        api.getSports((err, data, res) => {
            if (err) {
                reject(err);
            }
            resolve(res.body);
        })
    })
}

/**
 *
 * @param id {number}
 * @param token {string | undefined}
 * @return {Promise<import("@hufs-ezport/api-client").ApiResponseGetTeam>}
 */
export async function getTeam(id, token = undefined) {
    const api = new TeamControllerApi(defaultConfig(token));

    return new Promise((resolve, reject) => {
        api.getTeam(id, (err, data, res) => {
            if (err) reject(err);
            resolve(res.body);
        })
    })
}

/**
 * @param leagueId {number}
 * @param token {string | undefined}
 * @return {Promise<import("@hufs-ezport/api-client").ApiResponseGetLeague>}
 */
export async function getLeague(leagueId, token = undefined) {
    const api = new LeagueControllerApi(defaultConfig(token));

    return new Promise((resolve, reject) => {
        api.getLeague(leagueId, (err, data, res) => {
            if (err) reject(err);
            resolve(res.body);
        });
    });
}

/**
 * @param email {string}
 * @param password {string}
 * @param nickname {string}
 * @return {Promise<import("@hufs-ezport/api-client").ApiResponseCreateMember>}
 */
export async function signUp(email, password, nickname) {
    const api = new MemberControllerApi(defaultConfig());

    const user = new CreateMember();
    user.email = email;
    user.password = password;
    user.nickname = nickname;

    return new Promise((resolve, reject) => {
        api.signUp(user, (err, data, res) => {
            if (err) reject(err);
            resolve(res.body);
        })
    })
}

/**
 * @param email {string}
 * @param password {string}
 * @return {Promise<import("@hufs-ezport/api-client").ApiResponseLogin>}
 */
export async function login(email, password) {
    const api = new MemberControllerApi(defaultConfig());

    const login = new Login();
    login.email = email;
    login.password = password;

    return new Promise((resolve, reject) => {
        api.login(login, (err, data, res) => {
            if (err) reject(err);
            resolve(res.body);
        });
    });
}


