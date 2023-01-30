function getAvarage (assignment1, assignment2, assignment3){
    const totalMarks= assignment1 + assignment2 + assignment3;
    const avarageMarks= totalMarks / 3;
    return avarageMarks;
}

const assignment1= 60;
const assignment2= 58;
const assignment3= 60;

const result= getAvarage (assignment1, assignment2, assignment3);
console.log( result )