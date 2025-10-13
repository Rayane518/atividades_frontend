  function verificarPedido(){
        let idPedido = document.getElementById("idPedido");
        let pedido = idPedido.value.toLowerCase();
        let resposta = document.getElementById("mensagem")

   if (pedido == "pão com ovo"){
    resposta.textContent = "café da manhã";
   }
   else if(pedido == "arroz com feijão"){
    resposta.textContent = "almoço";
   }
   else{
    resposta.textContent = "jantar";
   }
  
    
  }      
        
       