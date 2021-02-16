var mySwiper = new Swiper('.news__slider', {
    // Optional parameters
    loop: true,
    lazy: true,
    centeredSlides: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      310: {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
      },
      // when window width is >= 480px
      556: {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20
      },
      776: {
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
  });
  var mySwiper = new Swiper('.partners__slider', {
    // Optional parameters
    loop: true,
    lazy: true,
    slidesPerView: 5,
    spaceBetween: 75,
    freeMode: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      310: {
        slidesPerView: 2,
        spaceBetween: 40,
        centeredSlides: true,
      },
      556: {
        slidesPerView: 4,
        centeredSlides: true,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 75,
      }
    }
  });

let menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => {
  document.querySelector('.header__nav').classList.toggle('mobile-menu-active');
});

let closeMenuBtn = document.querySelector('.opened-menu');
closeMenuBtn.addEventListener('click', () => {
  document.querySelector('.header__nav').classList.toggle('mobile-menu-active');
});

document.querySelectorAll(".menu-list-item a[href^=\"#\"]").forEach((anchor) => {
	anchor.addEventListener("click", function (ev) {
	  ev.preventDefault();
  
	  const targetElement = document.querySelector(this.getAttribute("href"));
	  targetElement.scrollIntoView({
		block: "start",
		alignToTop: true,
		behavior: "smooth"
	  });
	});
});

