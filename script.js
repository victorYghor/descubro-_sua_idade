function verificar(){
    var data = new Date()
    var ano_atual = data.getFullYear()
    var ano = Number(document.getElementById("txtano").value)
    var res = document.querySelector("p#textp")//não funciona se eu colocar a div
    
    if(ano == 0 || ano > ano_atual){
        window.alert(` ERRO  ano inválido, digite o ano novamente`)
    }else{
        var sexo = document.getElementsByName('radesex');
        var idade = ano_atual-ano;
        var genêro = ''
        var img = document.createElement("img")
        

        

        if (sexo[0].checked) {
        genêro ='mulher'

        if (idade <= 2) {
            img.setAttribute('src','bebe_fem.jpg')
        } else if(idade > 2 && idade < 13){
            img.setAttribute('src','menina.jpg')
            
        }else if (idade >= 13 && idade < 18 ) {
            img.setAttribute('src','adolescente_feminino.jpg')
        } else if (idade >= 18 && idade < 30){
            img.setAttribute('src','jovem_fem.jpg')
            
        }else if (idade >= 30 && idade <60) {
            img.setAttribute('src','meia-idade_fem.jpg')
            
        } else if (idade >= 60 && idade < 120) {
            img.setAttribute('src','idosa.jpg')
            
        }else{
            img.setAttribute('src','morto.png')
            res.innerHTML = `você está morto se estivesse vivo teria ${idade} anos`

        }
        
        
        }else if(sexo[1].checked) {
        genêro = 'homem'

        if (idade <= 2) {
            img.setAttribute('src','bebe_msc.jpg')
        } else if(idade > 2 && idade < 13){
            img.setAttribute('src','menino.jpg')
            
        }else if (idade >= 13 && idade < 18 ) {
            img.setAttribute('src','adolescente_msc1.png')
        } else if (idade >= 18 && idade < 30){
            img.setAttribute('src', 'jovem_msc.jpg')
            
        }else if (idade >= 30 && idade <60) {
            img.setAttribute('src','meia-idade_msc.jpg')
            
        } else if (idade >= 60 && idade < 120) {
            img.setAttribute('src', 'idoso.jpg')
        }else{
            img.setAttribute('src','morto.png')
            res.innerText = `você está morto e teria ${idade} anos`

        }


        

    }
     if(sexo[2].checked){
            genêro  = 'nâo binário'

            img.setAttribute('src','nãobinário.png')
        }
    if(idade < 120){
        res.innerHTML = `você é um ${genêro} com ${idade} anos`
    }

    res.appendChild(img)
    } 
    
}