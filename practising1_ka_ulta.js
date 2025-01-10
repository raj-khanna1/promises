// in this file we will implement those 3 functionality same to same -> but in async and await
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
// let downloaded_data=fetchData(url);
// downloaded_data
// .then(function(value){
//     console.log("Download Completed.");
//     return writeData(value);
// })//this will also return a Promise
// .then(function(value){// this will only run if the above Promise is Completed.
//     console.log("Data Saved at: ",value);
//     return uploadData(value);
// })
// .then(function(value){
//     console.log("Uploaded at: ",value);
//     console.log("All transacion Completed Successfully.");
// })


// AB DEKHO RAJ ITNE CODE KI JAGAH OR KYA AATA HAI
// ab isse pure process ko hum aek functionality me dal denge kuki ye sab aek dusre pe hi dependent hain.
// now await takes the Responsibility to return a resolved Promise.
// now to use await we have to make the function async .
// async function also represents that this function can have or can be async in nature means it ccan have some functions that are not
// syncronus.
async function processing(){
    let downloaded_data=await fetchData(url);// this lines say that tab tak wait kro jab tak fetchData fulfilled promise nahi return kar deta
    // uske bad hii -> yani then only niche wala code
    // same k=like pahle ye .then -> baki sab
    console.log("Data Downloaded Succesfully.");
    let writtenData=await writeData(downloaded_data);// await always return the value of the fulfilled promise.
    console.log("File Saved At:" ,writtenData);
    let uploaded_url=await uploadData(writeData);
    console.log("New Url : ",uploaded_url);
    console.log("All Task Completed Succesfully.");
} 
processing();
console.log("Last Line.");
setTimeout(function(){
    console.log("hii Raj Sir.");
},8000);