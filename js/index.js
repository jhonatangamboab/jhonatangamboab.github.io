const seleccionarAtaque = document.getElementById('seleccionar-ataque')
const reiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-Reiniciar')

const seleccionarMascota = document.getElementById('seleccionar-mascota')

const spanMascotaJugador = document.getElementById('mascota-jugador')
const imagenJugador = document.getElementById('imagen-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const imagenEnemigo = document.getElementById('imagen-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasOponente = document.getElementById('vidas-oponente')

const seccionMensajes = document.getElementById('resultado')
const seccionMensajeFinal = document.getElementById('resultadoFinal')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorSubAtaques = document.getElementById('subtitulo-ataques')
const contenedorAtaques = document.getElementById('contenedorAtaques')
const pVs = document.getElementById('vs')
const pResultado = document.getElementById('resultado')
const pResultadoFinal = document.getElementById('resultadoFinal')
const sectionVerMapa = document.getElementById('ver-mapa')
const canvasMapa = document.getElementById('mapa')

let criaturas=[]
let ataqueJugador=[]
let ataqueOponente=[]
let opcionDeCriaturas
let inputCerberus
let inputKraken
let inputGolem 
let inputQuimera
let inputHydra
let inputGorgona
let botonFuego
let botonAgua
let botonTierra
let botones =[]
let indexAtaqueJugador
let indexAtaqueOponente
let victoriasJugador = 0
let victoriasEnemigo = 0 
let ataquesCriatura
let ataquesCriaturaEnemigo
let criaturaJugador
let criaturaJugadorObjeto
let vidasJugador = 3
let vidasOponente = 3
let lienzo = mapa.getContext("2d")
let intervalo 
let mapaBackground = new Image()
mapaBackground.src = './assets/mokemap.png'
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20 
const anchoMaximoDelMapa = 350

if (anchoDelMapa>anchoMaximoDelMapa){
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800 

mapa.width = anchoDelMapa
mapa.height= alturaQueBuscamos

class Criatura{
    constructor(nombre, foto, vida, fotoMapa){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida 
        this.ataques = []
        this.ancho = 50
        this.alto = 50
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0,mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarCriatura(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto,
        )
    }
}

let cerberus = new Criatura('Cerberus', './assets/cerberus.png', 5, './assets/cerberusAtaque.png')

let kraken = new Criatura('Kraken', './assets/kraken.png', 5, './assets/krakenAtaque.png')

let golem = new Criatura('Golem', './assets/golem.png', 5, './assets/golemAtaque.png')

let quimera = new Criatura('Quimera', './assets/quimera.png', 5, './assets/quimeraAtaque.png')

let hydra = new Criatura('Hydra', './assets/hydra.png', 5, './assets/hydraAtaque.png')

let gorgona = new Criatura('Gorgona', './assets/gorgona.png', 5, './assets/gorgonaAtaque.png')


let cerberusEnemigo = new Criatura('Cerberus', './assets/cerberus.png', 5, './assets/cerberusAtaque.png')

let krakenEnemigo = new Criatura('Kraken', './assets/kraken.png', 5, './assets/krakenAtaque.png')

let golemEnemigo = new Criatura('Golem', './assets/golem.png', 5, './assets/golemAtaque.png')

let quimeraEnemigo = new Criatura('Quimera', './assets/quimera.png', 5, './assets/quimeraAtaque.png')

let hydraEnemigo = new Criatura('Hydra', './assets/hydra.png', 5, './assets/hydraAtaque.png')

let gorgonaEnemigo = new Criatura('Gorgona', './assets/gorgona.png', 5, './assets/gorgonaAtaque.png')

cerberus.ataques.push(
    {nombre: '🔥', id: 'boton-Fuego'},    
    {nombre: '🌊', id: 'boton-Agua'},
    {nombre: '🔥', id: 'boton-Fuego'},    
    {nombre: '🥌', id: 'boton-Tierra'},
    {nombre: '🔥', id: 'boton-Fuego'},
)

kraken.ataques.push(
    {nombre: '🌊', id: 'boton-Agua'},    
    {nombre: '🔥', id: 'boton-Fuego'},
    {nombre: '🌊', id: 'boton-Agua'},    
    {nombre: '🥌', id: 'boton-Tierra'},
    {nombre: '🌊', id: 'boton-Agua'},
)

golem.ataques.push(
    {nombre: '🥌', id: 'boton-Tierra'},    
    {nombre: '🔥', id: 'boton-Fuego'},
    {nombre: '🥌', id: 'boton-Tierra'},    
    {nombre: '🌊', id: 'boton-Agua'},
    {nombre: '🥌', id: 'boton-Tierra'},
)

quimera.ataques.push(
    {nombre: '🔥', id: 'boton-Fuego'},    
    {nombre: '🌊', id: 'boton-Agua'},
    {nombre: '🔥', id: 'boton-Fuego'},    
    {nombre: '🥌', id: 'boton-Tierra'},
    {nombre: '🔥', id: 'boton-Fuego'},
)

hydra.ataques.push(
    {nombre: '🌊', id: 'boton-Agua'},    
    {nombre: '🔥', id: 'boton-Fuego'},
    {nombre: '🌊', id: 'boton-Agua'},    
    {nombre: '🥌', id: 'boton-Tierra'},
    {nombre: '🌊', id: 'boton-Agua'},
)

gorgona.ataques.push(
    {nombre: '🥌', id: 'boton-Tierra'},    
    {nombre: '🔥', id: 'boton-Fuego'},
    {nombre: '🥌', id: 'boton-Tierra'},    
    {nombre: '🌊', id: 'boton-Agua'},
    {nombre: '🥌', id: 'boton-Tierra'},
)



cerberusEnemigo.ataques.push(
    {nombre: '🔥', id: 'boton-Fuego'},    
    {nombre: '🌊', id: 'boton-Agua'},
    {nombre: '🔥', id: 'boton-Fuego'},    
    {nombre: '🥌', id: 'boton-Tierra'},
    {nombre: '🔥', id: 'boton-Fuego'},
)

krakenEnemigo.ataques.push(
    {nombre: '🌊', id: 'boton-Agua'},    
    {nombre: '🔥', id: 'boton-Fuego'},
    {nombre: '🌊', id: 'boton-Agua'},    
    {nombre: '🥌', id: 'boton-Tierra'},
    {nombre: '🌊', id: 'boton-Agua'},
)

golemEnemigo.ataques.push(
    {nombre: '🥌', id: 'boton-Tierra'},    
    {nombre: '🔥', id: 'boton-Fuego'},
    {nombre: '🥌', id: 'boton-Tierra'},    
    {nombre: '🌊', id: 'boton-Agua'},
    {nombre: '🥌', id: 'boton-Tierra'},
)

quimeraEnemigo.ataques.push(
    {nombre: '🔥', id: 'boton-Fuego'},    
    {nombre: '🌊', id: 'boton-Agua'},
    {nombre: '🔥', id: 'boton-Fuego'},    
    {nombre: '🥌', id: 'boton-Tierra'},
    {nombre: '🔥', id: 'boton-Fuego'},
)

hydraEnemigo.ataques.push(
    {nombre: '🌊', id: 'boton-Agua'},    
    {nombre: '🔥', id: 'boton-Fuego'},
    {nombre: '🌊', id: 'boton-Agua'},    
    {nombre: '🥌', id: 'boton-Tierra'},
    {nombre: '🌊', id: 'boton-Agua'},
)

gorgonaEnemigo.ataques.push(
    {nombre: '🥌', id: 'boton-Tierra'},    
    {nombre: '🔥', id: 'boton-Fuego'},
    {nombre: '🥌', id: 'boton-Tierra'},    
    {nombre: '🌊', id: 'boton-Agua'},
    {nombre: '🥌', id: 'boton-Tierra'},
)

criaturas.push(cerberus, kraken, golem, quimera, hydra, gorgona)

function iniciarjuego() {
    seleccionarAtaque.style.display = 'none'    
    sectionVerMapa.style.display = 'none'

    criaturas.forEach((criatura) => {
        opcionDeCriaturas = `
        <input type="radio" name="mascota" id=${criatura.nombre} />
                <label class="tarjeta-de-criatura" for=${criatura.nombre}>
                    <p>${criatura.nombre}</p>
                    <img src=${criatura.foto} alt=${criatura.nombre}>
                    <div class="div-poderes">
                        ${criatura.ataques[0].nombre}
                        ${criatura.ataques[1].nombre}
                        ${criatura.ataques[2].nombre}
                        ${criatura.ataques[3].nombre}
                        ${criatura.ataques[4].nombre}
                    </div>
                </label>        
        `
        contenedorTarjetas.innerHTML += opcionDeCriaturas

        inputCerberus = document.getElementById('Cerberus')
        inputKraken = document.getElementById('Kraken')
        inputGolem = document.getElementById('Golem')
        inputQuimera = document.getElementById('Quimera')
        inputHydra = document.getElementById('Hydra')
        inputGorgona = document.getElementById('Gorgona')

        //console.log(criatura.ataques[0].nombre)
        
    })

    reiniciar.style.display = 'none' 
    pResultadoFinal.style.display= 'none'   
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)    
       
    botonReiniciar.addEventListener('click', reiniciarJuego)
}


function seleccionarMascotaJugador() {     
    
    if(inputCerberus.checked){
        spanMascotaJugador.innerHTML = inputCerberus.id
        criaturaJugador = inputCerberus.id

        imagenJugador.innerHTML=`<img class="imagenSeleccionada" src=${cerberus.foto} alt=${cerberus.nombre}></img>`
                      
    } else if(inputKraken.checked){
        spanMascotaJugador.innerHTML = inputKraken.id
        criaturaJugador = inputKraken.id

        imagenJugador.innerHTML=`<img class="imagenSeleccionada" src=${kraken.foto} alt=${kraken.nombre}></img>`
        
    } else if(inputGolem.checked){
        spanMascotaJugador.innerHTML = inputGolem.id
        criaturaJugador = inputGolem.id

        imagenJugador.innerHTML=`<img class="imagenSeleccionada" src=${golem.foto} alt=${golem.nombre}></img>`
        
    }else if(inputQuimera.checked){
        spanMascotaJugador.innerHTML = inputQuimera.id
        criaturaJugador = inputQuimera.id

        imagenJugador.innerHTML=`<img class="imagenSeleccionada" src=${quimera.foto} alt=${quimera.nombre}></img>`
        
    }else if(inputHydra.checked){
        spanMascotaJugador.innerHTML = inputHydra.id
        criaturaJugador = inputHydra.id

        imagenJugador.innerHTML=`<img class="imagenSeleccionada" src=${hydra.foto} alt=${hydra.nombre}></img>`
        
    }else if(inputGorgona.checked){
        spanMascotaJugador.innerHTML = inputGorgona.id
        criaturaJugador = inputGorgona.id

        imagenJugador.innerHTML=`<img class="imagenSeleccionada" src=${gorgona.foto} alt=${gorgona.nombre}></img>`
        
    }
    else{
        /* location.reload() */
        alert('¡Selecciona una criatura!')
        return
        }
    extraerAtaques(criaturaJugador)
    sectionVerMapa.style.display = 'flex'
    iniciarMapa() 
    
    pResultado.style.display = 'none'
    
}

function extraerAtaques(criaturaJugador){
    let ataques 
    for (let i = 0; i < criaturas.length; i++) {
        if(criaturaJugador === criaturas[i].nombre){
            ataques = criaturas[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) =>{
        ataquesCriatura = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}
        </button>
        `
        contenedorAtaques.innerHTML += ataquesCriatura
       
    })
    botonFuego = document.getElementById('boton-Fuego')
    botonAgua = document.getElementById('boton-Agua')
    botonTierra = document.getElementById('boton-Tierra')

    botones = document.querySelectorAll('.BAtaque')

}

//para buscar el text content en target con el metodo e, y si ese contenido es igual al emoji, ejecuta el codigo
function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click',(e)=>{
                        
            if(e.target.textContent ==='🔥\n        '){
                ataqueJugador.push('🔥')
                console.log(ataqueJugador)
                boton.style.background = '#112F58'
                boton.disabled = true
                                
            } else if(e.target.textContent==='🌊\n        '){
                ataqueJugador.push('🌊')
                console.log(ataqueJugador)
                boton.style.background = '#112F58'
                boton.disabled = true
                
            } else if((e.target.textContent==='🥌\n        ')){
                ataqueJugador.push('🥌')
                console.log(ataqueJugador)
                boton.style.background = '#112F58'
                boton.disabled = true
                
            }
            ataqueAleatorioEnemigo()         
        })        
    })   
}

/* function mascotaEnemigo(){
      
    seleccionarMascota.style.display = 'none' 
    
    
    intervalo = setInterval(pintarPersonaje, 50)

    window.addEventListener('keydown', sePresionoUnaTecla)

    window.addEventListener('keyup', detenerMovimiento)
    let imagenDeCerberus = new Image()
    imagenDeCerberus.src = cerberus.foto
    lienzo.drawImage(
        imagenDeCerberus,
        20,
        40,
        100,
        100,
    
    
    let criaturaAleatorio = aleatorio(0, criaturas.length -1)   
    spanMascotaEnemigo.innerHTML = criaturas[criaturaAleatorio].nombre   

    
                
     ataquesCriaturaEnemigo = criaturas[criaturaAleatorio].ataques 
    

    console.log(ataquesCriaturaEnemigo)

    criaturas.forEach((criatura)=>{
        if(criaturas[criaturaAleatorio].nombre==criatura.nombre){
            imagenEnemigo.innerHTML=`<img class="imagenSeleccionada" src=${criatura.foto} alt=${criatura.nombre}></img>`
        }
    })

    secuenciaAtaque()
    
} */


//SELECION DE ENEMIGO EN MAPA
function mascotaEnemigo(enemigo){
      
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesCriaturaEnemigo = enemigo.ataques
    console.log(ataquesCriaturaEnemigo)
    
    imagenEnemigo.innerHTML=`<img class="imagenSeleccionada" src=${enemigo.foto} alt=${enemigo.nombre}></img>`
       
    secuenciaAtaque()
    
}

function ataqueAleatorioEnemigo() {

    console.log(ataquesCriaturaEnemigo, 'ataques enemigo');

    let ataqueAleatorio = aleatorio(0,ataquesCriaturaEnemigo.length-1)
           
    if (ataquesCriaturaEnemigo[ataqueAleatorio].nombre==='🔥') {
        ataqueOponente.push('🔥')    
    } else if (ataquesCriaturaEnemigo[ataqueAleatorio].nombre==='🌊') {
        ataqueOponente.push('🌊')
    } else if (ataquesCriaturaEnemigo[ataqueAleatorio].nombre==='🥌') {
        ataqueOponente.push('🥌')
        }
    //console.log(ataqueOponente)
     
    iniciarPelea()

    
}

function iniciarPelea(){
    if(ataqueJugador.length===5){
        combate()
    }
}

function indexAmbosOponentes(jugador, oponente){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueOponente = ataqueOponente[oponente]

}

function combate() {  
    pVs.style.display = 'none'
    pResultado.style.display = 'flex'

    for (let index = 0; index < ataqueJugador.length; index++) {
        //console.log(ataqueJugador[index])
        //console.log(ataqueOponente[index])

        if(ataqueJugador[index] === ataqueOponente[index]){
            indexAmbosOponentes(index, index)
            crearMensaje('Empataste');            
            
        } else if((
            ataqueJugador[index] === '🔥' && ataqueOponente[index] === '🥌') || 
            (ataqueJugador[index] === '🌊' && ataqueOponente[index] === '🔥') || 
            (ataqueJugador[index] === '🥌' && ataqueOponente[index] === '🌊')){
            indexAmbosOponentes(index, index)
            crearMensaje("¡Ganaste!")

            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
            
        }else {
            indexAmbosOponentes(index, index)
            crearMensaje("¡Perdiste!")
            
            victoriasEnemigo++
            spanVidasOponente.innerHTML = victoriasEnemigo
        }
        
    }
    
    revisarVidas()
}

function revisarVidas(){
    if(victoriasJugador=== victoriasEnemigo){
        crearMensajeFinal("¡EMPATE! JUEGA OTRA VEZ")
    }else if(victoriasJugador>victoriasEnemigo){
        crearMensajeFinal("¡FELICIDADES! GANASTE EL ENCUENTRO")
    }else{
        crearMensajeFinal("¡PERDISTE! INTENTALO DE NUEVO")
    }

}

function crearMensaje(resultado) {
    
    let nuevoResultado = document.createElement('p')

    nuevoResultado.innerHTML = indexAtaqueOponente  +" " + resultado + " "+ " " +  indexAtaqueJugador

    seccionMensajes.appendChild(nuevoResultado)
    seccionMensajes.appendChild(nuevoResultado)
    
}

function crearMensajeFinal(resultadoFinal) {
       
    seccionMensajeFinal.innerHTML = resultadoFinal 
    botonFuego.disabled = true     
    botonAgua.disabled = true    
    botonTierra.disabled = true
    
    reiniciar.style.display = 'block'
    pResultadoFinal.style.display = 'flex' 
    contenedorSubAtaques.style.display= 'none'
}

function reiniciarJuego(){
  location.reload()
  /*iniciarMapa()
  pResultadoFinal.style.display = 'none'
  reiniciar.style.display = 'none'
  seleccionarAtaque.style.display = 'none' 
  sectionVerMapa.style.display = 'flex'*/
  
}

function  aleatorio(min, max){
    return Math.floor(Math.random()* (max - min + 1) + min)
}

function pintarCanvas() {
    criaturaJugadorObjeto.x = criaturaJugadorObjeto.x + criaturaJugadorObjeto.velocidadX
    criaturaJugadorObjeto.y = criaturaJugadorObjeto.y + criaturaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height,
    )
    criaturaJugadorObjeto.pintarCriatura()
    cerberusEnemigo.pintarCriatura()
    krakenEnemigo.pintarCriatura()
    golemEnemigo.pintarCriatura()
    quimeraEnemigo.pintarCriatura()
    hydraEnemigo.pintarCriatura()
    gorgonaEnemigo.pintarCriatura()

    if (criaturaJugadorObjeto.velocidadX !==0 || criaturaJugadorObjeto.velocidadY!==0){
        revisarColision(cerberusEnemigo)
        revisarColision(krakenEnemigo)
        revisarColision(golemEnemigo)
        revisarColision(quimeraEnemigo)
        revisarColision(hydraEnemigo)
        revisarColision(gorgonaEnemigo)
    }
    /*lienzo.drawImage(
        criaturaJugadorObjeto.mapaFoto,
        criaturaJugadorObjeto.x,
        criaturaJugadorObjeto.y,
        criaturaJugadorObjeto.ancho,
        criaturaJugadorObjeto.alto,
    )*/
}

function moverDerCerberus(){
    criaturaJugadorObjeto.velocidadX = 5
    
    //cerberus.x  = cerberus.x + 5
    //pintarPersonaje()
}

function moverIzqCerberus(){
    criaturaJugadorObjeto.velocidadX = -5
    
}

function moverArribaCerberus(){
    criaturaJugadorObjeto.velocidadY = -5
    
}

function moverAbajoCerberus(){
    criaturaJugadorObjeto.velocidadY = 5
    
}

function detenerMovimiento(){
    
    criaturaJugadorObjeto.velocidadY = 0
    criaturaJugadorObjeto.velocidadX = 0
}

function sePresionoUnaTecla(event){
 switch (event.key) {
    case 'ArrowUp':
        moverArribaCerberus()
        break;
    case 'ArrowDown':
        moverAbajoCerberus()
        break;    
    case 'ArrowLeft':
        moverIzqCerberus()
        break;
    case 'ArrowRight':
        moverDerCerberus()
        break;
    default:
        break;
 }
}

function iniciarMapa(){
    seleccionarMascota.style.display = 'none'
    /* mapa.width = 320
    mapa.height= 240 */
    criaturaJugadorObjeto = obtenerObjetoCriatura(criaturaJugador)
    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener('keydown', sePresionoUnaTecla)

    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoCriatura(){
    for (let i = 0; i < criaturas.length; i++) {
        if(criaturaJugador === criaturas[i].nombre){
            return criaturas[i]
        }
    }
}


function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x 

    const arribaCriatura = 
        criaturaJugadorObjeto.y
    const abajoCriatura = 
        criaturaJugadorObjeto.y + criaturaJugadorObjeto.alto
    const derechaCriatura = 
        criaturaJugadorObjeto.x + criaturaJugadorObjeto.ancho
    const izquierdaCriatura = 
        criaturaJugadorObjeto.x 

    if(
        abajoCriatura < arribaEnemigo ||
        arribaCriatura > abajoEnemigo ||
        derechaCriatura < izquierdaEnemigo ||
        izquierdaCriatura > derechaEnemigo
    ){
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)
    console.log('se detectó colision')
    seleccionarAtaque.style.display = 'flex' 
    sectionVerMapa.style.display = 'none'
    mascotaEnemigo(enemigo) 
    
    /* alert("Hay colisión con " + enemigo.nombre ) */
}
window.addEventListener('load', iniciarjuego)