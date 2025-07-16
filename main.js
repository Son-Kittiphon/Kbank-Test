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
            slidesToShow: 1.5,
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
            slidesToShow: 1.5,
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


  // function navbar on mobile
  $(document).ready(function () {
    const $window = $(window);
    const $navbar = $("nav");
    const $logo = $(".kbank_logo");
    const $searchIcon = $(".search-mobile");
    const $mobileIcon = $(".mobile-icon");
    const $hamburgerIcon = $(".hamburger-mobile");

    const originalLogo = "Assets/kbank_logo.svg";
    const scrolledLogo = "Assets/kbank_logo_scrolled.svg";
    const searchOriginal = "Assets/search-mobile.svg";
    const searchSrolled = "Assets/icon-search-scrolled.svg";
    const mobileOriginal = "Assets/mobile-icon2.svg";
    const mobileScrolled = "Assets/icon-mobile-2-scrolled.svg";
    const hamburgerOriginal = "Assets/hamburger.svg";
    const hamburgerScrolled = "Assets/hamburger-scrolled.svg"

    function handleScroll() {
      if ($window.width() <= 576) {
        if ($window.scrollTop() > 0) {
          $navbar.addClass("navbar-scrolled");
          $logo.attr("src", scrolledLogo);
          $searchIcon.attr("src", searchSrolled);
          $mobileIcon.attr("src", mobileScrolled);
          $hamburgerIcon.attr("src", hamburgerScrolled);
        } else {
          $navbar.removeClass("navbar-scrolled");
          $logo.attr("src", originalLogo);
          $searchIcon.attr("src", searchOriginal);
          $mobileIcon.attr("src", mobileOriginal);
          $hamburgerIcon.attr("src", hamburgerOriginal);
        }
      } else {
        $navbar.removeClass("navbar-scrolled");
        $logo.attr("src", originalLogo);
        $searchIcon.attr("src", searchOriginal);
        $mobileIcon.attr("src", mobileOriginal);
        $hamburgerIcon.attr("src", hamburgerOriginal);
      }
    }

    $window.on("scroll", handleScroll);

    $window.on("resize", handleScroll);

    handleScroll();
  });

  // function bottom bar
  $(document).ready(function () {
    // ปิด popup ทุกตัวก่อน
    function closePopups() {
      $(".popup").removeClass("active");
    }

    // เปิด popup menu
    $(".btn-menu").on("click", function () {
      closePopups();
      $(".popup-menu").addClass("active");
    });

    // เปิด popup LINE
    $(".btn-line").on("click", function () {
      closePopups();
      $(".popup-line").addClass("active");
    });

    // ปุ่มปิด popup
    $(".popup-close").on("click", function () {
      closePopups();
    });
  });

  let isMenuOpen = false;

  $('#closeBtn').click(function () {
    if (!isMenuOpen) {
      // เปิดเมนู
      $('#popupMenu').addClass('show');
      $('#overlay').addClass('show');
      isMenuOpen = true;
    } else {
      // ปิดเมนู
      $('#popupMenu').removeClass('show');
      $('#overlay').removeClass('show');
      isMenuOpen = false;
    }
  });

  // ปิดเมนูเมื่อกดที่ overlay
  $('#overlay').click(function () {
    $('#popupMenu').removeClass('show');
    $('#overlay').removeClass('show');
    isMenuOpen = false;
  });

  // จัดการเมื่อกดที่ notification item
  $('.notification-item').click(function () {
    const action = $(this).data('action');

    // ปิดเมนูก่อน
    $('#popupMenu').removeClass('show');
    $('#overlay').removeClass('show');
    isMenuOpen = false;

    // เพิ่ม effect เมื่อกด
    $(this).css('transform', 'scale(0.95)');
    setTimeout(() => {
      $(this).css('transform', '');
    }, 150);

    // จัดการ action ตาม data-action
    if (action === 'line') {
      alert('เปิด LINE Chat');
      // window.open('https://line.me/...', '_blank');
    } else if (action === 'phone') {
      alert('เริ่มการโทร');
      // window.location.href = 'tel:+66xxxxxxxxx';
    }
  });

});