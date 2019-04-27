(function () {
  document.querySelector('.button__menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.hamburger').classList.toggle('is-open');
    document.querySelector('.menu__list--nav').toggleClass('is-open');
  })

  (function () {
    //emergence of an hamburger

    window.addEventListener('scroll', () => {
        let nav = document.querySelector('.header__nav-list'),
            height = document.querySelector('header').offsetHeight,
            navToggle = document.querySelector('.button__menu'),
            mainNav = document.querySelector('.main__nav-list'),
            shadowActiveClassName = 'active',
            navToggleActiveClass = 'active',
            viewport = document.body.clientWidth;


        if (viewport < 1279) {
            if (window.pageYOffset >= height) {
                burgerToggleAppearance('SHOW', navToggle, navToggleActiveClass)

            } else {
                burgerToggleAppearance('HIDE', navToggle, navToggleActiveClass)
                mainNav.classList.remove('active')

            }

        }  else {
            if (window.pageYOffset >= height / 2 && window.pageYOffset <= height) {
                nav.classList.add(shadowClassName);
                nav.classList.add("active")
            } else {
                nav.classList.remove(shadowClassName)
                nav.classList.remove("active")
            }

            if (window.pageYOffset >= height) {
                burgerToggleAppearance('SHOW', navToggle, navToggleActiveClass)

            } else {
                burgerToggleAppearance('HIDE', navToggle, navToggleActiveClass)
                mainNav.classList.remove('active')
                nav.classList.remove(shadowActiveClassName)
            }
        }

    })
  })();
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
