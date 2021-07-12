$(() => {

$.ajax({

url: `https://rickandmortyapi.com/api/character/`

}).then(

  (data) => {

console.log(data);

})

})
