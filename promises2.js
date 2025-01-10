// Learning promises
// TASKS TO PERFORM :-
// 1. Write a Function to Download Data from a URL.
// 2. Write a function to save that downloaded data in a file and return the filename.
// 3. Write a Function to upload the file written in previous step to a new url.

// so how can we return something from a callback or setTimeout like functions
let link="https://youtube/tech_burner/season1/epiode1/720p";
function download_link(link,save_it){
    // let's say it take 2 seconds to download the given link
    console.log("Starting To Download...")
    setTimeout(function process(){
        let data="THE Walking Dead EP1";
        // as hence we can't return TRUE or False Something directly to tell the output, so for that we have only one way
        // to return something is that we call some another function from here, and pass the result to it.
        // therefore we will pass a function to this main_function so that we can call it.
        console.log("Download Completed.")
        save_it(data);
    },5000);
}
function save_to_pc(data,fn2){
    console.log("Saving..");
    setTimeout(function process(){
        console.log("....");
        let address="C:/downloaded/";
        fn2(address);
    },1000);

}
function upload_at(address,fn2){
    console.log("Uploading..");
    setTimeout(function fn(){
        let url="https://web_night.app/video1";
        fn2(url);
    },4000);
}
// iff given download link is downloaded then save it to my pc directly.
download_link(link,function save_it(data){
    // this function will be only able to get called if the link is downloaded.
    // and this function is only available here, therefore this function can't be called outside somewhere!
    console.log("video Received!: ",data);
    save_to_pc(data,function (address){
        // this will only be called from save_tp_pc function-> that gives Guranntees that video is saved.
        console.log("DATA SAved to :",address);

        // and as assures saving and we have received the address , we can now call the upload function.
        upload_at(address,function (response){
            console.log("video Uploaded at :",response);
        });
    });
});
// and now this is Closure naa.. that even the execution of download_link and it's "call" , -> the SetTimeout remembers the save_it function.

console.log("Getted Outside.")

// acha hai.. Callack hell na!