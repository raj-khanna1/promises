// learning how to implement promises.
function getData(url){
    // first we are creating an object of promise and then returning it.
    // while creating a Promise, we need to pass a function as an argument into it's constructor, which function will
    // have two parameters -> resolve and reject
    return new Promise(function (resolve,reject){
        console.log("Downloading Start..");
        setTimeout(function process(){
            let data="twd ep1";
            console.log("Download Completed 100%.");
            resolve(data);// this is the way we are returning the response or new value or resolved value.
        },5000);
        console.log("50% Completed!");
    });
}
let downloadedData=getData("https://www.abc.twd/s1");
console.log("downloaded data: ",downloadedData);
setTimeout(function(){
    console.log("after Resolving: data= ",downloadedData);
    downloadedData.then(function f(){
        console.log("jai hind!");
    });
    
},7000);