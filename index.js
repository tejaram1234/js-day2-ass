let  x=6;
function multiplyByTwo(p1) {
  return 2*p1;
}
console.log(" mutiplication of input with number 2: ",multiplyByTwo(x));


let  y=6;
function divideByTwo(p2) {
  return p2 / 2;
}
console.log("division of input with number 2:",divideByTwo(y));


function findprime(num){
  let factor;
  for (let i = 0; i < num; i++) {
     factor = 0
     for (let j= 0; j < num; j++)
         if (i% j == 0) factor++;
       if (factor == 2) console.log(i);
   }
}
console.log(findprime(97));