const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
//console.log(descriptor);

/* console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI) */

const course = {
    name : "JavaScript",
    price : 999,
    isAvailable : true,

    orderCourse(){
        console.log("Course Order Failed");        
    }
}

console.log(course);
console.log(Object.getOwnPropertyDescriptor(course, "price"));
Object.defineProperty(course, "price", {
    writable: false,
    enumerable: false
});
console.log(Object.getOwnPropertyDescriptor(course, "price"));

for (const [key, value] of Object.entries(course)) {
    if(typeof value !== "function"){
        console.log(`${key} : ${value}`);
    }    
    //this code won't work if you have a function in the object
}



