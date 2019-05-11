(function() {
  let menuBtn = document.querySelector(".button__menu"),
    mainNav = document.querySelector(".menu__list--nav"),
    hamburger = document.querySelector(".hamburger"),
    widthHeaderMenu = mainNav.clientWidth;

  mainNav.style.right = -(widthHeaderMenu + 130) + "px";

  menuBtn.onclick = function() {
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
    let nav = document.querySelector(".header__nav-list"),
      height = document.querySelector("header").offsetHeight,
      navToggle = document.querySelector(".button__menu"),
      navToggleActiveClass = "active";

    if (window.pageYOffset >= height) {
      toggleAppearance("SHOW", navToggle, navToggleActiveClass);
      toggleAppearance("SHOW", mainNav, navToggleActiveClass);
    } else {
      toggleAppearance("HIDE", navToggle, navToggleActiveClass);
      toggleAppearance("HIDE", navToggle, "is-open");
      toggleAppearance("HIDE", mainNav, navToggleActiveClass);
      toggleAppearance("HIDE", mainNav, "is-open");
      toggleAppearance("HIDE", hamburger, "is-open");
    }
  });

  //flipping social blocks
  var socialBtn = document.querySelectorAll('.social-section__menu-button'),
      socialPosts = document.querySelector('.social-section__posts'),
      socialPostsHeight = document.querySelector('.social-section__posts-right-wrapper').clientHeight;

  socialPosts.style.height = socialPostsHeight + 'px';

  for(let i=0; i < socialBtn.length; i++){
    let currentBtn = socialBtn[i];
    currentBtn.onclick = function() {
      let current = this,
          currentAtr = current.getAttribute('data-social'),
          postLeftActive = document.querySelector('.social-section__posts-left.active'),
          postRightActive = document.querySelector('.social-section__posts-right.active'),
          postLeftAll = document.querySelectorAll('.social-section__posts-left'),
          postRightAll = document.querySelectorAll('.social-section__posts-right'),
          previousBtn = document.querySelector('.social-section__menu-button.current');

          toggleAppearance("SHOW", postRightActive, 'hide');
          toggleAppearance("SHOW", postLeftActive, 'hide');

          for(let i=0; i < postLeftAll.length; i++){
            let currentPostLeft = postLeftAll[i],
                currentPostLeftAtr = currentPostLeft.getAttribute('data-social');

            if(currentAtr == currentPostLeftAtr){
							var nextPostLeft = currentPostLeft;
            }
          }

          for(let i=0; i < postRightAll.length; i++){
            let currentPostRight = postRightAll[i],
                currentPostRightAtr = currentPostRight.getAttribute('data-social');

            if(currentAtr == currentPostRightAtr){
							var nextPostRight = currentPostRight;
            }
          }

          toggleAppearance("HIDE", previousBtn, 'current');
          toggleAppearance("SHOW", current, 'current');
          setTimeout(function(){
            toggleAppearance("HIDE", postRightActive, 'active');
            toggleAppearance("HIDE", postLeftActive, 'active');
            toggleAppearance("SHOW", nextPostLeft, 'active');
            toggleAppearance("SHOW", nextPostRight, 'active');
            }, 200
          );

          setTimeout(function(){
            for(let i=0; i < postLeftAll.length; i++){
              let currentPostLeft = postLeftAll[i];
              toggleAppearance("HIDE", currentPostLeft, 'hide');
            }

            for(let i=0; i < postRightAll.length; i++){
              let currentPostRight = postRightAll[i];
              toggleAppearance("HIDE", currentPostRight, 'hide');
            }
            }, 400
          );
    };
  }

  //flipping news
  var newsBtn = document.querySelectorAll('.news__title');

  for(let i=0; i < newsBtn.length; i++){
    let currentBtn = newsBtn[i];
    currentBtn.onclick = function() {
      let current = this,
        currentContent = current.nextElementSibling,
        previousContent = document.querySelector('.news__content-wrapper.is-open');

        toggleAppearance("SHOW", currentContent, 'is-open');
        // setTimeout(function(){
          toggleAppearance("HIDE", previousContent, 'is-open');
        // }, 300
        // );
    }
  }
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
