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
    console.log(products)
  })
  .then( function(info) {
    console.log('making buttons')
    var choices =`<ul class="choices">
    <li><a class="${categories[0].name}" href="#">${categories[0].name}</a></li>
    <li><a class="${categories[1].name}" href="#">${categories[1].name}</a></li>
    </ul>`
    $('.placeForCategories').html(choices);
  }).then(xhrButtons)

    // .then(showDemolition)
});


var xhrButtons = function () {
  $('.Fireworks').click( function pickedFireworks() {
    console.log('fireworks picked')
    $('.landingPage').addClass('notShown').removeClass('visible')
    $('.products').addClass('visible').removeClass('notShown')
    $('.fireworks').addClass('visible').removeClass('notshown')
    $('.demolition').addClass('notShown').removeClass('visible')
    $('.products').addClass('visible').removeClass('notShown')
    showFireworks(products)

  })

  $('.Demolition').click(function pickedDemolition() {
    console.log('demolition clicked')
    // SPA FUNCTIONALITY
    $('.landingPage').addClass('notShown').removeClass('visible')
    $('.products').addClass('visible').removeClass('notShown')
    $('.demolition').addClass('visible').removeClass('notshown')
    $('.fireworks').addClass('notShown').removeClass('visible')
    $('.products').addClass('visible').removeClass('notShown')
    showDemolition(products)

 })

}

$('.home').click(function() {
    console.log('home clicked')
    $('.landingPage').addClass('visible').removeClass('notShown');
    $('.products').addClass('notShown').removeClass('visible');
    $().addClass('notShown')
  })


/////////IDEALLY WILL GO IN A DIFFERENT JS FILE

  var personalFireworks =" ";
  var professionalFireworks = " ";
  var noveltyFireworks = " ";


var showFireworks = function(products) {
  console.log('showFireworks starting', products)
  for(key in products){
    if (products[key].type === 0) {
    console.log('working?',products[key].name)
    personalFireworks +='<div class="productCard col-sm-4">';
    personalFireworks += '<h3>' + products[key].name+ '</h3>'
    personalFireworks +='<p>' + products[key].description+ '</p></div>'
  } else if (products[key].type === 1) {
    professionalFireworks +='<div class="productCard col-sm-4">';
    professionalFireworks += '<h3>' + products[key].name+ '</h3>'
    professionalFireworks +='<p>' + products[key].description+ '</p></div>'
  } else if (products[key].type === 2) {
    noveltyFireworks +='<div class="productCard col-sm-4">';
    noveltyFireworks += '<h3>' + products[key].name+ '</h3>'
    noveltyFireworks +='<p>' + products[key].description+ '</p></div>'
  }
  }
  console.log(personalFireworks)
  $('.forPersonal').html(personalFireworks)
  $('.forProfessional').html(professionalFireworks)
  $('.forNovelty').html(noveltyFireworks)
}



  var dynamite = '';
  var implossion = '';
  var explosion = '';

var showDemolition = function(products) {
  console.log('showDemolition starting', products)
  for(key in products){
    if (products[key].type === 3) {
    console.log('working?',products[key].name)
    dynamite +='<div class="productCard col-sm-4">';
    dynamite += '<h3>' + products[key].name+ '</h3>'
    dynamite +='<p>' + products[key].description+ '</p></div>'
  } else if (products[key].type === 4) {
    implossion +='<div class="productCard col-sm-4">';
    implossion += '<h3>' + products[key].name+ '</h3>'
    implossion +='<p>' + products[key].description+ '</p></div>'
  } else if (products[key].type === 5) {
    explosion +='<div class="productCard col-sm-4">';
    explosion += '<h3>' + products[key].name+ '</h3>'
    explosion +='<p>' + products[key].description+ '</p></div>'
  }
  }
  console.log(dynamite)
  $('.forDynamite').html(dynamite)
  $('.forImplossion').html(implossion)
  $('.forExplosion').html(explosion)

}



});
//ending of the jQuery block
