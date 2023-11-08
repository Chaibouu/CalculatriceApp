let body = document.body;
let entrer = document.querySelector('.entrer');
let touche = document.querySelectorAll('.numero');
let reset = document.querySelector('.reset');
let del = document.querySelector('.delete');
let egal = document.querySelector('.egal');
let addition = document.querySelector('.addition');
let soustraction = document.querySelector('.soustraction');
let multiplication = document.querySelector('.multiplication');
let division = document.querySelector('.division');
let themeun = document.querySelectorAll('.btn11');
let themedeux = document.querySelectorAll('.btn22');
let themetrois = document.querySelectorAll('.btn33');
let tchcolor = document.querySelectorAll('.tchcolor');
let tete = document.querySelector('.tete');
let conteneur = document.querySelector('.conteneur');
let bascule = document.querySelector('.bascule');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let ope = document.querySelectorAll('.ope');
let point = document.querySelector('.point');

let a ='';
let b ='';
let operateur='';
let aa=0;

btn1.style.visibility = "visible";


// Récupérer les entrer le l'écran
touche.forEach((touch)=>{
    touch.addEventListener('click',()=>{
        if (!operateur) {
            a += touch.textContent
            entrer.textContent = a;
            console.log(a);
        }
        else{
            b += touch.textContent
            entrer.textContent = b;
            console.log(b);
        }
    })
})
ope.forEach((ope)=>{
    ope.addEventListener('click',()=>{
        if (operateur && b) {
            switch(operateur){
                case '+':
                   aa = aa?  aa + Number(b): Number(a) + Number(b)
                   entrer.textContent = aa;
                   b = '';
                   a = ''
                break;
                case '-':
                   aa = aa?  aa - Number(b): Number(a) - Number(b)
                   entrer.textContent = aa;
                   b = '';
                   a = ''
                break;
                case '×':
                   aa = aa?  aa * Number(b): Number(a) * Number(b)
                   entrer.textContent = aa;
                   b = '';
                   a = ''
                break;
                case '/':
                   aa = aa?  aa / Number(b): Number(a) / Number(b)
                   entrer.textContent = aa;
                   b = '';
                   a = ''
                break;
                case '=':
                    entrer.textContent = aa;
                break;
            }
        }
        else{
            operateur = ope.textContent
            console.log(operateur);
        }
    })
})
point.addEventListener('click', function(){
    if (!a) {
        a = '0.'
        entrer.textContent = a;
        console.log(a);
    }
    else if (a && !a.includes('.')){
        a += '.'
        entrer.textContent = a;
        console.log(a);
    }
    // if (!b) {
    //     b = '0.'
    //     entrer.textContent = b;
    //     console.log(b);
    // }
    // else if (b && !b.includes('.')){
    //     b += '.'
    //     entrer.textContent = b;
    //     console.log(b);
    // }
})
// // Récupérer les entrer le l'écran
// for (let i = 0; i < touche.length; i++) {
//     touche[i].addEventListener('click', ()=>{
//         // entrer.textContent += touche[i].textContent;
//         a = touche[i].textContent;
//     });
// }
// // la touche reset pour effacer la totalité du contenue de l'écran 
// reset.addEventListener('click', ()=>{
    
//     entrer.innerHTML = '';
// })

// // la touche delete pour effacer progressivement les element de l'écran
// del.addEventListener('click', ()=>{
//     let ent = entrer.innerHTML.split("");
//     if (ent.length > 0) {
//         ent.pop();
//         entrer.innerHTML = ent.join("");
//     }
// });

// // la fonction pour addition 
// addition.addEventListener('click', ()=>{
//     if (!operateur) {
//         a = entrer.textContent;
//         operateur = "+";
//     }
//     else{
//         b = entrer.textContent;
//     }
   
// });

// // la fonction pour soustraction 
// soustraction.addEventListener('click', ()=>{
//     a = entrer.textContent;
//     entrer.innerHTML = '';
//     operateur = "-";
// });
// // la fonction pour multiplication 
// multiplication.addEventListener('click', ()=>{
//     a = entrer.textContent;
//     entrer.innerHTML = '';
//     operateur = "*";
// });
// // la fonction pour division 
// division.addEventListener('click', ()=>{
//     a = entrer.textContent;
//     entrer.innerHTML = '';
//     operateur = "/";
// });
// // la fonction pour egal 
// egal.addEventListener('click', ()=>{
//     b = entrer.textContent;
//     if(operateur=="+"){
//         entrer.innerText = parseFloat(a) + parseFloat(b);
//     }
//     else if(operateur=="-"){
//         entrer.innerText = parseFloat(a) - parseFloat(b);
//     }
//     else if(operateur=="*"){
//         entrer.innerText = parseFloat(a) * parseFloat(b);
//     }
//     else{
//         if(b>0){
//             entrer.innerText = parseFloat(a) / parseFloat(b);
//         }
//         else{
//             entrer.innerText = "ERROR"
//         }
//     }
// });




