let s_btn = document.getElementsByClassName('s_btn');
let s_btn_length = s_btn.length; 

const img_src = "../ressources/display/sq.svg";
for(let i = 0; i <s_btn_length; i++){
    let dom =  document.getElementsByClassName('s_btn')[i];
    let DOM_img = document.createElement("img");
    DOM_img.src = img_src;  
    document.getElementsByClassName('s_btn')[i].appendChild(DOM_img);

} 

function btn_click(pl){
    insertParam("pl", pl);
    
}


function insertParam(key, value) {
    console.log()
    if(url_get(key) == null){
        let n_url = window.location.href +"?"+ key + "="+ value;
        window.history.replaceState( {} , '', n_url );
    }
    else{// only adapted to one parameter key
        let n_url= window.location.href +"+"+ value;
        window.history.replaceState( {} , '', n_url );
        console.log(pl_tab);
        console.log(url_get("pl"));
    }
    
   

}

function url_get(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);
	if ( param ) {
		return vars[param] ? vars[param] : null;	
    }
	return vars;
}