window.addEventListener('deviceorientation', brasilvaronil, true);

function brasilvaronil(event){

    if(event.gamma > 0){
        window.alert('gire para a esquerda!')
    } else {
      window.alert('gire para a direita')
    }

}
