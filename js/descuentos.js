//  Descuento por pago en efectivo

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}


function buttonDiscount() {

    const inputP = document.getElementById("InputPrice").value;
    

    const inputD = document.getElementById("InputDiscount").value;
    

    const precioConDesc = calcularPrecioConDescuento(inputP, inputD);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento pagando en efectivo son: $" + precioConDesc;
}

// Descuento por pago con Bono

function calcularPrecioConDescuentoBono(precio, descuento) {
    const porcentajePrecioConDescuentoBono = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuentoBono) / 100;
    const porcentajeDescuentoAdicional = (precioConDescuento * 90) / 100;

    return porcentajeDescuentoAdicional;
}


function buttonDiscountBono() {

    const inputPB = document.getElementById("InputPriceBono").value;
    

    const inputDB = document.getElementById("InputDiscountBono").value;
    

    const precioConDescBono = calcularPrecioConDescuentoBono(inputPB, inputDB);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento pagando con Bono son: $" + precioConDescBono;
}



// Función para seleccionar el tipo de pago que va a realizar


function requestButton() {
    const paymentTipe = document.getElementById("payment-type").value;

    const completedSelectPaymnet = selectPayment(paymentTipe);

    alert(completedSelectPaymnet);

}




function selectPayment(input) {

    const selectInput = input;

    const cashPayment = document.getElementById("cashSection");
    const bonusPayment = document.getElementById("bonusSection");


    if (selectInput == 0) {
        bonusPayment.style.display = 'none';
        cashPayment.style.display = '';

        return buttonDiscount();

        
    } else {
        cashPayment.style.display = 'none';
        bonusPayment.style.display = '';

        return buttonDiscountBono();
        
    }

}








