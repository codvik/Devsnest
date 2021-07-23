let selectButton = document.querySelectorAll('.btt');
let bk=0;
let ubk=28;
let cnt=0;
let prv;
let correct = 0;
let wrong =0;
selectButton.forEach(key =>{
    key.addEventListener('click',()=>{
      let booked = document.querySelector('.edt1');
        let unbooked = document.querySelector('.edt2');
        let color=key.style.backgroundColor;
          if(color === 'lightblue')
            { 
                key.style.backgroundColor= "rgb(0,51,153)";
                key.style.textIndent = "10px";
                key.style.textTransform = "capitalize";
                if(cnt===0){
                  cnt=1;
                   key.style.pointerEvents="none";
                   prv = key;
                }
                else 
                {
      
                  if(key.textContent === prv.textContent)
                  {
                    setTimeout(function(){
                   key.style.pointerEvents= "none";
                   prv.style.pointerEvents= "none";
                   key.style.backgroundColor="#4FFFB0";
                   prv.style.backgroundColor="#4FFFB0 ";
                   correct++;
                   booked.textContent=correct;
                   unbooked.textContent=wrong;
                    },200);
                  }
                  else{
                    setTimeout(function(){ 
                      wrong++;
                  key.style.textIndent = "-9000px";
                  key.style.textTransform = "capitalize";
                  prv.style.textIndent = "-9000px";
                  prv.style.textTransform = "capitalize";
                  key.style.pointerEvents="all";
                  prv.style.pointerEvents="all";
                  key.style.backgroundColor="lightblue";
                  prv.style.backgroundColor="lightblue";
                   booked.textContent=correct;
                   unbooked.textContent=wrong;
                    }, 200);
                  }
                  
                  cnt=0;
                }
               
            }
          else {
              bk--;
              ubk++;
              booked.textContent=bk;
              unbooked.textContent=ubk;
              key.style.textIndent = "-9000px";
              key.style.textTransform = "capitalize";
              key.style.backgroundColor='lightblue';
          }
    });
});