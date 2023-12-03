const tinderUser = new Object()

// console.log(tinderUser);


const course = {
    coursename : "js",
    price: "999",
    courseInstructor: "Abhishek"
}

const{courseInstructor } = course 
console.log(courseInstructor);

const{courseInstructor:instructor } = course 
console.log(instructor);