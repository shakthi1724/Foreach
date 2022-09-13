var s=[5,10,15,20,"Shakthi"];
console.log("Original array:",s);
console.log("Length of original array:",s.length);
function shakthi(s){
    let x = s/5;
    console.log(x);
}
var a=s.forEach(shakthi);
console.log("Method:s.forEach(shakthi)");
console.log("Change in array:",a)
