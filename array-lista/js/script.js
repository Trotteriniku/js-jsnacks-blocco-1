const fridge =['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola' ];
const table =['pesca'];
fridge.push( 'pesca');


// mi serve un bottone per aprire il frigo e controllare se all'interno ci sta il cocomero
const openFridge =document.querySelector('button');


openFridge.addEventListener('click',function () {
    for (let i = 0; i < fridge.length; i++) {
        const element =  fridge[i];
        console.log(element);

        if (element === 'cocomero') {
             console.log('ci sta menomale');
        } else{
             console.log('noo che peccato');
        }
    }
})
