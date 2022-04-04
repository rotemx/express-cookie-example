import {
	onBodyLoad,
	$result_list,
	$search_term_input,
	$type_select_el
}                     from "./on-body-load.js";
import {searchITunes} from "./search-i-tunes.js";


window.onBodyLoad      = onBodyLoad;
window.onButtonClicked = ()=>{
	searchITunes($search_term_input.val(),$type_select_el.val());
};


