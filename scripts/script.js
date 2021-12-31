// NAVEGAÇÃO

const menuItems = document.querySelectorAll('.menu a[href^="#"]');

menuItems.forEach(item=>{
    item.addEventListener('click',scrollToSection);
})



function getScrollTop(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToSection (event){
    event.preventDefault();
    const top = getScrollTop(event.target) - 70;
    ScrollToSectionSelected(top);
}

function ScrollToSectionSelected(x){
    window.scroll({
        top: x,
        behavior:"smooth",
    });
}

