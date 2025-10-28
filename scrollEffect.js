const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting)
        {
            console.log(entry.target)
            entry.target.classList.add("show")
        }
    })
}, 
{
    rootMargin: "0px 0px -5% 0px",
})
document.querySelectorAll('.main-list li')
    .forEach(el => observer.observe(el))
document.querySelectorAll(".questions-list-wrapper li")
    .forEach(el => observer.observe(el))
observer.observe(document.querySelector(".about-me p"));
observer.observe(document.querySelector(".about-me h3"))
observer.observe(document.querySelector(".about-me img"))
