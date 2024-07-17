// Switch Case
// task4: 1-7 days

let day = 5

switch(day)
{
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wednesday");
        break;
        case 4:
            console.log("Thursday");
            break;
            case 5:
                console.log("Friday");
                break;
                case 6:
                    console.log("Saturday");
                    break;

                    default:
                        console.log("Not Exitense");
                        break;
        

   
        
}

// Task5: grading

let grade;
let score = 90

switch (true)
{
    case(score>=90 && score <=100):
    grade = "A";
    break;
    case(score>=80 && score <90):
    grade = "B";
    break;
    case(score>=70 && score <80):
    grade = "C";
    break;
    case(score>=60 && score <70):
    grade = "D";
    break;
    case(score>=50 && score <60):
    grade = "E"
    break;
    case(score>=0 && score< 50):
    grade = "F";
    break;
    default:
        grade = "Invalid Score";
        break;


}

console.log(`The grade for ${score} is: ${grade}`);