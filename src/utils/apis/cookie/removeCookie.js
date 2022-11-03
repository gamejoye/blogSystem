export const removeCookie = (cname) => {
    document.cookie = cname+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}