//Localstorage counter
const reviewCountElement = document.getElementById("reviewCount");
    if (reviewCountElement) {
        let reviewCount = localStorage.getItem("reviewCount") || 0;
        reviewCount = parseInt(reviewCount) + 1;
        localStorage.setItem("reviewCount", reviewCount);
        reviewCountElement.textContent = reviewCount;
    }