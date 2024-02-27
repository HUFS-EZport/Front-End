"use server";

import setCookie from "@/function/cookie/set";
import { ACCESS_TOKEN_KEY, getExpires, REFRESH_TOKEN_KEY } from "@/function/token/share";

export async function setAccessToken(token) {
    const expires = getExpires(token);
    await setCookie(ACCESS_TOKEN_KEY, token, expires);
}

export async function setRefreshToken(token) {
    const expires = getExpires(token);
    await setCookie(REFRESH_TOKEN_KEY, token, expires);
}
