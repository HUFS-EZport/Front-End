import { decode } from "jsonwebtoken";

export const ACCESS_TOKEN_KEY = "EZPORTS_ACCESS_TOKEN";
export const REFRESH_TOKEN_KEY = "EZPORTS_REFRESH_TOKEN";

export function getExpires(token) {
    const decoded = decode(token);

    if (!decoded) throw new Error("Invalid token: failed to decode.");

    const { exp } = decoded;

    return new Date(exp * 1000);
}

/**
 * Check is token valid
 * @param token {string}
 * @return {boolean}
 */
export function isTokenValid(token) {
    const decoded = decode(token);

    // when token is invalid
    if (!decoded) return false;

    const { exp } = decoded;

    // return true when token is valid and not expired
    return new Date().valueOf() < exp * 1000;
}
