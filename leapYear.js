
//Aktu Problem ache


//Using If else
const year = 3996;
const remainder = year % 4;
if(( year % 4 == 0) && ( year % 100 != 0) || (year % 400 == 0)){
    console.log('Your year is a leap year ');
}
else{
    console.log('Your year is not a leap year');
}


//Using Function
function isLeapYear(year){
    const remainder = year % 4;
    if(( year % 4 == 0) && ( year % 100 != 0) || (year % 400 == 0)){
        return true;
    }
    else{
       return false;
    }
}

const check2000 = isLeapYear(2000);
console.log(check2000);
