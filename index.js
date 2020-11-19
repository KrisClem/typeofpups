
function getDogImage(breed) {
    const apiLinkString = `https://dog.ceo/api/breed/${breed}/images/random`
    
    fetch(apiLinkString)
        .then(response => fetchStatusHandler(response))
        .then(response => response.json())
        .then(responseJson => showPups(responseJson.message))
        .catch((error) => console.error('Error:', error));
}

function showPups(responseJson) { 
    $('.results').empty()
    $('.results').append(
        `<h2>Look at this pup!</h2>
        <img class="results-img" src=${responseJson}>`
    )

    $('.results').removeClass('hidden');
}

function fetchStatusHandler(response) {
  if (response.status === 200) {
    return response;
  } else {
        $('.results').empty()
        $('.results').append(
            `<h2>Oh no, there are no pups of that breed.</h2>
            <h3>Please try a different breed</h3>`
        )
        $('.results').removeClass('hidden');
  }
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