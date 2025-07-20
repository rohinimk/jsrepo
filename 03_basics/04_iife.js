//Immediately Invoked Function Expressions (IIFE)

//named iife
(function one(){
    console.log("DB Connected");
})(); //if you remove the semicolon it will thorw an error becuase the global scope won't know where to end the current context

//iife using arrow function / unnamed iife
( () => {
    console.log(`DB COnnected Two`);
    
})();

//iife using arrow function
( (name) => {
    console.log(`DB COnnected Two ${name}`);
    
})("john");