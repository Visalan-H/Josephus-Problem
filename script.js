let njs=document.getElementById("n");
let wnjs=document.getElementById("wn");
function fun1(){
    let a=Number(njs.value);
    let bin=a.toString(2);
    let b=bin.slice(1)+bin[0];
    let result = parseInt(b,2);
    wnjs.value=result;
}
