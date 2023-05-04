

const Check = () => {

        let input = document.querySelectorAll('.field')
        let name = document.getElementById('name')
        let email = document.getElementById('email')
        let textmsg = document.querySelectorAll('#msgtext')
    function namevalid() {

        
        if(name.value.length <= 4){
            textmsg[0].style.display = 'none'
            textmsg[0].style.color = 'red'
            name.style.color = 'red'
            
        }else{
            textmsg[0].style.display = 'block'
            textmsg[0].style.color = 'green'
            name.style.color = 'black'
        }
        
       
        
    }namevalid()


    function EmailValid(){
        if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input[1].value)){
            email.style.color = 'red'
            textmsg[1].style.display = 'none'
        }
        else{
            email.style.color = 'black'
            textmsg[1].style.display = 'block'
        }
        

    }EmailValid()

}
    Check()
