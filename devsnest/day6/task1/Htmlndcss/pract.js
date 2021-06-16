

function is_array() {
let tmp = prompt("enter input");
alert(tmp);
//    document.getElementById("show").innerHTML="jitender"+Array.isArray(tmp);
    document.getElementById("show").innerHTML=
     check(tmp);
}

function check(st) {
    let t=st.length;
    if(t<=1) return false;
    else{
        if(st[0]=='[' && st[t-1]==']')return true;
        else return false;
    }
}
