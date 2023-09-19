// variables

const boton_click1 = document.querySelector("#click1")
const boton_click2 = document.querySelector("#click2")
const boton_click3 = document.querySelector("#click3")
const texto_protegido = document.querySelector("#nocopiar")
const subtitulo3 = document.querySelector("#subtitulo3")
const teclas_apretadas = document.querySelector("#teclas-apretadas")
const celdas = document.querySelectorAll("td")
const imagen = document.querySelector("#imagen-paint")
const ultimo_mov = document.querySelector("#last_move")

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

window.addEventListener("keydown", (e) => {
    li = document.createElement("li")
    li.innerHTML = "se apreto la tecla: " + e.key
    teclas_apretadas.appendChild(li)
    li.innerHTML = "<span>• </span>" + li.innerText
    puntito = li.querySelector("span")
    puntito.style.color = colorRandom()
    puntito.style.fontSize = "25px"
})

for (c of celdas){
    c.addEventListener("click", function(){
        this.style.backgroundColor = colorRandom()
    })
}

imagen.addEventListener("click", (e) => {
    if (e.offsetX>imagen.width/2){
        imagen.setAttribute("src", "img/esconderse.png")
    }
    else{
        imagen.setAttribute("src", "img/doctor.jpg")
    }
})

window.addEventListener("mousemove", (e)=>{
    console.log(e.clientX, e.clientY)
    ultimo_mov.querySelector("p").innerText = `${e.clientX}X ${e.clientY}Y \n ${parseInt(e.timeStamp/1000)}S`
})