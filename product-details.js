document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const productType = params.get('type');

    const fetchProducts = (url) => fetch(url).then(response => response.json());

    let fetchUrl;
    if (productType === 'product3') {
        fetchUrl = 'products3.json';
    } else if (productType === 'product2') {
        fetchUrl = 'products2.json';
    } else {
        fetchUrl = 'products1.json';
    }

    fetch(fetchUrl)
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id == productId);
            if (product) {
                const container = document.getElementById('product-details-container');
                const imagesHTML = product.images.map(image => `<div class="slide"><img src="${image}" alt="${product.name}"></div>`).join('');
                container.innerHTML = `
                    <div class="product-card">
                        <div class="slider">
                            <div class="slides">${imagesHTML}</div>
                            <button class="prev">❮</button>
                            <button class="next">❯</button>
                        </div>
                    </div>
                `;

                const slides = container.querySelectorAll('.slide');
                let currentIndex = 0;

                const showSlide = (index) => {
                    slides.forEach((slide, i) => {
                        slide.style.display = i === index ? 'block' : 'none';
                    });
                };

                container.querySelector('.prev').addEventListener('click', () => {
                    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
                    showSlide(currentIndex);
                });

                container.querySelector('.next').addEventListener('click', () => {
                    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
                    showSlide(currentIndex);
                });

                showSlide(currentIndex);
            } else {
                container.innerHTML = '<p>Producto no encontrado</p>';
            }
        })
        .catch(error => console.error('Error al cargar los productos:', error));
});
