$(() => {
  // $('.sub').on('submit',() => {
  //   event.preventDefault()
  //
  //
  //
  // })

  const $modal = $('#modal')
  const $closeModal = () => {
    $modal.css('display','none')
  }
  const $modalBox = $('#modal-content')

  const openModal = () => {

    $modal.css('display', 'block')
  }
  const closeModal = () => {
    $modal.css('display', 'none')
  }
  $('#close').on('click', () => {
    event.preventDefault()
    $('#modal-content').empty()
    $closeModal()


  })

$.ajax({

url: `https://rickandmortyapi.com/api/character/`

}).then(

(data) => {
for(let i =1;i<=20;i++){


  const $img = $('<img>')
  .attr('src', data.results[i].image)
  .attr('id', i)
  .addClass('image')
  .appendTo($('.line1'))

$img.on('click', () => {
populateModal(data.results[i])
openModal()
})
}




  console.log(data);
})
const populateModal = (item) => {
const $nameP = $('<p>').text(`Name: ${item.name}`).appendTo($('#modal-content'))
// const $lineSpace = $('<p>').text('__________________________').appendTo($('#modal-content'))
const $originP = $('<p>').text(`Origin: ${item.origin.name}`).appendTo($('#modal-content')).addClass('dash-border')
// const $lineSpace2 = $('<p>').text('__________________________').appendTo($('#modal-content'))
const $speciesP = $('<p>').text(`Species: ${item.species}`).appendTo($('#modal-content')).addClass('dash-border')
// const $lineSpace3 = $('<p>').text('__________________________').appendTo($('#modal-content'))
const $statusP = $('<p>').text(`Status: ${item.status}`).appendTo($('#modal-content')).addClass('dash-border')
const $episodeP = $('<p>').text(`Episode: ${item.episode}`).appendTo($('#modal-content')).addClass('dash-border').attr('id','episodes')


  // console.log(dataItem.name);
}

const $ajaxFunc =() => {


  for(let i = 2; i<=32;i++){
    $.ajax({
      url: `https://rickandmortyapi.com/api/character/?page=${i}`
    }).then(
      (data) => {
        for(let j=0;j<data.results.length;j++){
        const $img = $('<img>')
        .attr('src', data.results[j].image)
        .addClass('image')
        .appendTo($('.line1'))

        $img.on('click', () => {
        $('#modal-content').empty()
        populateModal(data.results[j])
        openModal()
        })
      }

    })
  }
}
$ajaxFunc()






// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=2`
//
// }).then(
//
// (data) => {
//
//   for(let i =0;i<20;i++){
//
//
//     const $img = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//     $img.on('click', () => {
//     $('#modal-box').empty()
//     populateModal(data.results[i],data.results[i],data.results[i],data.results[i])
//     openModal()
//     })
//
//   }
//
//   // console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=3`
//
// }).then(
//
//
//
// (data) => {
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=4`
//
// }).then(
//
// (data) => {
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=5`
//
// }).then(
//
// (data) => {
//
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=6`
//
// }).then(
//
// (data) => {
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=7`
//
// }).then(
//
// (data) => {
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=8`
//
// }).then(
//
// (data) => {
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=9`
//
// }).then(
//
// (data) => {
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=10`
//
// }).then(
//
// (data) => {
//
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=11`
//
// }).then(
//
// (data) => {
//
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//
//
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=12`
//
// }).then(
//
// (data) => {
//
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=13`
//
// }).then(
//
// (data) => {
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=14`
//
// }).then(
//
// (data) => {
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=15`
//
// }).then(
//
// (data) => {
//
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=16`
//
// }).then(
//
// (data) => {
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=17`
//
// }).then(
//
// (data) => {
//
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=18`
//
// }).then(
//
// (data) => {
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=19`
//
// }).then(
//
// (data) => {
//
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=20`
//
// }).then(
//
// (data) => {
//
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=21`
//
// }).then(
//
// (data) => {
//
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=22`
//
// }).then(
//
// (data) => {
//
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=23`
//
// }).then(
//
// (data) => {
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=24`
//
// }).then(
//
// (data) => {
//
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=25`
//
// }).then(
//
// (data) => {
//
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//
//
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=26`
//
// }).then(
//
// (data) => {
//
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=27`
//
// }).then(
//
// (data) => {
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=28`
//
// }).then(
//
// (data) => {
//
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=29`
//
// }).then(
//
// (data) => {
//
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=30`
//
// }).then(
//
// (data) => {
//
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=31`
//
// }).then(
//
// (data) => {
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=32`
//
// }).then(
//
// (data) => {
//
//   for(let i =0;i<20;i++){
//
//
//     const $nim = $('<img>')
//     .attr('src', data.results[i].image)
//     .addClass('image')
//     .appendTo($('.line1'))
//
//
//
//   }
//
//
//
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=33`
//
// }).then(
//
// (data) => {
//   console.log(data);
// })
//
// $.ajax({
//
// url: `https://rickandmortyapi.com/api/character/?page=34`
//
// }).then(
//
// (data) => {
//   console.log(data);
// })


})
