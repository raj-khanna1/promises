// async and await, 
// getting the knowledge that how we can add multiple callbacks into our onfulfillment array.
// AND THE MAIN IS THAT -> AWAIT Converts a normal value to a promise also.
// async function process(){
//     let c=await 50; //here await is directly converting 50 to a promise. with a value 50 only.
//     console.log("c= ",c);

//     let obj={};
//     let y=await obj===obj;
//     console.log(y);
// }
// process();
// console.log("hello raj.");
// setTimeout(function p(){
//     console.log("end");
// },0);


// now learning about Error Handlings or Rejection Cases in Promises.
// function process(){
//     return new Promise(function(resolve,reject){
//         let data="countray";
//         if(data=="country"){resolve(data);console.log("Promise is resolved!");}
//         else {reject(data);console.log("Promise is Rejected with val= ",data);}
//     });
// }
// console.log("Start.");
// let a=process();
// a
// .then(function succ(value){//promise1
//     console.log("Promise1 is fulfilled! ",value);
// })
// .then(function succ1(value){//promise2
//     console.log("Promise2 is also resolved.",value);
// })
// .then(function succ2(value){//promise3
//     console.log("Promise3 is also resolved.",value);
//     return Promise.reject(2);
// })
// .catch(function(value){
//     console.log("promise4 is unresolved",value);
//     return Promise.reject(5);
// })
// .then(function(){
//     console.log("cathed returned promise catched.");
//     return Promise.reject(3);
// })
// .catch(function(value){
//     console.log("Last rejection handled.",value);
// })

// console.log("end");


// Learning throw
console.log("start");
let a=Promise.reject(2);
a
.then(function(value){
    console.log("Fulfillment Handled successfully.");
    // throw "error hai bhaiya!";
},function err(value){
    console.log("rejection handled successfully.");
    return "!";
})
.then((a)=>{console.log("hi sexy",a);})
.catch(function(value){ 
    console.log("error handled successfully.",value);
})
console.log("end baby.");