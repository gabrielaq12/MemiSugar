//Tienda

class Venta {
    constructor ( producto, total){
        this.producto = producto;
        this.total = total;
    }
}

function agregarAlCarrito(producto){
    let carrito = JSON.parse(localStorage.getItem("carrito"));

    let existe = carrito.findIndex(function(item){
        return item.producto.sabor == producto.sabor;
    });
    if(existe == -1){
        let venta = new Venta (producto, producto.precio );
        venta.cantidad = 1;
        carrito.push(venta);
    } else {
        carrito[existe].cantidad += 1;
        carrito[existe].total += carrito[existe].cantidad * producto.precio;
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function vaciarCarrito(){
    localStorage.setItem("carrito", JSON.stringify([]));
    refrescarCarrito();
}

function calcularTotalCarrito(){
    let total = 0;
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    carrito.forEach(function(element){
        total += element.total; 
    });
    return total;
}

function refrescarCarrito(){
    let cart = document.getElementById("cart");
    cart.style.display = "block";
    var itemsContainer = document.getElementById("products");
    itemsContainer.innerHTML = "";
    let totalContainer = document.getElementById("total");
    totalContainer.innerHTML = "";
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    carrito.forEach(function(element){
        let elementDiv = document.createElement("div");
        elementDiv.innerHTML = element.producto.sabor + " x " + element.cantidad + " = " + element.total;
        itemsContainer.appendChild(elementDiv);
    });
    let elementDiv = document.createElement("div");
    elementDiv.innerHTML = "$"+calcularTotalCarrito();
    totalContainer.appendChild(elementDiv);
}

let btnClickServicioQuesillo = document.getElementById("btnClickServicioQuesillo");
btnClickServicioQuesillo.addEventListener("click", function(){
    agregarAlCarrito(quesillo);
    refrescarCarrito();
});

let btnClickServicioPinata = document.getElementById("btnClickServicioPinata");
btnClickServicioPinata.addEventListener("click", function()
{   
    agregarAlCarrito(pinata);
    refrescarCarrito();
});

let btnClickServicioPie = document.getElementById("btnClickServicioPie");
btnClickServicioPie.addEventListener("click", function(){
    agregarAlCarrito(pie);
    refrescarCarrito();
});

let btnVaciarCarrito = document.getElementById("btnVaciarCarrito");
btnVaciarCarrito.addEventListener("click", vaciarCarrito);




