import getCookie from "@/function/cookie/get";
import { isTokenValid, ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/function/token/share";

export function getAccessToken() {
    return getCookie(ACCESS_TOKEN_KEY);
}

export function getRefreshToken() {
    return getCookie(REFRESH_TOKEN_KEY);
}

/**
 * check is loginable
 * @return {boolean}
 */
export function isLoginable() {
    const authToken = getAccessToken();
    return (typeof authToken !== "undefined" &&
        authToken.trim() !== "" &&
        isTokenValid(authToken));
}

/**
 * check is refreshable
 * @return {boolean}
 */
export async function isRefreshable() {
    const refreshToken = getRefreshToken();
    return (typeof refreshToken !== "undefined" &&
        refreshToken.trim() !== "" &&
        isTokenValid(refreshToken));
}
