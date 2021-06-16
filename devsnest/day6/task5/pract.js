console.log(check([1,2,2,3,3,3,4]));
function check(tmp) {
    let map={};
    let i=0;
    let m=0;
   for( i=0; i<tmp.length;i++){
      if(map[tmp[i]]){
          map[tmp[i]]++;
      }
      else{map[tmp[i]]=1;}
     
      console.log(map[tmp[i]]);
      if(map[tmp[i]]>m){
          m=map[tmp[i]];
      }
     
   }
   return m;
}

