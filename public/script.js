// const axios = require("axios");

let nextBtn =  document.querySelector("a");
let input = document.querySelector("input");
// let db = require("./info")

console.log(db);

nextBtn.addEventListener("click",function(){
    
    console.log(db);
    db.name = input.value;
    nextQues(db);

});


function nextQues(db){
    let url = window.location.href;
    url =  url.split("/");
    url = url[3];
    console.log(url);
    axios.get("./Q2.html",db);
}
