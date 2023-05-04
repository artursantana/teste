            // MENU - HEADER //
            
            //funções para botao responsivo

            const menuResponsive = () => {

                const menuMbi = document.querySelectorAll('.menu-mobile')
                const menuHid = document.querySelector('.menu-hidden')
                
                const Mobile = () => {
                    menuMbi[0].addEventListener('click', () => {
                        menuHid.classList.toggle('active')
                        
                    })
                    menuMbi[1].addEventListener('click', () => {
                        menuHid.classList.toggle('active')
                       
                    })
                }
                Mobile()
                }
                menuResponsive()
                
                 // MENU - HEADER //



const cookies = () => {

    

}
cookies()





                            
                
                
                 
//função para scroll , em header


function menuScroll(){

    const header = document.querySelector('#change')

    window.addEventListener('scroll',() => {
        if(scrollY > 0 && header.classList.contains('header-scroll-max')){
            header.classList.remove('header-scroll-max')
            header.classList.add('header-scroll-min')
        }
        else if(scrollY < 2 && header.classList.contains('header-scroll-min')){
            header.classList.remove('header-scroll-min')
            header.classList.add('header-scroll-max')
        }

        header.addEventListener('click', () => {
            
        })
    } )

}
    menuScroll()

//função para scroll, em header




/*TELA DE CARREGAMENTO DOS INTENS GERAIS*/

function load(){

/*tela de loading*/
    setInterval(() => {
        document.getElementById('loading-centralize').style.display = 'none'
    }, 1000);
/*tela de loading*/

    /*COOKIES*/
    
    setTimeout(() => {
       

        let addcookies = document.querySelector('#cookies')
        let LStorage = localStorage.getItem('Cookies') 
        if(!LStorage){

        let divBig = document.createElement('div')
        let divSmall = document.createElement('div')
        let h1 = document.createElement('h1')
        let p = document.createElement('p')
        let buttonOn = document.createElement('button')
        let buttonOff = document.createElement('button')
    
        divBig.classList.add('styleCookiesDivBig')
        divSmall.classList.add('styleCookiesDivSmall')

        h1.innerHTML = 'Cookies'
    
        p.innerHTML = 'Os seus dados pessoais serão processados e as informações do seu dispositivo (cookies, identificadores únicos e outros dados do dispositivo) podem ser armazenadas, acedidas e partilhadas com fornecedores externos ou utilizadas especificamente por este site ou app.'
        buttonOn.innerHTML = 'Aceitar'
        buttonOff.innerHTML = 'Rejeitar'

        divSmall.appendChild(h1)
        divSmall.appendChild(p)
        divSmall.appendChild(buttonOn)
        divSmall.appendChild(buttonOff)
        divBig.appendChild(divSmall)
        addcookies.appendChild(divBig)


        buttonOn.addEventListener('click', () => {
            divBig.style.display = 'none'
            localStorage.setItem('Cookies', '321')  

        })
        buttonOff.addEventListener('click',() => {
            divBig.style.display = 'none'            
        })
    }
        
    }, 2000);

/*COOKIES*/

}
load()



/*TELADE CARREGAMENTO DOS INTENS GERAIS*/