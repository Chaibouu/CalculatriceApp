let entrer = document.querySelector('.entrer');
let touche = document.querySelectorAll('.numero');
let reset = document.querySelector('.reset');
let del = document.querySelector('.delete');
let egal = document.querySelector('.egal');
let addition = document.querySelector('.addition');
let soustraction = document.querySelector('.soustraction');
let multiplication = document.querySelector('.multiplication');
let division = document.querySelector('.division');
let a =0;
let b =0;
let operateur;

// Récupérer les entrer le l'écran
for (let i = 0; i < touche.length; i++) {
    touche[i].addEventListener('click', ()=>{
        entrer.textContent += touche[i].innerHTML;
    });
}
// la touche reset pour effacer la totalité du contenue de l'écran 
reset.addEventListener('click', ()=>{
    entrer.innerHTML = '';
})

// la touche delete pour effacer progressivement les element de l'écran
del.addEventListener('click', ()=>{
    let ent = entrer.innerHTML.split("");
    if (ent.length > 0) {
        ent.pop();
        entrer.innerHTML = ent.join("");
    }
});

// la fonction pour addition 
addition.addEventListener('click', ()=>{
    // a = entrer.textContent;
    // entrer.innerHTML = a;
    // operateur = "+";
    if (entrer.textContent!=="") {
        a += parseFloat(entrer.textContent);
        entrer.textContent="";
    }
    else{
        a = parseFloat(entrer.textContent);
    }
    console.log(a);
});

// la fonction pour soustraction 
soustraction.addEventListener('click', ()=>{
    a = entrer.textContent;
    entrer.innerHTML = '';
    operateur = "-";
});
// la fonction pour multiplication 
multiplication.addEventListener('click', ()=>{
    a = entrer.textContent;
    entrer.innerHTML = '';
    operateur = "*";
});
// la fonction pour division 
division.addEventListener('click', ()=>{
    a = entrer.textContent;
    entrer.innerHTML = '';
    operateur = "/";
});
// la fonction pour egal 
egal.addEventListener('click', ()=>{
    b = entrer.textContent;
    console.log(b);
    if(operateur=="+"){
        entrer.innerText = a + parseFloat(b);
    }
    else if(operateur=="-"){
        entrer.innerText = parseFloat(a) - parseFloat(b);
    }
    else if(operateur=="*"){
        entrer.innerText = parseFloat(a) * parseFloat(b);
    }
    else{
        if(b>0){
            entrer.innerText = parseFloat(a) / parseFloat(b);
        }
        else{
            entrer.innerText = "ERROR"
        }
    }
});
