console.log(check([1,2,3,4],3));
function check(tmp,tmp2) {
    let i=0;
    let m=0;
    let ans=[];
    while(i<tmp.length && m<tmp2){
        ans.push(tmp[i]);
        i++;
        m++;
    }
    return ans;
}
