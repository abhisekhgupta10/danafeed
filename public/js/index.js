const nav = document.querySelector("ul");
const button =document.querySelector(".absolute");
const btn =document.querySelector('.print')
const pr = document.querySelector('.img-container')
button.addEventListener('click',()=>{
    if(nav.style.display=="none"){
        nav.style.display="block";
        button.textContent="😊"
    }else{
        nav.style.display="none"
        button.textContent="😂"
    }
    
})
btn.addEventListener('click',()=>{
    window.print()
})

