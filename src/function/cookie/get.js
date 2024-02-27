import { cookies } from "next/headers";

export default function getCookie(key) {
    const store = cookies();
    const target = store.get(key);

    if (!target) return undefined;

    return store.get(key).value;
}
