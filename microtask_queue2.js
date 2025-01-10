// in this we will check whether first if priomise is not resolved than the .then callback will not run even it is in microtask queue
// but let's say after 10 seconds it gets executed -> to kya wo fir se khud se execute ho jayega?
console.log("Getting all ready");
function fetchData(){
    return new Promise(function (resolve,reject){
        console.log("downloading start..");
        setTimeout(function (){
            console.log("download finishes.");
            resolve("dummy data");
        },7000);
    });
}
let data=fetchData("www.getxpd.com");
data.then(function(value){
    console.log("Resolved ! also");
    console.log("and value is: ",value);
});
console.log("end");
