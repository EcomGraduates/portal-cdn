/*
    © 2021 EcomGraduates
*/

// Quantity change
window.initCartQty = () => {
    document.querySelectorAll('.cart-qty').forEach((el) => {
        el.addEventListener('change', () => {
            fetch('/cart/change.js', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: el.dataset.lineItemKey,
                    quantity: el.value
                })
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)

                    document.querySelectorAll('.cart-items-count').forEach((el2) => {
                        el2.textContent = data.item_count
                    })

                    fetch(window.location.href)
                        .then((response) => response.text())
                        .then((data2) => {
                            const parser = new DOMParser()
                            const newDocument = parser.parseFromString(data2, 'text/html')
                            document.querySelector('#offcanvas-cart-inner')?.replaceWith(newDocument.querySelector('#offcanvas-cart-inner'))
                            document.querySelector('#cart-page')?.replaceWith(newDocument.querySelector('#cart-page'))
                            if (data.items.length === 0) {
                                setTimeout(() => {
                                    const offcanvas = bootstrap.Offcanvas.getInstance(document.querySelector('#offcanvas-cart'))
                                    offcanvas.hide()
                                }, 500)
                            }
                            window.initCartQty()
                            window.initHandleRemoveButtons()
                        })
                })
        })
    })
}
window.initCartQty()

// Handle remove button
window.initHandleRemoveButtons = () => {
    document.querySelectorAll('.offcanvas-cart-remove-btn').forEach((btn) => {
        if (!btn.classList.contains('init')) {
            btn.classList.add('init')
            btn.addEventListener('click', (e) => {
                fetch('/cart/change.js', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        id: btn.dataset.lineItemKey,
                        quantity: 0
                    })
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data)

                        document.querySelectorAll('.cart-items-count').forEach((el2) => {
                            el2.textContent = data.item_count
                        })

                        fetch(window.location.href)
                            .then((response) => response.text())
                            .then((data2) => {
                                const parser = new DOMParser()
                                const newDocument = parser.parseFromString(data2, 'text/html')
                                document.querySelector('#offcanvas-cart-inner')?.replaceWith(newDocument.querySelector('#offcanvas-cart-inner'))
                                document.querySelector('#cart-page')?.replaceWith(newDocument.querySelector('#cart-page'))
                                if (data.items.length === 0) {
                                    setTimeout(() => {
                                        const offcanvas = bootstrap.Offcanvas.getInstance(document.querySelector('#offcanvas-cart'))
                                        offcanvas.hide()
                                    }, 500)
                                }
                                window.initCartQty()
                                window.initHandleRemoveButtons()
                            })
                    })
            })
        }
    })
}
window.initHandleRemoveButtons();

// Summary sticky top layout
(() => {
    const cartSummary = document.querySelector('#cart-summary.sticky-top')
    if (cartSummary) {
        const navbarHeight = document.querySelector('#shopify-section-navbar.sticky-top').clientHeight
        cartSummary.style.top = navbarHeight + 20 + 'px'
        cartSummary.style.zIndex = '1019'
    }
})()
