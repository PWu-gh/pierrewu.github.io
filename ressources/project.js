let c_btn = document.getElementsByClassName('c_btn');

const uncheckbox = "../ressources/display/uncheckbox.png";
const checkbox = "../ressources/display/checkbox.png";

let checked_class = [];


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
        rm_lang("pl",pl);
        uncheckb(pl);
    }
    
}


function insertParam(key, value) {
    if(url_get(key) == null){       //...?pl=php+...
        let n_url = window.location.href +"?"+ key + "="+ value;
        window.history.replaceState( {} , '', n_url );
        pl_tab.push(value);
    }
    else{// only adapted to one parameter key => ...?pl=php
        if(!pl_tab.includes(value)){
            let n_url= window.location.href +"+"+ value;
            window.history.replaceState( {} , '', n_url );
            pl_tab.push(value);
        } 
    }
}

function rm_lang(key, value){
    let n_url;
    pl_tab = rm_from_array(value, pl_tab);
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
    checked_class.push(lang);
    sort_proj();
}

function uncheckb(lang){
    document.getElementById(lang).src = uncheckbox;
    checked_class = rm_from_array(lang, checked_class);
    sort_proj();
}


// proj sorting
function sort_proj(){
    let all_proj = document.getElementById('all_proj');
    for (let i = 0; i < all_proj.childNodes.length; i++)
    {
        let childId = all_proj.childNodes[i].id;
        if(typeof(childId) !== 'undefined'){
            let getid = document.getElementById(childId);
            hideclass_ifin(getid, checked_class);
        }
        
    }
}

function hideclass_ifin(id,classes){
    if(checked_class.length > 0){ 
        if(id.style.display != "none"){
            id.style.display = "none";
        }
        for(let i = 0, j = classes.length; i < j; i++) {
            if(hasClass(id, classes[i])) {
                if(id.style.display != "flex"){
                    id.style.display = "flex";
                }
                break;
            }
        }
    }
    else{
        if(id.style.display != "flex"){
            id.style.display = "flex";
        }
    }

}

function hasClass(id, className) {
    return (' ' + id.className + ' ').indexOf(' ' + className+ ' ') > -1;
    
}


function rm_from_array(element, array){
    let new_array= [];
    array.forEach(e => {
        if(e !== element){
            new_array.push(e);
        }
    });
    return new_array;
}

function visib_sort(){
    let panel = document.getElementById('sort-panel');
    if(panel.style.visibility == "hidden"){
        panel.style.visibility = "visible";
    }
    else{
        panel.style.visibility = "hidden";
    }
}
