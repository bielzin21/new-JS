function clicar(){
    alert("Vc me clicou!")
}

document.body.style.background = "#3972a3"

let dadoNumero = '5';
let classe = '';
let resultado = '';

        if(dadoNumero < 4){
            classe = 'Guerreiro(a)'
            resultado = 'Sua classe é: Guerreiro(a)'
        } else if(dadoNumero >= 4 && dadoNumero < 8){
            classe = 'Ladino(a)'
            resultado = 'Sua classe é: Ladino(a)'
        } else if (dadoNumero >= 8 && dadoNumero < 12){
            classe = 'Curandeiro(a)'
            resultado = 'Sua classe é: Curandeiro(a)'
        } else if (dadoNumero >= 12 && dadoNumero < 16){
            classe = 'Arqueiro(a)'
            resultado = 'Sua classe é: Arqueiro(a)'
        } else if (dadoNumero >= 16){
            classe = 'Feiticeiro(a)'    
            resultado = 'Sua classe é: Feiticeiro(a)'
        }


console.log(resultado);