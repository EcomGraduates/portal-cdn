function verifypassword() {
    const password = document.getElementById('password1');
    const confirm = document.getElementById('password2');
    if (confirm.value === password.value) {
        confirm.setCustomValidity('');
    } else {
        confirm.setCustomValidity('Passwords do not match');
    }
}
const storeUrlEle = document.querySelector('#store_url');
function delay(callback, ms) {
    var timer = 0;
    return function () {
        storeUrlEle.classList.remove('not-checked');
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            callback.apply(context, args);
        }, ms || 0);
    };
}
storeUrlEle.addEventListener('keyup', (delay(function (e) {

    const urlInput = storeUrlEle.value.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch('https://' + urlInput + '/meta.json', requestOptions)
        .then(response =>
            response.json()
        )
        .then(result => {
            console.log(result.myshopify_domain)
            storeUrlEle.classList.remove('border', 'border-1', 'border-danger', 'is-invalid')
            storeUrlEle.setAttribute('style', '')
            storeUrlEle.classList.add('border', 'border-1', 'border-success', 'is-valid')
            storeUrlEle.setAttribute('style', 'box-shadow: 0 0.1rem 0.5rem #198754;')
            storeUrlEle.value = result.myshopify_domain;
        }
        )
        .catch(error => {
            console.log('error', error),
                storeUrlEle.classList.add('border', 'border-1', 'border-danger', 'is-invalid')
            storeUrlEle.setAttribute('style', 'box-shadow: 0 0.1rem 0.5rem #dc3545;')
            storeUrlEle.value = ''
        }
        );

}, 900)));
