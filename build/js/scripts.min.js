(function () {
  (function () {
    //emergence of an hamburger

    window.addEventListener('scroll', () => {
        let nav = document.querySelector('.header__nav-list'),
            height = document.querySelector('.header__main-nav').offsetHeight,
            navToggle = document.querySelector('.main-nav__toggle'),
            mainNav = document.querySelector('.main__nav-list'),
            shadowClassName = 'shadow',
            shadowActiveClassName = 'active',
            navToggleActiveClass = 'active',
            viewport = document.body.clientWidth;


        if (viewport < 1023) {
            if (window.pageYOffset >= height) {
                burgerToggleAppearance('SHOW', navToggle, navToggleActiveClass)

            } else {
                burgerToggleAppearance('HIDE', navToggle, navToggleActiveClass)
                mainNav.classList.remove('active')
                nav.classList.remove(shadowActiveClassName)
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
