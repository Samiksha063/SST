// Store Objects  
const student = {
    name : "Samiksha",
    age : 19,
    roll :2,
    address : "Basundhara"
};

localStorage.setItem("student data",JSON.stringify(student));
console.log("object saved");

const studentString = localStorage.getItem("student data");
const studentObject = JSON.parse(studentString);
console.log(studentObject);