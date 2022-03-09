let
    result_list,
    search_term_input;

function onBodyLoad(){
    result_list = document.getElementById('result-list');
    search_term_input = document.getElementById('search-box');
}

function onButtonClicked() {
    result_list.innerHTML = '';
    const search_term = search_term_input.value;
    fetch(`https://itunes.apple.com/search?term=${search_term}`)
        .then(response => {
            response
                .json()
                .then(data => {
                    const albums = data
                        .results
                        .map(res => res.collectionName);

                    const unique_album = [...(new Set(albums))];

                    for (let album of unique_album) {
                        const
                            text = document.createTextNode(album),
                            div = document.createElement('div');
                        div.appendChild(text);
                        result_list.appendChild(div);
                    }
                })
        })
}