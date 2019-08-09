/*
function a(){
    console.log('A');
}
*/
var a = function(){ // 이름 없는 함수 = 익명함수
    console.log('A');
}

function slowfunc(callback){
    callback();
}
slowfunc(a);