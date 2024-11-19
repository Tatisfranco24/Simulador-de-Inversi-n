const pre = document.getElementById ("pre")
const post = document.getElementById ("post")
const showTiempo = document.getElementById ("tiempo-show")
const showInteres = document.getElementById ("interes-show")
const nombres = document.getElementById ("nombres-show")
const email = document.getElementById ("email-show")
const ganancia= document.getElementById ("ganancia-show")
const total = document.getElementById ("total-show")
let ganancia2 = 0;
let total2 = 0;

function simulador(){
    const campoNombre = document.getElementById("nombres").value
    const campoTelefono = document.getElementById("telefono").value
    const campoEmail = document.getElementById("email").value
    const campoInversion = document.getElementById("inversion").value
    const campoTiempo = document.getElementById("tiempo").value
    post.classList.remove ("disabled")
    pre.classList.add ("disabled")


    nombres.innerText= (campoNombre+"")
    email.innerText= (campoEmail+"")
    switch (campoTiempo) {
        case "1":
            showTiempo.innerText ="12 meses"
            showInteres.innerText = "0.08%"
            ganancia2 = (campoInversion * 0.008) * 12
            total2 = campoInversion + ganancia2
            ganancia.innerText = ganancia2
            total.innerText = total2
            

            break;
        case "2":
            showTiempo.innerText ="24 meses"
            showInteres.innerText = "1.3%"
            ganancia2 = (campoInversion * 0.013 ) * 24
            total2 = campoInversion + ganancia2
            ganancia.innerText = ganancia2
            total.innerText = total2
            break;   
        default:
            showTiempo.innerText ="36 meses"
            showInteres.innerText = "1.7%"
            ganancia2 = (campoInversion * 0.017 ) * 36
            total2 = campoInversion + ganancia2
            ganancia.innerText = ganancia2
            total.innerText = total2
            break;
    }
}

const boton = document.getElementById('simulador-btn')

boton.addEventListener("click", simulador)