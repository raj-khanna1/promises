// in this we will practice and learn more in depth the promises and async and await by doing actual Promises.

function fetchData(url){
    return new Promise(function(resolve,reject){
        console.log("starting Download.. from ",url);
        for(let i=1;i<10000000000;i++){}
        resolve("dunmmy data");
    });
}

function writeData(data){
    // ab yahan me normal setimeout yu nahi likh skte?
    // kuki agar hum normal setTimeout likenege to wo bad mein complete hoga.
    // or agar hum iss function ke call ke bad Upload function call kar dete hain -> to wo kya UPLOAD karega?
    // kuki hum to sidha writedata se bahar aa gaye hain-> YEH !!! TORDHI na pata hai ki data write ho hi gaya hai.
                // To ye confirm hone ke bad hi hum chlana chate hain UPLOADDATA() ko, to ya to to hum setTimeout ke andar callback
                // call kar denge -> par wo confusing hai -> OR MAINLY INVERSION OF CONTROL -> problem ko rise karta hai!
                // that's why we use Promises -> so that inversion of control is stopped.
    // therefore we will create a Promise, and whenever the Promise will be fulfilled than from the onfulfillment array se
    // uske linked funcitons aek aek karke microcontroller main jayenge or event loop ki consdition true hote hi execute honge.

    return new Promise(function (resolve,reject){
        console.log("Writing Data..");
        setTimeout(function(){
            console.log("data Written Succesfully!");
            resolve("c/development/");
        },5000);
    });
}

function uploadData(adrs){
    return new Promise(function (resolve,reject){
        console.log("Uploading Data..");
        setTimeout(function(){
            console.log("data Uploaded Succesfully!");
            resolve("https:/exdata/new_hub/fxed/");
        },6000);
    });
}
let url="www.youtube.com";
let downloaded_data=fetchData(url);
downloaded_data
.then(function(value){
    console.log("Download Completed.");
    return writeData(value);
})//this will also return a Promise
.then(function(value){// this will only run if the above Promise is Completed.
    console.log("Data Saved at: ",value);
    return uploadData(value);
})
.then(function(value){
    console.log("Uploaded at: ",value);
    console.log("All transacion Completed Successfully.");
})

console.log("Last Line.");