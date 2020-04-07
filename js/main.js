/*************     search-input    ****************************/
$('.burger').click(function () {
  $('.menu-link').addClass('show');
});

$(document).on('click', function (e) {
  if (!$(e.target).closest(".burger").length) {
    $('.menu-link').removeClass('show');
  }
  e.stopPropagation();
});