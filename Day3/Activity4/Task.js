// conditional ternary operator

// task6: checking number is even or odd

let checkNumber = 37;

(checkNumber % 2 ==0) ? console.log("Even") : console.log("Odd");


//Task7: leap year or not 

let year = 1996;

if((year % 4 == 0 && year % 100 !=0) || (year % 400 == 0))
{
    console.log(year + " Is a leap year");

}
else 
{
    console.log(year+ "Is not a leap year");
}