// Example product data for Twisty website
const products = [
    { id: 1, name: "Black Jacket", price: "$49.99", image: "images/black-jacket.jpg" },
    { id: 2, name: "White Sneakers", price: "$69.99", image: "images/white-sneakers.jpg" },
    { id: 3, name: "Blue Jeans", price: "$39.99", image: "images/blue-jeans.jpg" },
    { id: 4, name: "Red Dress", price: "$59.99", image: "images/red-dress.jpg" }
];

// Load products dynamically into the grid
const productGrid = document.getElementById('productGrid');

if (productGrid) {
    products.forEach(product => {
        const productHTML = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button>Add to Cart</button>
            </div>
        `;
        productGrid.innerHTML += productHTML;
    });
} else {
    console.error('Product grid element not found. Make sure the HTML structure matches the script.');
}
