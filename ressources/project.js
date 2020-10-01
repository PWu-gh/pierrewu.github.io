let s_btn = document.getElementsByClassName('s_btn');
let s_btn_length = s_btn.length; 

const img_src = "../ressources/display/sq.svg";
for(let i = 0; i <s_btn_length; i++){
    let dom =  document.getElementsByClassName('s_btn')[i];
    let DOM_img = document.createElement("img");
    DOM_img.src = img_src;  
    document.getElementsByClassName('s_btn')[i].appendChild(DOM_img);

} 

function btn_click(){
    
    console.log("cc")
}