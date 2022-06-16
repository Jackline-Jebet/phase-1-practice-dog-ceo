console.log('%c HI', 'color: firebrick')
document.addEventListener("onload",function(){
    fetchDogImages()
})
function fetchDogImages(){
    fetch ("https://dog.ceo/api/breeds/image/random/4")
    .then(response=>response.json())
    .then(data=>console.log(data))
} 