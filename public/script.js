// let countEle = document.querySelector(".count");
let places = document.querySelectorAll(".digit");

const database = firebase.database();
// let root = database.ref("counter-dc1a2-default-rtdb").child("/counter");
let root = database.ref("counter");

let count;

root.on('value', (snapshot) => {
    console.log(snapshot.val());
    count = snapshot.val().num;
    putVal(count);
    // countEle.innerText =  JSON.stringify(count)  ;
});

setInterval(function(){
    count++;
    root.update({
        num:count
    })    
    
    putVal(count);

    // countEle.innerText = JSON.stringify(count)  ;
}, 1000 *5 );

// database.ref("/counter").set({
//     num:103
// })


// digit show on front page
function putVal(number){
    let arr = [0,0,0,0,0];
    let idx = 4;
    while(number>0 && idx>=0){
        arr[idx] = Math.floor(number%10);
        number/=10;
        idx--; 
    }
    console.log(arr);
    
    
    for(let i=0;i<5;i++){
        places[i].innerHTML = arr[i];
    }
}


let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);