function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora <= 12){
        //bom dia
        img.src = "bomDia.jpg"
        document.body.style.background = 'blue'
    } else if(hora >=13 && hora < 18){
        //boa tarde
        img.src = "boaTarde.jpg"
        document.body.style.background = 'orange'
    }else{
        //boa noite
        img.src = "boaNoite.jpg"
        document.body.style.background = 'brown'
    }
}


