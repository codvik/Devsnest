let bttn = document.querySelector('button');
let inpt = document.querySelector('input');
let space = document.querySelector('.innerContainer');
bttn.addEventListener('click', ()=>{
    let pra = document.createElement('p');
    pra.classList.add('wrong');
    pra.innerText=inpt.value;
    space.appendChild(pra);
});

let remv = document.querySelectorAll('.wrong');

remv.forEach(element => {
     element.addEventListener('dblclick', ()=>{
     space.removeChild(element);
   });
});
