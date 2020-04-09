/*************     menu-link    ****************************/
$('.burger').click(function () {
  $('.menu-overlay').addClass('show').css("transition-delay", "0s");
  $('.menu-link').addClass('show');
});

$('.close').click(function () {
  $('.menu-overlay').removeClass('show').css("transition-delay", ".5s");
  $('.menu-link').removeClass('show');
});

$('.menu-link a').click(function () {
  $('.menu-overlay').removeClass('show').css("transition-delay", ".5s");
  $('.menu-link').removeClass('show');
});

/*************    odometer    *******************/
setTimeout(function () {
  $('.odometer.01').html(23578);
}, 1000);
setTimeout(function () {
  $('.odometer.02').html(12702);
}, 1000);

/*********************  плавный скролл    ***************/
$(document).ready(function () {
  $('a[href^="#"]').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    if ($.browser) {
      $('body').animate({
        scrollTop: destination
      }, 1000);
    } else {
      $('html').animate({
        scrollTop: destination
      }, 1000);
    }
    return false;
  });
});

/*************    portfolio modal      ************/
$('[data-modal]').click(function () {
  event.preventDefault();

  let $this = $(this);
  let modalId = $this.data('modal');

  $(modalId).addClass('show');
  $('body').addClass('no-scroll');
});

$('.close').click(function () {
  event.preventDefault();

  let $this = $(this);
  let modalParent = $this.parents('.portfolio-modal');

  modalParent.removeClass('show');
  $('body').removeClass('no-scroll');
});

$(document).on('click', function (e) {
  if (!$(e.target).closest(".block img").length) {
    $('.portfolio-modal').removeClass('show');
    $('body').removeClass('no-scroll');
  }
  e.stopPropagation();
});

/***************    WOW     ***************/
wow = new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 0 // default
})
wow.init();

