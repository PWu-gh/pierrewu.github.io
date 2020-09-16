function score(n){
    for(let i = 0; i < n; i++){
        console.log(i);
        document.getElementById('score') = "haha";
    }
}

function test(){
    let score = document.getElementsByClassName('score')[0].innerHTML;
}

let scores = document.getElementsByClassName('score');

// Array.from(scores).forEach((e) => {
//     // Do stuff here
//     console.log(e);
// });

// [...document.getElementsByClassName("score")].forEach(
//     (element, index, array) => {
//         console.log(element);
//     }
// );

let score_length = scores.length; 
const img_src = "./media/sq.svg";
for(let i = 0; i <score_length; i++){
    let score = document.getElementsByClassName('score')[i].innerHTML;
    document.getElementsByClassName('score')[i].innerHTML = "";
    let dom =  document.getElementsByClassName('score')[i];
    for(let j = 0; j < score; j++){
        let DOM_img = document.createElement("img");
        DOM_img.src = img_src;     
        document.getElementsByClassName('score')[i].appendChild(DOM_img);
    }
    for(k = score; k < 5; k++){
        let DOM_img = document.createElement("img");
        DOM_img.src = img_src; 
        DOM_img.style.opacity = "0.4";     
        document.getElementsByClassName('score')[i].appendChild(DOM_img);
    }
} 