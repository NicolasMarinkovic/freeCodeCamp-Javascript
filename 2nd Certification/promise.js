//you use promise to make a promise to do something, usually asynchronously.
//When the task completes, you either fulfill your promise or fail to do so
const myPromise = new Promise((resolve, reject) => {
    // pending
});

//A promise has three states: pending, fulfilled, and rejected

const ourPromise = new Promise((resolve, reject) => {
    if (condition_here) {
        resolve("Promise was fulfilled"); //resolve is used when you want your promise to succeed
    } else {
        reject("Promise was rejected"); //reject is used when you want it to fail
    }
});

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

//The then method is executed immediately after your promise is fulfilled with resolve
makeServerRequest.then(result => { //result comes from the argument given to the resolve method.
    console.log(result); // "We got the data"
});

//catch is the method used when your promise has been rejected
myPromise.catch(error => { //error is the argument passed in to the reject method.
    console.log(error); // if condition would be reject = "Data not received"
});