$(".multiple-items").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: "50px"
});
document.addEventListener('keyup',function(e){
    if(e.keyCode == 27)
    window.location.reload();
});
function backTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function on() {
  document.getElementById("overlay1").style.display = "block";
}

function off() {
  document.getElementById("overlay1").style.display = "none";
}

function login() {
  document.getElementById("overlay1").style.display = "none";
  document.getElementById("overlay2").style.display = "block";
}

function register() {
  document.getElementById("overlay2").style.display = "none";
  document.getElementById("overlay1").style.display = "block";
}
document.getElementById("overlay2").addEventListener("click", function() {
  document.getElementById("overlay2").style.display = "none";
});
document.getElementById("offerPage").addEventListener("click", function() {
  $("#slickContainer").hide();
  $("#BannerContainer").hide();
  $("#flexContainer").hide();
  $("#PizzaContainer").hide();
  $("#OfferContainer").fadeIn(2000);
});
//kfc chicken
document.getElementById("kfcLink1").addEventListener("click", function() {
  $("#slickContainer").hide();
  $("#BannerContainer").hide();
  $("#flexContainer").hide();
  $("#PizzaContainer").hide();
  $("#KfcProduct1").fadeIn(2000);
});
document.getElementById("kfcLink2").addEventListener("click", function() {
  $("#slickContainer").hide();
  $("#BannerContainer").hide();
  $("#flexContainer").hide();
  $("#PizzaContainer").hide();
  $("#KfcProduct1").fadeIn(2000);
});
//pizza
document.getElementById("pizzaLink1").addEventListener("click", function() {
  $("#slickContainer").hide();
  $("#BannerContainer").hide();
  $("#flexContainer").hide();
  $("#PizzaContainer").hide();
  $("#pizzaProduct").fadeIn(2000);
});
document.getElementById("pizzaLink2").addEventListener("click", function() {
  $("#slickContainer").hide();
  $("#BannerContainer").hide();
  $("#flexContainer").hide();
  $("#PizzaContainer").hide();
  $("#pizzaProduct").fadeIn(2000);
});