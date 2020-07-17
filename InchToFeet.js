
//Inch to Feet
var inch = 156;
var feet = inch/12;
console.log(feet);


//Using Function Inch to Feet
function inchToFeet(inch){
    var feet = inch/12;
    return feet;   
}

var nanaFeet = inchToFeet(156);
console.log(nanaFeet);

var naniFeet = inchToFeet(288);
console.log(naniFeet);



//Using Array-Function Inch to Feet
function inchToFeet(inch){
    var feet = inch/12;
    return feet;   
}

var senior =[156, 288];

var nanaFeet = inchToFeet(senior[0]);
console.log(nanaFeet);

var naniFeet = inchToFeet(senior[1]);
console.log(naniFeet);