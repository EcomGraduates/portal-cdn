/*
    © 2021 Firetheme.com
    www.firetheme.com
*/

// Init Bootstrap tooltips
document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach((el) => new bootstrap.Tooltip(el))

// Shopify's callenge page - Add BS classes
document.querySelector('.btn.shopify-challenge__button')
    ?.classList.add('btn-primary')

// Shopify's errors message - Add BS classes
const errors = document.querySelector('.errors')
if (errors) {
    errors.classList.add('alert', 'alert-danger')
    errors.querySelector('ul').classList.add('mb-0')
}

// Enter-view animations
const initEnterViewAnimations = () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.animate__animated').forEach((el) => {
                    el.classList.remove('opacity-0')
                    el.classList.add(el.dataset.animateClass)
                })
            }
        })
    }, { threshold: 0, rootMargin: '0px 0px -160px 0px' })

    document.querySelectorAll('.enter-view').forEach((el) => {
        observer.observe(el)
    })
}
initEnterViewAnimations()

document.addEventListener('shopify:section:load', (e) => {
    if (e.target.querySelector('.enter-view')) {
        initEnterViewAnimations()
    }
})

// Flipdown - Countdown timer
// https://github.com/PButcher/flipdown
const initFlipdownTimers = () => {
    document.querySelectorAll('.flipdown').forEach((el) => {
        new FlipDown(Number(el.dataset.countdownTime), el.id).start()
    })
}
initFlipdownTimers()

document.addEventListener('shopify:section:load', (e) => {
    document.querySelectorAll('.flipdown').forEach(el => {
        initFlipdownTimers()
    })
})
