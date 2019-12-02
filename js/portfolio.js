const navSlide = () =>{
    const menuButton  = document.querySelector('.menu-button');
    const dropdown  = document.querySelector('.nav-holder');
    
    menuButton.addEventListener('click',()=>{
        dropdown.classList.toggle('nav-clicked');

    });

}



navSlide();
