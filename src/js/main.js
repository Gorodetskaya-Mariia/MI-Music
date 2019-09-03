(function() {
  let menuBtn = document.querySelector(".button__menu"),
    mainNav = document.querySelector(".menu__list--nav-add"),
    hamburger = document.querySelector(".hamburger"),
    widthHeaderMenu =  document.querySelector(".menu__list--nav").clientWidth;

  mainNav.style.right = -(widthHeaderMenu + 130) + "px";

  menuBtn.onclick = function(e) {
    e.stopPropagation();
    menuBtn.classList.toggle("is-open");
    hamburger.classList.toggle("is-open");
    mainNav.classList.toggle("is-open");
    if (mainNav.classList.contains("is-open")) {
      mainNav.style.right = "0";
      mainNav.style.transition = "0.4s";
    } else {
      mainNav.style.right = -(widthHeaderMenu + 130) + "px";
    }
  };

  //emergence of an hamburger
  window.addEventListener("scroll", () => {
    let height = document.querySelector("header").offsetHeight,
        navToggleActiveClass = "active";

    if (window.pageYOffset >= height) {
      toggleAppearance("SHOW", menuBtn, navToggleActiveClass);
      toggleAppearance("SHOW", mainNav, navToggleActiveClass);
    } else {
      toggleAppearance("HIDE", menuBtn, navToggleActiveClass);
      toggleAppearance("HIDE", menuBtn, "is-open");
      toggleAppearance("HIDE", mainNav, navToggleActiveClass);
      toggleAppearance("HIDE", mainNav, "is-open");
      toggleAppearance("HIDE", hamburger, "is-open");
    }
  });
  
  //click outside menu
  window.addEventListener("click", (event) => {
    if (menuBtn.classList.contains("is-open")&& !event.target.classList.contains("menu__list--nav-add")) {
      toggleAppearance("HIDE", menuBtn, "is-open");
      toggleAppearance("HIDE", mainNav, "is-open");
      toggleAppearance("HIDE", hamburger, "is-open");
      mainNav.style.right = -(widthHeaderMenu + 130) + "px";
    }
  });

  //flipping social blocks
  var socialBtn = document.querySelectorAll(".social-section__menu-button"),
    socialPosts = document.querySelector(".social-section__posts"),
    width = document.body.clientWidth;
    
    socialSettings(width);

  for (let i = 0; i < socialBtn.length; i++) {
    let currentBtn = socialBtn[i];
    currentBtn.onclick = function() {
      let current = this,
        currentAtr = current.getAttribute("data-social"),
        postLeftActive = document.querySelector(
          ".social-section__posts-left.active"
        ),
        postRightActive = document.querySelector(
          ".social-section__posts-right.active"
        ),
        postLeftAll = document.querySelectorAll(".social-section__posts-left"),
        postRightAll = document.querySelectorAll(
          ".social-section__posts-right"
        ),
        previousBtn = document.querySelector(
          ".social-section__menu-button.current"
        );

      if (!current.classList.contains("current")) {
        toggleAppearance("SHOW", postRightActive, "hide");
        toggleAppearance("SHOW", postLeftActive, "hide");

        for (let i = 0; i < postLeftAll.length; i++) {
          let currentPostLeft = postLeftAll[i],
            currentPostLeftAtr = currentPostLeft.getAttribute("data-social");

          if (currentAtr == currentPostLeftAtr) {
            var nextPostLeft = currentPostLeft;
          }
        }

        for (let i = 0; i < postRightAll.length; i++) {
          let currentPostRight = postRightAll[i],
            currentPostRightAtr = currentPostRight.getAttribute("data-social");

          if (currentAtr == currentPostRightAtr) {
            var nextPostRight = currentPostRight;
          }
        }

        toggleAppearance("HIDE", previousBtn, "current");
        toggleAppearance("SHOW", current, "current");
        setTimeout(function() {
          toggleAppearance("HIDE", postRightActive, "active");
          toggleAppearance("HIDE", postLeftActive, "active");
          toggleAppearance("SHOW", nextPostLeft, "active");
          toggleAppearance("SHOW", nextPostRight, "active");
        }, 200);

        setTimeout(function() {
          for (let i = 0; i < postLeftAll.length; i++) {
            let currentPostLeft = postLeftAll[i];
            toggleAppearance("HIDE", currentPostLeft, "hide");
          }

          for (let i = 0; i < postRightAll.length; i++) {
            let currentPostRight = postRightAll[i];
            toggleAppearance("HIDE", currentPostRight, "hide");
          }
        }, 400);
      }
    };
  }

  //flipping news
  let newsBtn = document.querySelectorAll(".news__title");

    for (let i = 0; i < newsBtn.length; i++) {
      let currentBtn = newsBtn[i];
      currentBtn.onclick = function() {
        let current = this,
          currentContent = current.nextElementSibling,
          previousContent = document.querySelector(
            ".news__content-wrapper.is-open"
          ),
            previousTitle = document.querySelector(
                ".news__title.active"
            );

        if (!currentContent.classList.contains("is-open")) {
          toggleAppearance("SHOW", currentContent, "is-open");
          toggleAppearance("SHOW", currentBtn, "active");
          toggleAppearance("HIDE", previousContent, "is-open");
          toggleAppearance("HIDE", previousTitle, "active");
        }
      };
    }

  //validate form
  let inputs = document.querySelectorAll("form .form__input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].onchange = function() {
      toggleAppearance("SHOW", this, "changed");
    };
  }

  document.querySelector("form").onsubmit = function(e) {
    let error = false;

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value === "") {
        inputs[i].classList.add("error");
        error = true;
      } else {
        inputs[i].classList.remove("error");
      }
    }

    if (error) {
      e.preventDefault();
    }
  };
    
    window.addEventListener("resize", () => {
        width = document.body.clientWidth;
        socialSettings(width);
    });
    
    function socialSettings(width) {
        if (width > 768) {
            socialPosts.style.height = "auto";
            socialPosts.style.height = document.querySelector(".social-section__posts-right-wrapper").clientHeight + "px";
        } else {
            socialPosts.style.height = "auto";
            socialPosts.style.height = socialPosts.clientHeight + "px";
        }
    }
})();
//albums animation
(function() {
  document.onscroll = function(e) {
    let albumsSection = document.querySelector(".albums"),
      albumsSectionText = albumsSection.querySelector(".divider"),
      albumsSectionTop = albumsSection.offsetTop,
      albumsSectionTextTop = albumsSectionText.offsetTop,
      elsToAnimate = document.querySelectorAll("span"),
      albumsSecondTop = document.querySelector(".albums__item--second")
        .offsetTop,
      width = document.body.clientWidth;

    if (
      (width > 768 &&
        window.pageYOffset >= albumsSectionTop + albumsSectionTextTop &&
        window.pageYOffset <= albumsSectionTop + albumsSectionTextTop + 800) ||
      (width < 769 &&
        window.pageYOffset >= albumsSectionTop + albumsSecondTop + 250 &&
        window.pageYOffset <= albumsSectionTop + albumsSecondTop + 600)
    ) {
      for (let i = 0; i < elsToAnimate.length; i++) {
        elsToAnimate[i].classList.add("animate");
      }
    } else {
      for (let i = 0; i < elsToAnimate.length; i++) {
        elsToAnimate[i].classList.remove("animate");
      }
    }
  };
})();

function toggleAppearance(state, nav, activeClass) {
  switch (state) {
    case "SHOW":
      nav.classList.add(activeClass);
      break;
    case "HIDE":
      nav.classList.remove(activeClass);
      break;
    default:
      throw new Error(`${state} is not valid`);
  }
}
