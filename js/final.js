/*==========================NAV-BAR-START==================================== */
function myFunction() {
  var x = document.getElementById("myTopnav");
  x.classList.toggle("responsive");
}
/*==========================NAV-BAR-END==================================== */

/*==========================SLIDER-START==================================== */
$(".slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});
$(document).ready(function () {
  $(".testimonials-slider").owlCarousel({
    infinite: true,
    loop: true,
    items: 3,
    dots: true,
    margin: 10,
    responsive: {
      0: { items: 1 },
      1200: {
        items: 3,
      },
    },
  });
});

/*==========================SLIDER-END==================================== */
/*==========================PRICING-SLIDER-START==================================== */

$(".pricing-slider").slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      },
    },
  ],
});

/*==========================PRICING-SLIDER-END==================================== */

/*==========================FORM-START==================================== */
var inputs = document.getElementsByClassName("input");
function SendMessage(e) {
  e.preventDefault();
  let isSubmited = true;
  for (let input of inputs) {
    if (!input.value.trim()) {
      input.nextElementSibling.classList.remove("d-none");
      isSubmited = false;
    }
  }
  if (!isSubmited) {
    return;
  }
  toastr.success("Mesajınız müvəffəqiyyətlə göndərildi!!");
  for (let input of inputs) {
    input.value = "";
  }
}
for (let input of inputs) {
  input.onkeyup = function () {
    if (!input.value) {
      input.nextElementSibling.classList.remove("d-none");
    } else {
      input.nextElementSibling.classList.add("d-none");
    }
  };
}
/*==========================FORM-END==================================== */
