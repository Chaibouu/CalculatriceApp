let entrer = document.querySelector('.entrer');
let touche = document.querySelectorAll('.touche');
let reset = document.querySelector('.reset');
let del = document.querySelector('.delete');
for (let i = 0; i < touche.length; i++) {
    touche[i].addEventListener('click', ()=>{
        entrer.textContent += touche[i].innerHTML;
    });
    
}


reset.addEventListener('click', ()=>{
    entrer.innerHTML = '';
})
del.addEventListener('click', ()=>{

})

console.log(entrer);