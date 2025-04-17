document.addEventListener('DOMContentLoaded', function () {
    const fixedPrices = {
        aluminum: 5.50,
        iron: 1.20,
        copper: 32.00,
        cardboard: 100.45
    };

    for (const [material, price] of Object.entries(fixedPrices)) {
        document.getElementById(`${material}-price`).textContent =
            `R$ ${price.toFixed(2).replace('.', ',')}/kg`;
    }
});