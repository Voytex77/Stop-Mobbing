const carouselElements = 
[
    `
        <h2>Ochrona przed niekorzystnym traktowaniem</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, at deleniti assumenda suscipit, quibusdam amet vel possimus esse porro cupiditate reprehenderit error ex nulla eaque atque illo? Laboriosam, earum nobis?</p>
    `,
    `
        <h2>Artykuł nr 2</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, at deleniti assumenda suscipit, quibusdam amet vel possimus esse porro cupiditate reprehenderit error ex nulla eaque atque illo? Laboriosam, earum nobis?</p>
    `,
]

let codex = document.getElementById("codex-article");
let index = 0;

document.querySelector(".change-left").addEventListener('click', () => changeElement(-1))
document.querySelector(".change-right").addEventListener('click', () => changeElement(1))

changeElement(0);
function changeElement(num)
{
    index += num;
    if(index > carouselElements.length - 1)
    {
        index = 0
    }
    if(index < 0)
    {
        index = carouselElements.length - 1;
    }


    codex.innerHTML = carouselElements[index];
}