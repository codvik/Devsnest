
window.onload = function () {
 var button=document.getElementsByClassName("button");
  for(let i=0; i<button.length; i++){
       // button[i].addEventListener("click", displayDate)
        button[i].addEventListener("click", () => {
     alert(this.options[this.selectedIndex]);
})
}
// function displayDate() {
//     alert(this.options[this.selectedIndex]);
//   }
}

// seats.forEach((item)=>{
//     let i = item.classList;
//     item.addEventListener('mouseover',function(){
//         item.style.backgroundColor = "rgba(165, 42, 42, 0.608)";
//     })
//     item.addEventListener('mouseout',function(){
//         item.style.backgroundColor = "";
//     })
//     item.addEventListener('click',function(){
//         if(i.contains('booked')){
//             i.remove('booked');
//             booked_seats -= 1;
//             remaining_seats += 1;
//         }
//         else{
//             i.add('booked');
//             booked_seats += 1;
//             remaining_seats -= 1;
//         }
//         booked.innerHTML = Booked Seats : ${booked_seats};
//         left.innerHTML = Remaining Seats : ${remaining_seats};
//     })
// })