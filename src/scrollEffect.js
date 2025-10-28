const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting)
        {
            entry.target.classList.add("show")
        }
    })
}, 
{})
document.querySelectorAll('.main-list li')
    .forEach(el => observer.observe(el))
document.querySelectorAll(".questions-list-wrapper li")
    .forEach(el => observer.observe(el))
