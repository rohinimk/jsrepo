const promiseOne = new Promise(function(resolve, reject){ 
    //Do any async task
    //DB Calls, Cryptography, network calls
    setTimeout(() => {
        console.log('Async1 Task is completed!');                
    }, 1000);
    resolve();
});

promiseOne.then(function(){
    console.log("Promise Consumed!");
});


new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log('Async2 Task is Completed!');        
    },1000);    
    resolve();    
}).then(function(){
    console.log('Async2 resolved!');    
});

const promiseThree = new Promise(function(resolve,reject){
    resolve({userName : "James", email: "james@tes.com"});
});

promiseThree.then(function(user){
    console.log(user);    
});

const promiseFour = new Promise(function(resolve, reject){
    let error = true;
    if(!error){
        resolve({username : "James", password: "123"});
    } else{
        reject('Error: Something went wrong');
    }
});

promiseFour
.then(function(user){
    console.log('Promise Four User: ', user);
    return user.username;
})
.then((username) => {
    console.log(`UserName is : ${username}`);    
})
.catch(function(msg){
    console.log("Promise Four Error is: ",msg);    
})
.finally(() => {
    console.log("The Promise is either resolved or rejected!");    
});


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username : "James", password: "123"});
        } else{
            reject('Error PromiseFive : Something went wrong');
        }
    }, 1000);
});


async function consumePromiseFive()
{
    try{
        const response = await promiseFive;
        console.log('Response is: ', response); 
    } catch (error) {
        console.log(error);
        
    }       
};

consumePromiseFive();

/* async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        //console.log(response);        
        const data = await response.json();
        console.log(data);
        
    }catch(error){
        console.log('Error in getAllUsers: ', error);        
    }    
}
getAllUsers(); */

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);    
})
.catch((error) => console.log(error)
)
.finally(() => console.log("in the finally block"));

/* A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.*/