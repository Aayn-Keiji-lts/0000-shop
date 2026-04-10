function updatePrice(type) {
    const select = document.getElementById(type + '-qty');
    const priceDisplay = document.getElementById(type + '-price');
    priceDisplay.innerText = '$' + select.value + ' MXN';
}

function updatePCPrice() {
    
    const qtySelect = document.getElementById('pc-qty');
    const typeSelect = document.getElementById('pc-type');
    const priceDisplay = document.getElementById('pc-price');

    if (!qtySelect || !typeSelect || !priceDisplay) {
        console.error("Error: No se encontró uno de los IDs en el HTML");
        return;
    }

    const base = parseInt(qtySelect.value);
    const extra = parseInt(typeSelect.value);
    
    const total = base + extra;
    priceDisplay.innerText = '$' + total + ' MXN';
    
    console.log("Precio actualizado a: " + total);
}

window.onload = updatePCPrice;

const precioIndividual = 425;
const precioBundle = 350;
const ahorro = precioIndividual - precioBundle;

console.log(`¡Te ahorras $${ahorro} MXN!`);