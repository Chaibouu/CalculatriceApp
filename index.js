let entrer = document.querySelector('.entrer');
let touche = document.querySelectorAll('.numero');
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
    let ent = entrer.innerHTML.split("");
    if (ent.length > 0) {
        ent.pop();
        entrer.innerHTML = ent.join("");
        console.log(entrer.innerHTML);
    }
});