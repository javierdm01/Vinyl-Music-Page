let img_card=document.querySelectorAll('.img_box');
let vinilosArtistas=document.getElementById('vinilos')
let contArtistas=1
let contador
//Load Vinyls in Discover
const cargarImagenes=()=>{
    for (let i = 0; i < img_card.length; i++) {
        contador=i+1
        img_card[i].style.backgroundImage=`url(../assets/img/caratula${contador}.png)`
    }
}
//Load Vinyls in Artist
const cargarVinilosArtistas=()=>{
    vinilosArtistas.src=`../assets/img/vinyl_transparent${contArtistas}.png`;
   if(contArtistas==5){
    contArtistas=1
   }
   contArtistas++
}
setInterval(cargarVinilosArtistas,1500)
document.addEventListener('DOMContentLoaded',cargarImagenes)