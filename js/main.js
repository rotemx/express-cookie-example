import {
	clearResultList,
	getSearchTerm,
	getSearchType,
	onDomLoad, renderList
} from "./modules/jquery-dom-module.js";
import {searchITunes}                                             from "./modules/itunes-api-module.js";

window.onBodyLoad = (event)=>{
	onDomLoad()
}

window.onButtonClicked = async (event)=>{
    clearResultList();
	const items = await searchITunes(getSearchTerm(), getSearchType());
	renderList(items);
}
