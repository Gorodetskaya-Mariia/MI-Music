(function () {
  let menuBtn = document.querySelector('.button__menu'),
      mainNav = document.querySelector('.menu__list--nav'),
      hamburger = document.querySelector('.hamburger'),
      widthHeaderMenu = mainNav.clientWidth;

      mainNav.style.right = -(widthHeaderMenu + 130) + 'px';

  menuBtn.onclick = function () {
    menuBtn.classList.toggle('is-open');
    hamburger.classList.toggle('is-open');
    mainNav.classList.toggle('is-open');
    if(mainNav.classList.contains('is-open')){
      mainNav.style.right = '0';
    } else {
      mainNav.style.right = -(widthHeaderMenu + 130) + 'px';
    }

  }

  // (function () {
    //emergence of an hamburger
    window.addEventListener('scroll', () => {
        let nav = document.querySelector('.header__nav-list'),
            height = document.querySelector('header').offsetHeight,
            navToggle = document.querySelector('.button__menu'),
            navToggleActiveClass = 'active',
            viewport = document.body.clientWidth;


            if (window.pageYOffset >= height) {
                burgerToggleAppearance('SHOW', navToggle, navToggleActiveClass)
                burgerToggleAppearance('SHOW', mainNav, navToggleActiveClass)
                // mainNav.style.right = -(widthHeaderMenu + 30) + 'px';

            } else {
                burgerToggleAppearance('HIDE', navToggle, navToggleActiveClass)
                burgerToggleAppearance('HIDE', navToggle, 'is-open')
                burgerToggleAppearance('HIDE', mainNav, navToggleActiveClass)
                burgerToggleAppearance('HIDE', mainNav, 'is-open')
                burgerToggleAppearance('HIDE', hamburger, 'is-open')
            }
    })
  // })();
})();

function burgerToggleAppearance(state, nav, activeClass) {

  switch (state) {
      case 'SHOW':
          nav.classList.add(activeClass)
          break
      case 'HIDE':
          nav.classList.remove(activeClass)
          break
      default:
          throw new Error(`${state} is not valid`)
  }
}
