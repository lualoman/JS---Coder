
let carrito = []

const contenedor = document.getElementById("contenedor"),
    contenedorCarrito = document.getElementById("contenedorCarrito"),
    precioFinal = document.getElementById("precioFinal"),
    vaciarCarrito = document.getElementById("vaciarCarrito"),
    btnDelivery = document.getElementById("btnDelivery"),
    cliente = document.getElementById("cliente"),
    direccion = document.getElementById("direccion"),
    inputForm = document.getElementById("inputForm"),
    finalizar = document.getElementById("finalizar");


//PEDIR CONFIRMACION DE EDAD
const edadGuardada = JSON.parse(localStorage.getItem("esMayor"));
edadGuardada ? mostrarPagina() : confirmarUsuarioMayor();


function confirmarUsuarioMayor() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: "¿Eres mayor de 18 años?",
        text: "El pedido no se entregará a menores de edad",
        color: "white",
        icon: "warning",
        background: "#141414",
        confirmButtonText: "Si, soy mayor",
        cancelButtonText: "Cancelar",
        showCancelButton: true,
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            guardarEdad(localStorage);
            swalWithBootstrapButtons.fire(
                "¡Confirmado!",
                "Solicitaremos tu DNI al momento de la entrega",
                "success"
            );
            mostrarPagina();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
                "Cancelado",
                "Regresa cuando seas mayor de edad :)",
                "error"
            );
        }
    })
}

function guardarEdad(storage) {
    storage.setItem("esMayor", JSON.stringify(true));
}

function buscarProducto(array, idProducto) {
    return array.find(item => item.id == idProducto);
}

function obtenerIDdeBoton(cadena, nombre) {
    return cadena.replace(nombre, "");
}


//CREACION DE TARJETAS
function mostrarPagina() {

    fetch("https://raw.githubusercontent.com/lualoman/JS-Alomar/main/js/data.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach(combo => {
                let tarjeta = `<div class="col-md-6 col-xl-4 scale" id="tarjetas">
                <div class="card-group">
                <div class="card-body tarjeta">
                    <img src=${combo.imagen} class="card-img-top" alt="imagen de combo">
                    <h5 class="card-title" id="nombre">
                        <hr>${combo.nombre} creado con fetch
                    </h5>
                    <p class="card-text">${combo.descripcion}</p>
                    <p class="card-price" id="precio">$ ${combo.precio}</p>
                    <div class="d-grid gap-2">
                        <button type="submit" class="btn btn__comprar btn-dark" id="agregarItem${combo.id}">¡COMPRAR!</button>
                    </div>
                </div>
            </div>
        </div>`;

                contenedor.innerHTML += tarjeta;
                let btnsComprar = document.querySelectorAll(".btn__comprar");

                btnsComprar.forEach(btn => {
                    btn.addEventListener("click", () => {
                        let id = obtenerIDdeBoton(btn.id, "agregarItem");
                        console.log(id);

                        let producto = buscarProducto(data, id);
                        console.log(producto);
                        carrito.push(producto);
                        renderizarCarrito();
                    })
                })
            })
        })
}

//CREACION DE CARRITO y APLICACION DE BTN ELIMINAR
const renderizarCarrito = () => {
    const contenedorCarrito = document.querySelector("#contenedorCarrito")
    contenedorCarrito.innerHTML = ""

    carrito.forEach((producto) => {
        const div = document.createElement("div")
        div.innerHTML = `
                <div class="row">
                <div class="col"><p>${producto.nombre}</p></div>
                <div class="col"><p>$ ${producto.precio}</p></div>
                <div class="col"><span id="cantidad">${producto.cantidad}</div>
                <div class="col"><button class="btn__eliminar" id="eliminarItem${producto.id}">ELIMINAR</button></div>
                </div>
                `
        contenedorCarrito.appendChild(div)
    })


    let btnsEliminar = document.querySelectorAll(".btn__eliminar");
    btnsEliminar.forEach(btn => {
        btn.addEventListener("click", () => {
            let id = obtenerIDdeBoton(btn.id, "eliminarItem");
            let producto = buscarProducto(carrito, id);
            const indice = carrito.indexOf(producto);
            carrito.splice(indice, 1);
            console.log("Se ha eliminado un combo: ", id)

            renderizarCarrito();

            if (carrito.length === 0) {
                precioFinal.innerText = 0;
            }
        })

        precioFinal.innerText = carrito.reduce((acc, combo) => acc + combo.precio, 0)

    })
}


function limpiarCarrito(){
    carrito.length = 0;
    precioFinal.innerText = 0;
    renderizarCarrito();
    console.log("Se ha vaciado el carrito")
}

vaciarCarrito.addEventListener("click", () => {
    limpiarCarrito();
})

btnDelivery.addEventListener("click", () => {
    window.scrollTo({ top: 1500, behavior: "smooth" });
})



//ENVIO DE FORMULARIO
envioForm()
function envioForm() {
    document.addEventListener("DOMContentLoaded", fnzDisabled)

    contenedorCarrito.addEventListener("blur", validacionForm)
    precioFinal.addEventListener("blur", validacionForm)
    cliente.addEventListener("blur", validacionForm)
    direccion.addEventListener("blur", validacionForm)

    inputForm.addEventListener("click", enviarForm)
}

function fnzDisabled() {
    finalizar.disabled = true
}

function validacionForm(e) {

    if (e.target.value.length > 0) {
        const invalido = document.querySelector("p.invalido")
        if (invalido) {
            invalido.remove();
        }

        e.target.classList.add("validado")
        e.target.classList.remove("obligatorio")

        if (cliente.value !== "" && direccion.value !== "" && carrito.length !== 0) {
            finalizar.disabled = false;
        } else if (carrito.length === 0) {
            msjObligatorio("El carrito esta vacio. Elige un producto y reingresa tus datos.")
        }

    } else {
        e.target.classList.add("obligatorio")
        e.target.classList.remove("validado")
        msjObligatorio("Completa los campos obligatorios")
    }

}

function msjObligatorio(mensaje) {
    const msjError = document.createElement("p")
    msjError.textContent = mensaje
    msjError.classList.add("msjObligatorio", "invalido")

    const error = document.querySelectorAll(".invalido")
    if (error.length === 0) {
        inputForm.appendChild(msjError)
    }
}

function enviarForm(e) {
    e.preventDefault();

    const finalizar = document.getElementById("finalizar");

    finalizar.addEventListener("click", () => {
        Swal.fire({
            position: "center",
            title: "Tu pedido está en camino",
            text: "¡Gracias por elegirnos!",
            icon: "success",
            iconColor: "#198754",
            confirmButtonText: "Ok",
            confirmButtonColor: "#198754",
            background: "#141414",
            color: "white",
        })
        limpiarForm();
        limpiarCarrito();

    })
}

function limpiarForm() {
    inputForm.reset()
}