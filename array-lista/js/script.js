const fridge =['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola' ];
const table =['pesca'];
fridge.push( 'pesca');


// mi serve un bottone per aprire il frigo e controllare se all'interno ci sta il cocomero
const openFridge =document.querySelector('button');



openFridge.addEventListener('click',function () {
const alert=document.querySelector('.alert');
alert.classList.remove('d-none')
let msg;
let flag= false;

    for (let i = 0; i < fridge.length; i++) {
        const element =  fridge[i];
        if (element === 'cocomero') {
            flag= true;
            
        }
     
    }


            if (flag === true) {
                msg='Trovato! Devo solo preparare il cocktail.';
                alert.classList.add('alert-success');
                alert.innerText = msg; 
            } else{
                msg = 'Oh no, devo uscire a comprare il cocomero!';
                alert.classList.remove('alert-success');
                alert.classList.add('alert-warning');
                alert.innerText = msg;  
            }

                
})
