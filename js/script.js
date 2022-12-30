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

        const nav = document.querySelector('.nav');
        const logo = document.querySelector('.nav-logo');

        const onScroll = () => {
        
          const scroll = document.documentElement.scrollTop
        
          if (scroll > 0) {
            nav.classList.add("scrolled");
            logo.classList.add("colored");


          } else {
            nav.classList.remove("scrolled");
            logo.classList.remove("colored");
          }

          if (nav.classList.contains("scrolled")){
            menuButton.addEventListener('click', function(){
                nav.classList.toggle("changed")
            })
        }
        }
        
        window.addEventListener('scroll', onScroll);


        let links = document.querySelectorAll('body a[href*="#"]');

        for (link of links){

            if(link){

                
            if (menuButton.classList.contains('is-active')){
                menu.classList.remove('is-active')
                menuList.classList.remove('is-active')
                nav.classList.remove("scrolled")
            }
            
                link.addEventListener('click', function(e){
                    e.preventDefault();
                    linkId = this.getAttribute('href');
                    console.log(linkId)

                    document.querySelector(linkId).scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                });
            }

        }


/* nav, menu */
