let aboutContent = document.getElementById("about-content");

let aboutMeBtn = document.getElementById("about-me")
aboutMeBtn.addEventListener('click', () => {
    document.querySelectorAll(".about-nav button").forEach(el => el.style.backgroundColor = "red")
    aboutMeBtn.style.backgroundColor = "#BB0003";
    aboutContent.innerHTML = about_me;
})
const about_me = `
    <div class="about-me">
        <img src="${window.innerWidth > 700 ? "./images/me-picture-portrait.jpg" : "./images/me-picture-horizontal.png"}" alt="moje zdjecie">
        <div>
            <h3>O mnie -</h3>
            <p>Psycholog, Trener i Konsultant Biznesu. Od wielu lat wnikliwie analizuję potrzeby przedsiębiorców, pomagam usprawniać procesy sprzedaży. Doradzam, jak połączyć jakość pracy z krótkim czasem realizacji zamówień, a także jak wykorzystać potencjał pracowników. Łączę analizę psychologiczną z przystępną formą przekazu informacji. Wiedza i techniki, które przekazuję, bazują na kilkunastoletniej praktyce i wymiernych sukcesach sprzedażowych. Zaufało mi już ponad 700 firm! Wyróżnia mnie wykorzystanie wiedzy psychologicznej w realizowanych dla klientów procesach. Trenerów i konsultantów biznesowych jest wielu ale ukończenie jednej z najlepszych w Polsce uczelni psychologicznej (SWPS) oraz dodatkowe wykształcenie z zakresu trenerstwa biznesowego daje mi unikalne kompetencje w tworzeniu programów rozwoju firm. Serdecznie zapraszam Państwa do zapoznania się z moją ofertą. Wiem, że wspólnie rozwiążemy każdy problem.</p>
        </div>
    </div>
`
aboutContent.innerHTML = about_me;
window.addEventListener("resize", () =>
{
    let image = document.querySelector(".about-me img")
    if(image != null)
    {
        image.src = window.innerWidth > 700 ? "./images/me-picture-portrait.jpg" : "./images/me-picture-horizontal.png"
    }
});

let aboutFaqBtn = document.getElementById("about-faq")
aboutFaqBtn.addEventListener('click', () => {
    document.querySelectorAll(".about-nav button").forEach(el => el.style.backgroundColor = "red")
    aboutFaqBtn.style.backgroundColor = "#BB0003"
    aboutContent.innerHTML = faq;

    aboutContent.querySelectorAll("li").forEach(el => {
        el.addEventListener('click', () =>{
            let answer = el.querySelector("p");
            answer.className = answer.className == "show" ? "" : "show";
            console.log(answer)
        })
    });
})
const faq = ` 
    <ul class="faq">
        <li>
            <div>
                <span>+</span>
                <h4>Co zrobić gdy w firmie dochodzi do mobbingu</h4>
            </div>
            <p class="asd">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </li>
        <li>
            <div>
                <span>+</span>
                <h4>Co zrobić gdy w firmie dochodzi do mobbingu</h4>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </li> 
    </ul>
`