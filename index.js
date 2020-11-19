
function getDogImage(breed) {
    const apiLinkString = `https://dog.ceo/api/breed/${breed}/images/random`
    
    fetch(apiLinkString)
        .then(response => response.json())
        .then(responseJson => showPups(responseJson.message))
        .catch(error => alert('Something went wrong. Try again later.'));
}

function showPups(responseJson) {
    $('.results-img').replaceWith(
        `<img src=${responseJson}>`
    )

    $('.results').removeClass('hidden');
}


function submitBreed() {
    $('form').on('click', '.submit-button', event => {
        event.preventDefault();
        const breed = $('input').val()
        getDogImage(breed) 
        console.log($('input').val())
    });
   
}

$(submitBreed)