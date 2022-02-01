//check if cookie exists
function checkACookieExists(Cookie) {
    if (document.cookie.split(';').some((item) => item.trim().startsWith(Cookie))) {
        return true
    }
}
//check if cookie has value
function checkCookieHasASpecificValue(Value) {
    if (document.cookie.split(';').some((item) => item.includes(Value))) {
        return true
    }
}
//get expiration of cookie
function checkCookieExpiration(Value) {
    if (document.cookie.split(';').some((item) => item.includes(Value))) {
        return true
    }
}
if (checkACookieExists('LoggedIn') && checkCookieHasASpecificValue('LoggedIn=true')) {
    window.location.replace("/dashboard");
}
