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
      navToggleActiveClass = "active",
      viewport = document.body.clientWidth;

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
          postLeftActiveAtr = postLeftActive.getAttribute('data-social'),
          postLeftAll = document.querySelectorAll('.social-section__posts-left'),
          postRightAll = document.querySelectorAll('.social-section__posts-right'),
          previousBtn = document.querySelector('.social-section__menu-button.current');
          // console.log(postLeftActiveAtr);

          postRightActive.classList.add('hide');
          postLeftActive.classList.add('hide');
          for(let i=0; i < postLeftAll.length; i++){
            let currentPostLeft = postLeftAll[i],
                currentPostLeftAtr = currentPostLeft.getAttribute('data-social');
            // currentPostLeft.classList.remove('hide');
            if(currentAtr == currentPostLeftAtr){
							var nextPostLeft = currentPostLeft;
            }
          }

          for(let i=0; i < postRightAll.length; i++){
            let currentPostRight = postRightAll[i],
                currentPostRightAtr = currentPostRight.getAttribute('data-social');
            // currentPostRight.classList.remove('hide');
            if(currentAtr == currentPostRightAtr){
							var nextPostRight = currentPostRight;
            }
          }
          previousBtn.classList.remove('current');
          current.classList.add('current');
          setTimeout(function(){
            postRightActive.classList.remove('active');
            postLeftActive.classList.remove('active');
            nextPostLeft.classList.add('active');
            nextPostRight.classList.add('active');
          }, 200
          );

          setTimeout(function(){
            for(let i=0; i < postLeftAll.length; i++){
              let currentPostLeft = postLeftAll[i];
              currentPostLeft.classList.remove('hide');
            }

            for(let i=0; i < postRightAll.length; i++){
              let currentPostRight = postRightAll[i];

              currentPostRight.classList.remove('hide');

            }
          }, 400
          );

    };
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
