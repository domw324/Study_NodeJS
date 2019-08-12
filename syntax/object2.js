// array, object

// var i = if(true){consol.log(1)}; // 값이 될 수 없음
// var w = while(true) {console.log(1)}; // 값이 될 수 없음
var f = function(){ // 함수는 값이 될 수 있음.
    console.log(1+1);
    console.log(1+2);
}
var a = [f];
a[0]();

var o = {
    func:f
}
o.func();