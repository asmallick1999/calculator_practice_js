function clr(){
    document.getElementById("inp").value=' ';
}
function disp(n){
    var a = document.getElementById("inp").value+=n;
}
function cal(){
    var x=document.getElementById("inp").value;
    var y=eval(x)
    document.getElementById("inp").value=y;
}