document.addEventlistener('DOMContetLoaded', function()){
    const aumentaFonteBtao= document.getElementById('aumentar-fonte');

   let tamanhoAtualfonte= 1;

   aumentaFonteBtao.addEventlistener('click', function ) {
   tamanhoAtualfonte += 0.1;
   document.body.style.fontSize = '${tamanhoAtualfonte}rem'

   })

}) 