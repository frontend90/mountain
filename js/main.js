/*************     menu-link    ****************************/
$('.burger').click(function () {
  $('.menu-overlay').addClass('show').css("transition-delay", "0s");
  $('.menu-link').addClass('show');
});

$('.close').click(function () {
  $('.menu-overlay').removeClass('show').css("transition-delay", ".5s");
  $('.menu-link').removeClass('show');
});