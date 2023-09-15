// variables

const boton_click1 = document.querySelector("#click1")
const boton_click2 = document.querySelector("#click2")
const boton_click3 = document.querySelector("#click3")
const texto_protegido = document.querySelector("#nocopiar")
const subtitulo3 = document.querySelector("#subtitulo3")
const teclas_apretadas = document.querySelector("#teclas-apretadas")
const celdas = document.querySelectorAll("td")


// funciones
function clickeado(){
    alert("hiciste click")
}

function colorRandom() {
    r = parseInt(Math.random() * 255);
    g = parseInt(Math.random() * 255);
    b = parseInt(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
  }

// eventos

boton_click1.addEventListener("click", () => {
    alert("hiciste click")
})

boton_click2.addEventListener("click", clickeado)

boton_click3.addEventListener("click", function(){
    alert("hiciste click")
})

texto_protegido.addEventListener("copy", ()=>{
    alert("eee no me copies chanta")
})

subtitulo3.addEventListener("mouseover", () => {
    subtitulo3.style.color = "red"
    subtitulo3.innerHTML = "Hola enemigos de internet"
    document.body.classList.add("gradienteAzul")
})

subtitulo3.addEventListener("mouseleave", () => {
    subtitulo3.style.color = "black"
    subtitulo3.innerHTML = "Hola amigos de internet"
    document.body.classList.remove("gradienteAzul")
})

window.addEventListener("load", () => {
    document.querySelector("#loaded").classList.remove("d-none")
})

window.addEventListener("keydown",()=>{
    p = document.createElement("li")
    p.innerHTML = "se apreto la tecla"
    teclas_apretadas.appendChild(p)
})

for (c of celdas){
    c.addEventListener("click", function(){
        this.style.backgroundColor = colorRandom()
    })
}