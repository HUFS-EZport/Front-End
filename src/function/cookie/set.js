"use server";

import { cookies } from "next/headers";

export default async function setCookie(key, value, expires = undefined) {
    const store = cookies();

    store.set({
        name: key, value,
        path: "/",
        httpOnly: true,
        secure: true,
        expires
    });
}
