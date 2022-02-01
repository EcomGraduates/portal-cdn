
// Navbar - CTA button
document.querySelectorAll('.navbar-cta-btn').forEach((btn) => {
    const announcmentbarHeight = document.querySelector('#announcement-bar')?.clientHeight || 0
    window.addEventListener('scroll', () => {
        if (window.scrollY > announcmentbarHeight) {
            btn.classList.remove(btn.dataset.classCurrent)
            btn.classList.add(btn.dataset.classOnScroll)
        } else {
            btn.classList.remove(btn.dataset.classOnScroll)
            btn.classList.add(btn.dataset.classCurrent)
        }
    })
})

// Navbar - Adjust navbar-brand
const navbarBrandSubtitle = document.querySelector('#navbar .navbar-brand .subtitle')
if (navbarBrandSubtitle) {
    window.addEventListener('scroll', (e) => {
        if (window.scrollY > 0) {
            navbarBrandSubtitle.style.display = 'block'
        } else {
            navbarBrandSubtitle.style.display = 'none'
        }
    })
}

// Newsletter
if (window.location.href.indexOf('?customer_posted=true') > -1) {
    setTimeout(() => {
        document.querySelector('.newsletter').scrollIntoView()
    }, 750)
}


// Featured Products - Init SplideJS slider
const initAllSplideFeaturedProducts = () => {
    document.querySelectorAll('.featured-products .splide')
        .forEach((el) => {
            if (el.classList.contains('init')) {
                return false
            }
            el.classList.add('init')
            new Splide(el, {
                arrows: el.dataset.arrows === 'true',
                pagination: el.dataset.pagination === 'true',
                easing: el.dataset.easing,
                speed: Number(el.dataset.speed),
                autoplay: el.dataset.autoplay === 'true',
                interval: Number(el.dataset.interval),
                perMove: Number(el.dataset.perMove),
                rewind: true,
                breakpoints: {
                    [576 - 1]: {
                        perPage: Number(el.dataset.breakpointXs)
                    },
                    [768 - 1]: {
                        perPage: Number(el.dataset.breakpointSm)
                    },
                    [992 - 1]: {
                        perPage: Number(el.dataset.breakpointMd)
                    },
                    [1200 - 1]: {
                        perPage: Number(el.dataset.breakpointLg)
                    },
                    [1400 - 1]: {
                        perPage: Number(el.dataset.breakpointXl)
                    }
                },
                perPage: Number(el.dataset.breakpointXxl)
            }).mount()
        })
}
initAllSplideFeaturedProducts()

// Featured Reviews - Init SplideJS slider
const initAllSplideFeaturedReviews = () => {
    document.querySelectorAll('.featured-reviews .splide')
        .forEach((splide) => {
            if (splide.classList.contains('init')) {
                return false
            }
            splide.classList.add('init')
            new Splide(splide, {
                type: 'loop',
                arrows: splide.dataset.arrows === 'true',
                pagination: splide.dataset.pagination === 'true',
                easing: splide.dataset.easing,
                speed: Number(splide.dataset.speed),
                autoplay: splide.dataset.autoplay === 'true',
                interval: Number(splide.dataset.interval),
                perMove: Number(splide.dataset.perMove),
                breakpoints: {
                    [576 - 1]: {
                        perPage: Number(splide.dataset.breakpointXs)
                    },
                    [768 - 1]: {
                        perPage: Number(splide.dataset.breakpointSm)
                    },
                    [992 - 1]: {
                        perPage: Number(splide.dataset.breakpointMd)
                    },
                    [1200 - 1]: {
                        perPage: Number(splide.dataset.breakpointLg)
                    },
                    [1400 - 1]: {
                        perPage: Number(splide.dataset.breakpointXl)
                    }
                },
                perPage: Number(splide.dataset.breakpointXxl)
            }).mount()
        })
}
initAllSplideFeaturedReviews()

// Fancy Image Slider - Init SplideJS slider
const initAllSplideFancyImageSlider = () => {
    document.querySelectorAll('.fancy-image-slider .splide')
        .forEach((el) => {
            if (el.classList.contains('init')) {
                return false
            }
            el.classList.add('init')
            new Splide(el, {
                type: 'loop',
                arrows: el.dataset.arrows === 'true',
                pagination: el.dataset.pagination === 'true',
                easing: el.dataset.easing,
                speed: Number(el.dataset.speed),
                autoplay: el.dataset.autoplay === 'true',
                interval: Number(el.dataset.interval),
                perMove: Number(el.dataset.perMove),
                rewind: true,
                focus: 'center',
                breakpoints: {
                    [576 - 1]: {
                        perPage: Number(el.dataset.breakpointXs),
                        padding: {
                            left: '2rem',
                            right: '2rem'
                        }
                    },
                    [768 - 1]: {
                        perPage: Number(el.dataset.breakpointSm)
                    },
                    [992 - 1]: {
                        perPage: Number(el.dataset.breakpointMd)
                    },
                    [1200 - 1]: {
                        perPage: Number(el.dataset.breakpointLg)
                    },
                    [1400 - 1]: {
                        perPage: Number(el.dataset.breakpointXl)
                    }
                },
                perPage: Number(el.dataset.breakpointXxl)
            }).mount()
        })
}
initAllSplideFancyImageSlider()

// Handle Shopify Theme editor events
document.addEventListener('shopify:section:load', (e) => {
    if (e.target.querySelector('.featured-products')) {
        initAllSplideFeaturedProducts()
    }
    if (e.target.querySelector('.featured-reviews')) {
        initAllSplideFeaturedReviews()
    }
    if (e.target.querySelector('.fancy-image-slider')) {
        initAllSplideFancyImageSlider()
    }
})
