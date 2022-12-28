/* nav, menu */

    const menuButton = document.querySelector('.nav-menu__button');
    const menu = document.querySelector('.nav-menu');
    const menuList = document.querySelector('.nav-menu__list');
    const lock = document.querySelector('html');

        menuButton.addEventListener('click', function(){
            menuButton.classList.toggle('is-active')
            menu.classList.toggle('is-active')

            if (menu.classList.contains('is-active')){
                menuButton.classList.add('color')
                menuList.classList.add('is-active')
                lock.classList.add('locked')
            }

            else {
                menuButton.classList.remove('color')
                menuList.classList.remove('is-active')
                lock.classList.remove('locked')
            }

        });


/* nav, menu */
