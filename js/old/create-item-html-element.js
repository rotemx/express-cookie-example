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
				<audio src="${item.previewUrl}" controls></audio>
			</div>
		</div>
	`
	return $(template);
}

export {createItemHtmlElement}
