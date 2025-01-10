// let's Practice Promises in real World.
// . Summary
// fetch ka kaam Web API karta hai aur jab response aata hai, Promise ka .then() ya await ka code Microtask Queue mein queue hota hai.
// setTimeout ka callback Event Queue mein queue hota hai.
// Event Loop Microtasks ko Event Queue se pehle execute karta hai.
// Dono fetch aur setTimeout ka kaam asynchronous hai, par unka execution order Microtask aur Event Queue ke alag hone ki wajah se alag hota hai.
// Yeh samajhna zaruri hai ki Promise (fetch ka part) turant nahi execute hota, balki Microtask Queue ke through execute hota hai, jab synchronous code aur Call Stack khatam ho jaye.

// Aapki confusion ab clear hui? 😊

function process(){
    let name_given=document.querySelector('input').value;
    let returned_promise=fetch(`https://api.genderize.io?name=${name_given}`);
    // jab bhi yeh promise full fill hhoga then .then wala chlega
    returned_promise
    .then(function(value){
        // now after geetting a resolved promise
        // we will convert the value to json
        let fetched_json_data=value.json();
        return fetched_json_data;
        
    })
    .then(function (value2){
        console.log(value2);
        let gender=document.querySelector('#genderi');
        gender.innerText=`${name_given} is a ${value2.gender} with Probability of : ${value2.probability*100}%`;
        return true;
    })
    .then(function(value){

    });
    console.log("end half");
}
let btn1=document.querySelector('button');
btn1.addEventListener('click',()=>process());
// process();
console.log("end pure");