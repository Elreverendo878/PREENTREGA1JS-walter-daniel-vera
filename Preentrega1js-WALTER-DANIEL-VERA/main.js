var productos = [
    {
    nombre: 'acer nitro',
    tipo: 'computadora'
    },
    {
    nombre: 'heladera',
    tipo: 'electrodoméstico'
    },
    {
    nombre: 'asus',
    tipo: 'computadora'
    },
    {
    nombre: 'macbook',
    tipo: 'computadora'
    },
    {
    nombre: 'lenovo',
    tipo: 'computadora'
    },
    {
    nombre: 'toshiba',
    tipo: 'computadora'
    }
    ];
    var computadoras = [];
    for (var i = 0; i < productos.length; i++) {
    if (productos[i].tipo === 'computadora') {
    computadoras.push(productos[i]);
    }
    }
    console.log(computadoras);

var x = 0;
switch (x) {
    case 0:
    console.log('x is 0');
    break;
    case 1:
    console.log('x is 1');
    break;
    case 2:
    console.log('x is 2');
    break;
    default:
    console.log('x is not 0, 1, or 2');
}

var i = 0;
do {
    i += 1;
    console.log(i);
} while (i < 5);
var i = 0;
while (i < 5) {
    i += 1;
    console.log(i);
}

let precioBase = document.getElementById("precioBase");
let gastosEnvio = document.getElementById("gastosEnvio");
let precioFinal = document.getElementById("precioFinal");

function calcularPrecioFinal() {
    let total = +precioBase.value + +gastosEnvio.value;
    precioFinal.value = total;
    alert("El precio final es: " + total);
    console.log(total);
}
