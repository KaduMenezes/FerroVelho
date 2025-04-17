document.addEventListener('DOMContentLoaded', function () {
    const fixedPrices = {
        aluminum: 15.50,
        iron: 5.80,
        copper: 67.00,
        cardboard: 100.45
    };

    for (const [material, price] of Object.entries(fixedPrices)) {
        document.getElementById(`${material}-price`).textContent =
            `R$ ${price.toFixed(2).replace('.', ',')}/kg`;
    }
});