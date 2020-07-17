//10! = 5*4*3*2*1

//for loop
// for( i=10; i>=5; i--){

// }

//While loop
// var i=10;
// while(i>=1){
//     i--;
// }

//0! =1
//5! =1*2*3*4*5
//6! =(6-1)!*6
//n! =(n-1)!*n
function factorial(n){
    if(n==0){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}

var result = factorial(10);
console.log(result);