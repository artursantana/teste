









            //CAROUSEL - SECTION , pagina inicial

// photos & scroll
const controlArrow = () => {

const controls = document.querySelectorAll('#control')
let index = 0
let img = document.querySelectorAll('.photo')


controls.forEach(control => {
    control.addEventListener('click',() => {
        let direction = control.classList.contains('left')
        //control of arrow
        direction ? index -= 1 : index += 1

        index < 1 ? controls[0].style.display = 'none' : controls[0].style.display = 'block'
        
        index > 7 ? controls[1].style.display = 'none' : controls[1].style.display = 'block'

        img[index].scrollIntoView({
            inline: 'center',
            behavior:'smooth',
            block:'end'
        })
    })
})
}
controlArrow()
 //CAROUSEL - SECTION , pagina inicial



   /*ANIMAÇÕES DE OBJETOS*/


    const animeScroll = () => {
        const quadros = document.querySelectorAll('.quadros')

       window.addEventListener('scroll', () => {

      const scrollAnime = window.pageYOffset
      if(scrollAnime > 150){
        quadros[0].classList.add('animeQuadros')
        quadros[1].classList.add('animeQuadros')
        quadros[2].classList.add('animeQuadros')
        
      }else{
        quadros[0].classList.remove('animeQuadros')
        quadros[1].classList.remove('animeQuadros')
        quadros[2].classList.remove('animeQuadros')
      }


       }

    )}
    
    animeScroll()

/*ANIMAÇÕES DE OBJETOS*/







