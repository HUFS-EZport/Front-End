export function isValidEmailFormat(s) {
    const regex = /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    return regex.test(s);
}
