
 var Acme = (function(acmeStore){
  $(document).ready(function (){


  var personalFireworks =" ";
  var professionalFireworks = " ";
  var noveltyFireworks = " ";


acmeStore.showFireworks = function(products) {
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

acmeStore.showDemolition = function(products) {
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

})
  return acmeStore
})(Acme || {})
