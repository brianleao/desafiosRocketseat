let botaoExp = document.querySelector('#icon-menu')
let menuSide = document.querySelector('.coluna-lateral')

botaoExp.addEventListener('click', function(){
  //o classList.toggle serve para se, não existir uma classe eu quero que ela seja criada e se existir, quero que ela seja removida.
  menuSide.classList.toggle('expandir');
})