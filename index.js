const pro1 = document.querySelector('.pro1')
const pro2 = document.querySelector('.pro2')
const pro3 = document.querySelector('.pro3')
const div2 = document.querySelector('.div2')
const div3 = document.querySelector('.div3')
const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const input3 = document.querySelector('.input3')


pro1.addEventListener('click',()=>{
    pro1.style.backgroundColor='chartreuse'
    div3.innerText='60%'
    div2.style.width='330px'
    input1.style.color='brown'
    
})

pro2.addEventListener('click',()=>{
    pro2.style.backgroundColor='chartreuse'
    div2.style.width='360px'
    div3.innerText=''
    div3.innerText='80%'
    input2.style.color='brown'
    
})

pro3.addEventListener('click',()=>{
    pro3.style.backgroundColor='chartreuse'
    div2.style.width='390px'
    div3.innerText=''
    div3.innerText='100%'
    input3.style.color='brown'
})

