$(document).ready(function (){
  console.log('hi')

  $('.home').click(function() {
    console.log('home clicked')
    $('.landingPage').addClass('visible').removeClass('notShown');
    $('products').addClass('notShown').removeClass('visible');
  })

  $('.fireWorksButton').click(function() {
    console.log('fireworks clicked')
    // SPA FUNCTIONALITY
    $('.landingPage').addClass('notShown').removeClass('visible')
    $('.products').addClass('visible').removeClass('notShown')
    $('.fireworks').addClass('visible').removeClass('notshown')
    $('.demolition').addClass('notShown').removeClass('visible')

  })


  $('.demolitionButton').click( function() {
    console.log('demolition clicked')
    // SPA FUNCTIONALITY
    $('.landingPage').addClass('notShown').removeClass('visible')
    $('.products').addClass('visible').removeClass('notShown')
    $('.demolition').addClass('visible').removeClass('notshown')
    $('.fireworks').addClass('notShown').removeClass('visible')


  })

}) //ending of the jQuery block
