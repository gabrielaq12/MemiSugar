//Tienda

class Venta {
    constructor ( producto, total){
        this.producto = producto;
        this.total = total;
    }
}

function setUp(){
    localStorage.setItem("carrito", JSON.stringify([]));
    const quesillo = new Producto ("quesillo", 500);
    const pie = new Producto ("pie", 550);
    const pinata = new Producto ("pinata", 480 );
    console.log("setUp listo");
    console.log(quesillo);
}

function agregarAlCarrito(producto){
    let carrito = JSON.parse(localStorage.getItem("carrito"));

    let existe = carrito.findIndex(function(item){
        return item.producto == producto;
    });
    if(existe == -1){
        let venta = new Venta (producto, producto.precio );
        carrito.push(venta);
    } else {
        carrito[existe].cantidad += 1;
        carrito[existe].total += cantidad * producto.precio;
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log(carrito);
}

function vaciarCarrito(){
    localStorage.setItem("carrito", JSON.stringify([]));

}

function calcularTotalCarrito(){
    let total = 0;
    let carrito = JSON.parse(localStorage.getItem(carrito));
    carrito.forEach(function(element){
        total += element.total; 
    });
    return total;
}

let btnClickServicioQuesillo = document.getElementById("btnClickServicioQuesillo");
btnClickServicioQuesillo.addEventListener("click", function(){agregarAlCarrito(quesillo)});

let btnClickServicioPinata = document.getElementById("btnClickServicioPinata");
btnClickServicioPinata.addEventListener("click", function(){agregarAlCarrito(pinata)});

let btnClickServicioPie = document.getElementById("btnClickServicioPie");
btnClickServicioPie.addEventListener("click", function(){agregarAlCarrito(pie)});

let btnVaciarCarrito = document.getElementById("btnVaciarCarrito");
btnVaciarCarrito.addEventListener("click", vaciarCarrito);





