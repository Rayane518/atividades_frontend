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
    function botaoTeste(){
      let pTexto = document.getElementById("paragrafo")
      for(let i = 0; i < 5; i++){
        pTexto.innerHTML = pTexto.innerHTML + "<br>" + " " + i;

      }
      let novoParagrafo = document.getElementById("paragrafo2")
      let lista = ["arroz", "salada", "picanha"]
      for (let index = 0; index < lista.length; index++){
        const element = lista[index];
        novoParagrafo.innerHTML = novoParagrafo.innerHTML + "<br>" + element;
      }
  }
        
       