let a=0;
let prv = undefined;
let ans = document.querySelectorAll('.wrong');

ans.forEach(key=>{
    key.addEventListener('click', () =>{
         if(key.classList.length === 2){
             key.style.backgroundColor="#9DC88D";
             if(prv !=  undefined){
               prv.style.backgroundColor="#F1B24A";
             }
             prv=key;
         }
         else{
             key.style.backgroundColor="#FF0800";
             if(prv !=  undefined){
                 prv.style.backgroundColor="#F1B24A";
             }
             prv = key;
         }
    });
});