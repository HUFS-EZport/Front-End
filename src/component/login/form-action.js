"use server";

import { login } from "@/function/api";
import { setAccessToken, setRefreshToken } from "@/function/token/set";

export default async function formAction(prevState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    try {
        const res = await login(email, password);

        if (res.code !== "200") {
            return false;
        }

        const { accessToken, refreshToken } = res.data;
        await setAccessToken(accessToken);
        await setRefreshToken(refreshToken);

        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
}
