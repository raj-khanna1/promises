// in this lecture we will learn about that .then method functions/callbacks are not executed directly, even the Promises are resolved.
// they are first send to the microtask queue, and when all of the code gets executed then, microtask queue gets higher priority, than
// event queue.

// let's see some examples and learn more!!
console.log("hii Raj.");
function fetchData(url){
    console.log("Downloading start");
    return new Promise(function (resolve,reject){
        console.log("Download Completed!");
        let data="Dummy DATA";
        resolve(data);// when we do resolve it checks in the Promise object state property, if state is pending it changes it to fulfilled
        // and change the value property to resolved value.
        console.log("Resolved!");
    });
}
let downloaded_Data=fetchData("www.inte_graphics.com");
console.log(downloaded_Data);//dekho lo raj , that at his point even the promise has being resolved! BUT the then method's function will
//  be not call at the same time, it will be called at last when no one is their.
downloaded_Data
.then(function(value){
    console.log("Verified in then function/callback");
});
console.log("all finishes.");
