let c_btn = document.getElementsByClassName('c_btn');

const uncheckbox = "../ressources/display/uncheckbox.png";
const checkbox = "../ressources/display/checkbox.png";

//init all unchecked img
for(let i = 0; i < c_btn.length; i++){
    c_btn[i].src = uncheckbox;  
}

//takes param and remove dupe
let pl_tab = pl_init("pl");

function pl_init(param){
    let p = url_get(param);
    if(p == null){
        return [];
    }
    else{
        //remove dupes
        let p_split = p.split("+");
        let new_tab = [];
        p_split.forEach(e => {
            if(!new_tab.includes(e)){
                new_tab.push(e);
                checkb(e);
            }
        });
        //update no dupes param
        n_url= window.location.href.split('?')[0] + "?"+param+"="+ new_tab.join("+");
        window.history.replaceState( {} , '', n_url );
        return new_tab;
    }
 }


function btn_click(pl){
    if(!pl_tab.includes(pl)){
        insertParam("pl", pl);
        checkb(pl);
    }
    else{
        pop_lang("pl",pl);
        uncheckb(pl);
    }
    
}


function insertParam(key, value) {
    if(url_get(key) == null){
        let n_url = window.location.href +"?"+ key + "="+ value;
        window.history.replaceState( {} , '', n_url );
        pl_tab.push(value);
    }
    else{// only adapted to one parameter key
        let n_url= window.location.href +"+"+ value;
        window.history.replaceState( {} , '', n_url );
        console.log(url_get("pl"));
        pl_tab.push(value);
    }
}

function pop_lang(key, value){
    let n_url;
    pl_tab.pop(value);
    let url_main =  window.location.href.split('?')[0];
    if(pl_tab.length == 0){
        n_url = url_main;
    }
    else{
        n_url= url_main + "?"+key+"="+ pl_tab.join("+");
    }
    window.history.replaceState( {} , '', n_url );
    
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

function checkb(lang){
    document.getElementById(lang).src = checkbox;
}

function uncheckb(lang){
    document.getElementById(lang).src = uncheckbox;
}