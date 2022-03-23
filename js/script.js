// authentication - is it really Rotem ?
// authorization - is Rotem allowed access to the resource? and what level of access?

let
	result_list,
	search_term_input,
	type_select_el;

function onBodyLoad()
{
	result_list       = document.getElementById('result-list');
	search_term_input = document.getElementById('search-box');
	type_select_el    = document.getElementById('type-select');
}


function createItemHtmlElement(item){
	const
		textNode = document.createTextNode(item.trackName),
		div      = document.createElement('div');
	div.appendChild(textNode);
	return div;
}


function onButtonClicked()
{
	result_list.innerHTML = '';
	const
		search_term       = search_term_input.value,
		searchType        = type_select_el.value;
	
	fetch(`https://itunes.apple.com/search?term=${search_term}${searchType === 'all' ?  '' : '&entity=' + searchType }`)
		.then(response => {
			response
				.json()
				.then(data => {
					const items = data
						.results
						.filter(item => !!item.kind);
					
					
					for (let item of items)
					{
						const element = createItemHtmlElement(item);
						result_list.appendChild(element);
					}
				})
		})
}

