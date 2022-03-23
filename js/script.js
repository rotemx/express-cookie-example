// authentication - is it really Rotem ?
// authorization - is Rotem allowed access to the resource? and what level of access?

let
	$result_list,
	$search_term_input,
	$type_select_el;

function onBodyLoad()
{
	$result_list       = $('#result-list');
	$search_term_input = $('#search-box');
	$type_select_el    = $('#type-select');
}


function createItemHtmlElement(item) //encapsulation
{
	switch(item.kind) {
	
	}
	
	// Reusable component
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
				<audio src="${item.previewUrl}" controls></audio>"
			</div>
		</div>
	`
	return $(template);
}


function onButtonClicked()
{
	$result_list.innerHTML = '';
	const
		search_term        = $search_term_input.val(),
		searchType         = $type_select_el.val();
	
	fetch(`https://itunes.apple.com/search?term=${search_term}${searchType === 'all' ? '' : '&entity=' + searchType}`)
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
						$result_list.append(element);
					}
				})
		})
}

