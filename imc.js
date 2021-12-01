const calcular = document.getElementById('calcular')

function imc (){
    let nome = document.getElementById('nome').value
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let res = document.getElementById('resultado')

    if(nome == '' && altura == '' && peso == ''){

        res.textContent = 'preencha todos os campos'
     
    }else{
        
        const valorIMC = (peso / (altura**2)).toFixed(2)
        
        let classificacao = ''

        if(valorIMC < 18){
            // res.textContent = `Seu IMC é: ${valorIMC}, voce está abaixo o peso`
            classificacao = `voce está abaixo o peso`
        }
        if(valorIMC >= 18 && valorIMC < 25){
            // res.textContent = `voce está com peso normal`
            classificacao = `voce está com peso normal`
        }
        if(valorIMC >= 25 && valorIMC < 30){
            // res.textContent = `Seu IMC é: ${valorIMC}, voce está com sobrepeso`
            classificacao = `voce está com sobrepeso`

        }
        if(valorIMC >= 30 && valorIMC < 35){
            // res.textContent = `Seu IMC é: ${valorIMC}, obesidade grau I`
            classificacao =  `obesidade grau I`
        }
        if(valorIMC >= 35 && valorIMC < 40){
            // res.textContent = `Seu IMC é: ${valorIMC}, obesidade grau II`
            classificacao = `obesidade grau II`
        }
        if(valorIMC >= 40){
            // res.textContent = `Seu IMC é: ${valorIMC}, obesidade grau III`
            classificacao = `obesidade grau III`
       }
       if(valorIMC >= 50){
        // res.textContent = `Seu IMC é: ${valorIMC}, obesidade grau III`
        classificacao = `MOREU`
   }

       res.textContent = `${nome}, valor do seu IMC é ${valorIMC}, ${classificacao} `
    }

}


calcular.addEventListener('click', imc)