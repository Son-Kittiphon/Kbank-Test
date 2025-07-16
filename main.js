$(document).ready(function () {
  // function swiper
  function initSliders() {
    $('.signup-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 4000,
      arrows: false,
      customPaging: function (slider, i) {
        return '<button class="custom-dot"></button>';
      },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.goals-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 4000,
      arrows: false,
      customPaging: function (slider, i) {
        return '<button class="custom-dot"></button>';
      },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.card-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 4000,
      arrows: false,
      customPaging: function (slider, i) {
        return '<button class="custom-dot"></button>';
      },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  initSliders();

  // function toggle btn
  $('.toggle-btn').on('click', function () {
    const targetContent = $(this).data('content');
    $('.toggle-btn').removeClass('active');
    $(this).addClass('active');
    $('.content-section').removeClass('active');
    $('#' + targetContent + '-content').addClass('active');

    setTimeout(function () {
      $('.slick-slider').slick('refresh');
    }, 100);
  });

  // function accordion
  $('.accordion-button').on('click', function () {
    const $icon = $(this).find('.toggle-icon');
    setTimeout(() => {
      if ($(this).hasClass('collapsed')) {
        $icon.text('+');
      } else {
        $icon.text('-');
      }
    }, 150);
  });

  // function scroll to section
  const $menuLinks = $(".sticky_section ul li a");
  const sectionIds = $menuLinks.map(function () {
    return $(this).attr("href");
  }).get();

  // function when click
  $menuLinks.click(function (e) {
    e.preventDefault();
    const sectionId = $(this).attr("href");
    const sectionOffsetTop = $(sectionId).offset().top - 50;

    $(window).scrollTop(sectionOffsetTop);

    updateActiveLink(sectionId);
  });

  // function when scroll
  $(window).on("scroll", function () {
    let scrollPosition = $(window).scrollTop();

    for (let i = 0; i < sectionIds.length; i++) {
      const id = sectionIds[i];
      const offsetTop = $(id).offset().top - 100;
      const offsetBottom = offsetTop + $(id).outerHeight();

      if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
        updateActiveLink(id);
        break;
      }
    }
  });

  // function change active class
  function updateActiveLink(activeId) {
    $(".sticky_section ul li").removeClass("active");
    $menuLinks.each(function () {
      if ($(this).attr("href") === activeId) {
        $(this).parent().addClass("active");
      }
    });
  }

  // function sticky
  const $stickySection = $(".sticky_section");
  const stickyTop = $stickySection.offset().top;

  $(window).on("scroll", function () {
    const scrollTop = $(window).scrollTop();

    if (scrollTop >= stickyTop) {
      $stickySection.addClass("sticky-fixed shadow");
    } else {
      $stickySection.removeClass("sticky-fixed shadow");
    }
  });

  // function match height
  $(".card_swiper").matchHeight();
  $(".wrapper_text").matchHeight();
});