let producto = Number(prompt("Seleccione un producto:\n 1- Aire Acondicionado $100.000\n 2- Ventilador $10.000"))
let formaDePago = Number(prompt("Seleccione una forma de pago:\n 1- Efectivo (Descuento del 10%)\n 2- Tarjeta (Cuotas)"))
let precio1 = 100000
let precio2 = 10000
let salida = ""
let cuotas
let montoCuota

// ----------------------------------------------------------------------------------------------------------------------------

if (formaDePago === 2 && formaDePago !== 1) {
    cuotas = Number(prompt("Seleccione la cantidad de cuotas:\n 1- 1 Cuota (Sin Interes)\n 2- 12 Cuotas (Recargo del 10%)"))
}

if (producto === 1 && formaDePago === 1) {
    alert("Total a pagar: $" + precioEfectivo(precio1))
}

if (producto === 2 && formaDePago === 1) {
    alert("Total a pagar: $" + precioEfectivo(precio2))
}

if (producto === 1 && formaDePago === 2) {
    if (cuotas === 2) {
        montoCuota = (precio1 + (precio1 * 0.10)) / 12
        for (let i = 0; i < 12; i++) {
            salida = salida + "Cuota " + (i + 1) + ":" + " " + "$" + montoCuota.toFixed(2) + "\n"
        }
        alert("Total a pagar: $" + precioTarjeta(precio1) + "\n" + salida)
    } else alert("Total a pagar: $" + precioTarjeta(precio1))
}
    
if (producto === 2 && formaDePago === 2) {
    if (cuotas === 2) {
        montoCuota = (precio2 + (precio2 * 0.10)) / 12
        for (let i = 0; i < 12; i++) {
            salida = salida + "Cuota " + (i + 1) + ":" + " " + "$" + montoCuota.toFixed(2) + "\n"
        }
        alert("Total a pagar: $" + precioTarjeta(precio2) + "\n" + salida)
    } else alert("Total a pagar: $" + precioTarjeta(precio2))
}

// ----------------------------------------------------------------------------------------------------------------------------

function precioEfectivo(precio) {
    return precio - (precio * 0.10)
}

function precioTarjeta(precio) {
    if (cuotas === 1) {
        return precio
    } else {
        return precio = precio + (precio * 0.10)      
    }
}


