document.addEventListener("DOMContentLoaded", () => {
    const currentPage = document.location.pathname;

    if (currentPage.endsWith("form.html")) {
        LoadProducts();
    }
    else if (currentPage.endsWith("review.html")) {
        incrementReviewCounter();
    }
})

function LoadProducts() {

    const products = [
        {
        id: "fc-1888",
        name: "flux capacitor",
        "avg-rating": 4.5
        },
        {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
        },
        {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
        },
        {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
        },
        {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
        }
    ];

    const productSelect = document.querySelector("#product-name");
    const postButton = document.querySelector("#post-review");

    products.forEach(product => {
        const option = document.createElement("option")

        option.value = product.id;
        option.textContent = product.name;

        productSelect.appendChild(option);
    });
}

function incrementReviewCounter() {
    const numReviews = document.querySelector("#reviewCount");
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    numReviews.textContent = reviewCount;
}
