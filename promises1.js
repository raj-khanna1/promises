// Practicing callbacks and closures
// 1. Callbacks
// Callbacks are the functions which are passed as an argument into another function.
// after callbacks we have understood closures
// and after that let's come out to Promises.
        // that is this gets executes then only call or execute the next function.
        // so we will try to do this using callbacks.

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
// iff given download link is downloaded then save it to my pc directly.
download_link(link,function save_it(data){
    // this function will be only able to get called if the link is downloaded.
    // and this function is only available here, therefore this function can't be called outside somewhere!
    console.log("video Saved!: ",data);
});
// and now this is Closure naa.. that even the execution of download_link and it's "call" , -> the SetTimeout remembers the save_it function.

console.log("Getted Outside.")
