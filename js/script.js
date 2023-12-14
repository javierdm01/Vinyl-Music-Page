let img_card=document.querySelectorAll('.img_box');
let contador
const cargarImagenes=()=>{
    for (let i = 0; i < img_card.length; i++) {
        contador=i+1
        img_card[i].style.backgroundImage=`url(../assets/img/caratula${contador}.png)`
    }
}

document.addEventListener('DOMContentLoaded',cargarImagenes)