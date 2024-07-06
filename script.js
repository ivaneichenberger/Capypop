document.addEventListener("DOMContentLoaded", () => {
    const fetchProducts = (url) => fetch(url).then(response => response.json());

    Promise.all([
        fetchProducts('products1.json'),
        fetchProducts('products2.json'),
        fetchProducts('products3.json')
    ])
    .then(([products1, products2, products3]) => {
        const container = document.getElementById('products-container');
        products1.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <a href="product-details.html?id=${product.id}&type=product1">
                    <img src="${product.images[0]}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p>Precio: $${product.price}</p>
                </a>
            `;
            container.appendChild(productCard);
        });

        const otherContainer = document.getElementById('other-products-container');
        products2.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <a href="product-details.html?id=${product.id}&type=product2">
                    <img src="${product.images[0]}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p>Precio: $${product.price}</p>
                </a>
            `;
            otherContainer.appendChild(productCard);
        });

        const moreContainer = document.getElementById('more-products-container');
        products3.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <a href="product-details.html?id=${product.id}&type=product3">
                    <img src="${product.images[0]}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p>Precio: $${product.price}</p>
                </a>
            `;
            moreContainer.appendChild(productCard);
        });
    })
    .catch(error => console.error('Error al cargar los productos:', error));
});

window.addEventListener('scroll', function() {
    var scrollArrow = document.querySelector('.scroll-arrow');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        scrollArrow.style.display = 'none';
    } else {
        scrollArrow.style.display = 'block';
    }
});
