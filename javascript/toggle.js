function toggleMenu(e) {
    let li = e.parentElement;
    let ul = li.querySelector("ul");
    
    ul.classList.toggle("active");
    document.addEventListener("click", (event)=>{
        if(!li.contains(event.target)) {
            ul.classList.remove("active");
        }
    })  
}

