 // 10! = 1*2*3*4*5*6*7*8*9*10


 //Using for Loop (Iterative Method)
 var factorial = 1;
 for (var i = 1; i <= 10; i++){
     factorial = factorial * i
     console.log(i, factorial);
 }


 //Using Function
 function factorial(n){
     var factorial = 1;
     for (var i = 1; i <= n; i++){
         factorial = factorial * i;
     }
     return factorial;
 }

var result = factorial(10);
 console.log(result);


//Using While Loop
var i = 1;
var factorial = 1;
while(i <= 10){
    factorial = factorial * i;
    //console.log(i, factorial);
    i++;
}
console.log(factorial);