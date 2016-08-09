$(document).ready(function (){

// This function does one thing, and returns a promise

var categories;
var types;
var products;

$( document ).ready(function() {
  console.log('stuff is coming')
  Promise.all([
  $.getJSON('categories.json'),
  $.getJSON('types.json'),
  $.getJSON('products.json')
  ])
  .then(function(info) {
    categories =info[0].categories
    type = info[1].types
    products = info[2].products[0]
  })
  .then( function(info) {
    console.log('making buttons')
    var choices =`<ul class="choices">
    <li><a class="${categories[0].name}" href="#">${categories[0].name}</a></li>
    <li><a class="${categories[1].name}" href="#">${categories[1].name}</a></li>
    </ul>`
    $('.placeForCategories').html(choices);
  }).then(xhrButtons)
});


var xhrButtons = function () {
  $('.Fireworks').click( function pickedFireworks() {
    console.log('fireworks picked')
    $('.landingPage').addClass('notShown').removeClass('visible')
    $('.products').addClass('visible').removeClass('notShown')
    $('.fireworks').addClass('visible').removeClass('notshown')
    $('.demolition').addClass('notShown').removeClass('visible')
    $('.products').addClass('visible').removeClass('notShown');

  })//.then(showFireworks)

  $('.Demolition').click(function pickedDemolition() {
    console.log('demolition clicked')
    // SPA FUNCTIONALITY
    $('.landingPage').addClass('notShown').removeClass('visible')
    $('.products').addClass('visible').removeClass('notShown')
    $('.demolition').addClass('visible').removeClass('notshown')
    $('.fireworks').addClass('notShown').removeClass('visible')
    $('.products').addClass('visible').removeClass('notShown');


 })//.then(showDemolition)

}

$('.home').click(function() {
    console.log('home clicked')
    $('.landingPage').addClass('visible').removeClass('notShown');
    $('.products').addClass('notShown').removeClass('visible');
    $().addClass('notShown')
  })
});
//ending of the jQuery block
