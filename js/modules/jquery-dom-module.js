let
	$result_list,
	$search_term_input,
	$type_select_el,
	onEnterFn,
	isEnterEventRegistered
;


export function registerOnEnter(fn) {
	if (typeof fn !== 'function'){
		throw new Error('You have to provide a function to registerOnEnter!');
	}
	if (!isEnterEventRegistered) {
		isEnterEventRegistered = true;
		document.addEventListener("keyup", (event)=>{
			if (event.key === "Enter" && onEnterFn) {
				onEnterFn();
			}
		})
	}
	onEnterFn = fn;
}

export function onDomLoad() {
	console.log('onDomLoad running..');
	$result_list       = $('#result-list');
	$search_term_input = $('#search-box');
	$type_select_el    = $('#type-select');
	
}

export function getSearchTerm(){
	return $search_term_input.val();
}

export function getSearchType(){
	return $type_select_el.val();
}

export function clearResultList() {
	$result_list.empty();
}

function createItemHtmlElement(item) //encapsulation
{
	if (!item) {
		throw new Error('No Item provided for createItemHtmlElement!')
	}
	
	switch(item.kind) {
	
	}
	if (!item.previewUrl) {
		console.log('no previewUrl!');
		
	}
	const template = `
		<div class="song-item-wrapper">
			<img src="${item.artworkUrl60}" height="60">
			<div class="song-fields">
				<div class="song-title">
					${item.trackName}
				</div>
				<div class="album-title">
					${item.collectionName}
				</div>
				<div class="artist-title">
					${item.artistName}
				</div>
			</div>
			<div class="song-player">
				${item.previewUrl ? '<audio src="' + item.previewUrl + '" controls></audio>' : ''}
<!--				conditional rendering-->
			</div>
		</div>
	`
	return $(template);
}

export function renderList(items) {
	if (!items || !items.length) {
		return
		// throw new Error('No Items provided for renderList!')
	}
	for (const item of items)
	{
		const $element = createItemHtmlElement(item);
		$result_list.append($element);
	}
}
