function cadastrar1() {
    let i = document.getElementById("idade").value ;
    let n = document.getElementById("nome").value ;
    let txt =document.getElementById("texto");
    let bt2 =document.getElementById("botao2");
    if(i>=18) {
     txt.innerHTML = "Seja Bem-Vindo, " + n + "!" ;
     bt2.style = "display:block";
    }
    else {
     txt.innerHTML = "Desculpa, " + n + ", não vendemos para menores de 18 anos"
     bt2.style = "display:none";
    }
}



function cadastrar() {
   let txt = document.getElementById("texto");
   txt.innerHTML="Aguarde uns instantes..."
    
   setTimeout(cadastrar1 , 3000)
}