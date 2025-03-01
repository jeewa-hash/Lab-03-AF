const myPromise = new Promise((resolve, reject) => {
    if(condition){
        resolve("Condition is true");
    } else {
        reject("Condition is false");
    }
});

myPromise.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});