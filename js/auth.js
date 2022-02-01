//check if cookie exists
function checkACookieExists(Cookie) {
    if (document.cookie.split(';').some((item) => item.trim().startsWith(Cookie))) {
        return true
    } else {
        return false
    }
}
//check if cookie has value
function checkCookieHasASpecificValue(Value) {
    if (document.cookie.split(';').some((item) => item.includes(Value))) {
        return true
    } else {
        return false
    }
}

if (checkACookieExists('LoggedIn') && checkCookieHasASpecificValue('LoggedIn=true')) {
    console.log('logged in')
    window.location.replace("/dashboard");
} else {
    console.log('Logged Out');
}