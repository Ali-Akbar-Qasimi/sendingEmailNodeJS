const contactForm = document.querySelector('.form-content')
let name = document.querySelector('#name')
let email = document.querySelector('#email')
let subject = document.querySelector('#subject')
let massage = document.querySelector('#massage')


contactForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        massage: massage.value,
    }

    let xhr = new XMLHttpRequest()

    xhr.open('POST','/')
    xhr.setRequestHeader('content-type','application/json')
    xhr.onload = function(){
        console.log(xhr.responseText)
        if(xhr.responseText == 'seccess'){
            alert('Email sent')
            name.value = ''
            email.value = ''
            subject.value = ''
            massage.value = ''
        }else{
            alert('something went wrong')
        }
    }
    xhr.send(JSON.stringify(formData))
})