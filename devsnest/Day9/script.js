let selectButton = document.querySelectorAll('.btt');
let bk=0;
let ubk=28;
selectButton.forEach(key =>{
    key.addEventListener('click',()=>{
      let booked = document.querySelector('.edt1');
        let unbooked = document.querySelector('.edt2');
        let color=key.style.backgroundColor;
          if(color === 'lightblue')
            { 
                key.style.backgroundColor= "rgb(0,51,153)";
                bk++;
                ubk--;
                booked.textContent=bk;
                unbooked.textContent=ubk;
            }
          else {
              bk--;
              ubk++;
              booked.textContent=bk;
              unbooked.textContent=ubk;
              key.style.backgroundColor='lightblue';
          }
    });
});