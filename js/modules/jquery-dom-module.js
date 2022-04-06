let
	$result_list,
	$search_term_input,
	$type_select_el;

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

