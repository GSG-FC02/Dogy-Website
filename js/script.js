let dogBtn = document.getElementById('showDog');
let dogImg = document.getElementById('dogImage');

dogBtn.addEventListener("click", newDog)

// function to get a random image of dog from API and show it
function newDog(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => {
        return response.json();      
    })    
    .then(data => {
        dogImg.src = data.message;
    })
    .catch(error => { console.log('Something went wrong', error);
    });
}