//0,1,1,2,3,5,8,13,21,34---------------
//ager 2 value er jog(F = F(n-1)+F(n-2))
// fibo [2] =fibo[2-1] + fibo[2-2];
// fibo [3] =fibo[3-1] + fibo[3-2];
// fibo [4] =fibo[4-1] + fibo[4-2];
// fibo [5] =fibo[5-1] + fibo[5-2];
// fibo [n] =fibo[n-1] + fibo[n-2];
// fibo [i] =fibo[i-1] + fibo[i-2];


function fibonacci(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

var result = fibonacci(10);
console.log(result);



//Fibonacci Find Series 
function fibonacci(n){
    if(n==0){
        return [0];
    }
    else if(n==1){
        return [0,1];
    }
    else{
        //calculate array with nth element
        var fibo = fibonacci(n-1);
        var nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
        return fibo; 
    }
}

var result=fibonacci(10);
console.log(result);