// changer les couleur 


themeun.forEach(element => {
        element.addEventListener('click', ()=>{
            btn1.style.visibility = "visible";
            btn2.style.visibility = "hidden";
            btn3.style.visibility = "hidden";
            body.setAttribute('class', 'corps1');
            tete.classList.remove('tete2');
            tete.classList.remove('tete3');
            tete.classList.add('tete1');
            entrer.classList.remove('entrer3');
            entrer.classList.remove('entrer2');
            entrer.classList.add('entrer1');
            conteneur.classList.remove('conteneur2');
            conteneur.classList.remove('conteneur3');
            conteneur.classList.add('conteneur1');
            bascule.classList.remove('bascule2');
            bascule.classList.remove('bascule3');
            bascule.classList.add('bascule1');
            for (let i = 0; i < tchcolor.length; i++) {
                tchcolor[i].classList.remove('touche2');
                tchcolor[i].classList.remove('touche3');
                tchcolor[i].classList.add('touche1');
            }
            del.classList.remove('delete2');
            del.classList.remove('delete3');
            del.classList.add('delete1');
            reset.classList.remove('reset2');
            reset.classList.remove('reset3');
            reset.classList.add('reset1');
            egal.classList.remove('egal2');
            egal.classList.remove('egal3');
            egal.classList.add('egal1');
        });
})
themedeux.forEach(element => {
        element.addEventListener('click', ()=>{
            btn1.style.visibility = "hidden";
            btn2.style.visibility = "visible";
            btn3.style.visibility = "hidden";
            body.setAttribute('class', 'corps2');
            tete.classList.remove('tete1');
            tete.classList.remove('tete3');
            tete.classList.add('tete2');
            entrer.classList.remove('entrer1');
            entrer.classList.remove('entrer3');
            entrer.classList.add('entrer2');
            conteneur.classList.remove('conteneur1');
            conteneur.classList.remove('conteneur3');
            conteneur.classList.add('conteneur2');
            bascule.classList.remove('bascule1');
            bascule.classList.remove('bascule3');
            bascule.classList.add('bascule2');
            for (let i = 0; i < tchcolor.length; i++) {
                tchcolor[i].classList.remove('touche1');
                tchcolor[i].classList.remove('touche3');
                tchcolor[i].classList.add('touche2');
            }
            del.classList.remove('delete1');
            del.classList.remove('delete3');
            del.classList.add('delete2');
            reset.classList.remove('reset1');
            reset.classList.remove('reset3');
            reset.classList.add('reset2');
            egal.classList.remove('egal1');
            egal.classList.remove('egal3');
            egal.classList.add('egal2');
        });
})
themetrois.forEach(element => {
        element.addEventListener('click', ()=>{
            btn1.style.visibility = "hidden";
            btn2.style.visibility = "hidden";
            btn3.style.visibility = "visible";
            body.setAttribute('class', 'corps3');
            tete.classList.remove('tete1');
            tete.classList.remove('tete2');
            tete.classList.add('tete3');
            entrer.classList.remove('entrer1');
            entrer.classList.remove('entrer2');
            entrer.classList.add('entrer3');
            conteneur.classList.remove('conteneur1');
            conteneur.classList.remove('conteneur2');
            conteneur.classList.add('conteneur3');
            bascule.classList.remove('bascule1');
            bascule.classList.remove('bascule2');
            bascule.classList.add('bascule3');
            for (let i = 0; i < tchcolor.length; i++) {
                tchcolor[i].classList.remove('touche2');
                tchcolor[i].classList.remove('touche1');
                tchcolor[i].classList.add('touche3');
            }
            del.classList.remove('delete1');
            del.classList.remove('delete2');
            del.classList.add('delete3');
            reset.classList.remove('reset2');
            reset.classList.remove('reset1');
            reset.classList.add('reset3');
            egal.classList.remove('egal1');
            egal.classList.remove('egal2');
            egal.classList.add('egal3');
        });
})
