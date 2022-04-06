import {
	clearResultList,
	getSearchTerm,
	getSearchType,
	onDomLoad,
	registerOnEnter,
	renderList
	
}                     from "./modules/jquery-dom-module.js";
import {searchITunes} from "./modules/itunes-api-module.js";

window.onBodyLoad = (event) => {
	onDomLoad();
	registerOnEnter(() => {
		alert('You pressed the E key!')
		console.log('registerOnEnter');
	})
}


const onButtonClicked  = async () => {
	clearResultList();
	
	const
		searchTerm = getSearchTerm();
	if (!searchTerm)
	{
		return
	}
	
	const
		items      = await searchITunes(searchTerm, getSearchType());
	
	renderList(items);
};
window.onButtonClicked = onButtonClicked


