const API_URL = 'https://www.course-api.com/javascript-store-products';
const productContainer = document.getElementById('product-container');

function handleError(error) {
    console.error(`An error occurred:`, error.message || error);
    
    if (productContainer) {
        productContainer.innerHTML = `<p class="error">Failed to load products. Please check your network connection.</p>`;
    }
}

function displayProducts(products) {
    if (!productContainer) {
        console.error("Product container element not found!");
        return;
    }

    productContainer.innerHTML = '';

    const productsToDisplay = products.slice(0, 5); 

    productsToDisplay.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        
        const image = document.createElement('img');
        image.src = product.fields.image[0].url; 
        image.alt = product.fields.name;

        const name = document.createElement('h3');
        name.textContent = product.fields.name;

        const priceValue = product.fields.price / 100;
        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = `$${priceValue.toFixed(2)}`;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(price);

        productContainer.appendChild(card);
    });
}
function fetchProductsThen() {
    console.log("--- Executing Promise-Based Fetch (.then()) ---");
    
    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            data.forEach(product => {
                console.log(`Product Name (.then()): ${product.fields.name}`);
            });
        })
        .catch(error => {
            console.error("Promise-Based Fetch Failed:", error);
        });
}

async function fetchProductsAsync() {
    console.log("--- Executing Async/Await Fetch (try/catch) ---");
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const products = await response.json();
        
        displayProducts(products);

    } catch (error) {
        handleError(error);
    }
}

fetchProductsThen();
fetchProductsAsync();
