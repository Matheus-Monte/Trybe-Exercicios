let pecaxadrez = 'rainha';

switch(pecaxadrez) {
  case 'bispo': console.log('move-se na diagonal');
   break;

  case 'rainha': console.log('move-se em todas as direções');
   break;

  case 'cavalo': console.log('move-se em forma de "L"');
   break; 

  case 'peão': console.log('move-se para frente, somente uma casa por vez');
   break;
  
  case 'torre': console.log('move-se na horiontal e vertical');
   break;
   
  case 'rei': console.log('move-se em todas as direções, uma casa por vez');
   break;

  default: console.log('ERROR 404') 
}
