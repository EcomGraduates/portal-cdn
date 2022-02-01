/*
    © 2021 EcomGraduates
*/

// Handle input change
document.querySelector('#predictive-search-input')?.addEventListener('input', window.debounce((e) => {
    const list = document.querySelector('#predictive-search-list')
    if (e.target.value.length === 0) {
        list.style.display = 'none'
        document.querySelector('#offcanvas-search .offcanvas-footer').style.display = 'none'
    } else {
        fetch(`/search/suggest.json?q=${e.target.value}&resources[type]=product&resources[limit]=${e.target.dataset.limit}&resources[options][unavailable_products]=last`)
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                const products = data.resources.results.products
                if (products.length > 0) {
                    let html = ''
                    products.forEach((product, index) => {
                        html += `
                            <li class="product-list-item">
                                <a href="${product.url}" class="row align-items-center py-1 text-decoration-none">
                                    <div class="col-3 px-2">
                                        <img 
                                            class="product-img img-fluid me-3 ${e.target.dataset.imgBorder}"
                                            src="${window.resizeImage(product.featured_image.url || 'no-image.gif', `${e.target.dataset.imgWidth}x${e.target.dataset.imgHeight}`, 'center')}"
                                            alt="${product.featured_image.alt}" 
                                            width="${e.target.dataset.imgWidth}"
                                            height="${e.target.dataset.imgHeight}"
                                            loading="lazy">
                                    </div>
                                    <div class="col-9 px-2">
                                        <h5 class="product-title h6 mb-1">
                                            ${product.title}
                                        </h5>
                                        <p class="product-price text-body mb-1">
                                            <s class="product-price-compare text-muted me-1 ${product.compare_at_price_min > product.price ? '' : 'd-none'}">
                                                <span class="visually-hidden">
                                                    ${e.target.dataset.textOldPrice}
                                                </span>
                                                ${window.formatMoney(product.compare_at_price_min)}
                                            </s>
                                            <span class="product-price-final">
                                                <span class="price-from ${product.price_min !== product.price_max ? '' : 'd-none'}">
                                                    ${e.target.dataset.textPriceFrom}
                                                </span>
                                                ${window.formatMoney(product.price)}
                                            </span>
                                        </p>
                                    </div>
                                </a>
                            </li>
                        `
                        list.innerHTML = html
                        list.style.display = 'block'
                    })
                } else {
                    list.style.display = 'none'
                }

                if (products.length === Number(e.target.dataset.limit)) {
                    document.querySelector('#offcanvas-search .offcanvas-footer').style.display = 'block'
                } else {
                    document.querySelector('#offcanvas-search .offcanvas-footer').style.display = 'none'
                }
            })
    }
}, 200))

// Handle "View all results" button
document.querySelector('#predictive-search-btn-more').addEventListener('click', (e) => {
    const q = document.querySelector('#predictive-search-input').value
    window.location.href = e.target.dataset.searchRouteUrl + `?q=${q}`
})
