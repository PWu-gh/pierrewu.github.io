
let scores = document.getElementsByClassName('score');
let score_length = scores.length; 

const img_src = "./ressources/display/sq.svg";
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

function route(file){
    window.location.href("./routes/"+file+".html");
}

document.getElementById('show').style.transition = "opacity 1s";
document.getElementById('show-png').style.transition = "opacity 1s";

setTimeout(()=>{
    document.getElementById('show-png').style.opacity = 0.9;
    document.getElementById('show').style.opacity = 0;
    
}, 2400);
