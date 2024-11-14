// Loops are used to execute a block of code repeatedly until
// specific conditions are met

for (let i = 0; i < 5; i++) {
    console.log("hello from Loop" + i);
};

const colors = ["red", "green", "blue", "yellow"]

for (let i = 0; i < colors.length; i++){
    console.log("color:", colors[i]);
}

const fruits = ["apple", "orange", "banana",]

for (let v = 0; v < fruits.length; v++){
    console.log("fruits", fruits[v]);
}

const students = [
    {name: "smith", grade: 85},
    {name: "tyler", grade: 92},
    {name: "seyi", grade: 100},
]

for (let i = 0; i < students.length; i++) {
    console.log("students:", students[i].name, "grade:", students[i].grade);
}

const details = [
    {name: "smith", school: "new horizon", course: "Frontend Development"}
]

for (let i = 0; i < details.length; i++) {
    console.log("details:", details[i].school, "course:", details[i].course);
}
//while loop
let i = 0;
while (i < 5){
    console.log("count is: " + i)
    i++
}


