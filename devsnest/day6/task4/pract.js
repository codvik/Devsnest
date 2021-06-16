console.log(check(["Red", "Green", "White", "Black"]));
function check(tmp) {
    let t="";
    let i=0;
   for( i=0; i<tmp.length;i++){
       if(i!=tmp.length-1){
           t+=tmp[i]+',';
       }
       else{
           t+=tmp[i];
       }
   }
   return t;
}
