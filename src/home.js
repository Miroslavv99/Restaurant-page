import backgroundImg from "./images/background.jpg"

export function homeDisplay() {
    const container = document.querySelector('.content')
    container.innerHTML = ''

    container.style.background = `url(${backgroundImg})`
    container.style.backgroundSize = 'cover'

    const intro = document.createElement('div')
    intro.classList.add('intro')
    intro.innerHTML = `<h1>This is the official Kioto Sushi delivery website</h1>
                       <p>You can go to the menu to order your favorite dishes</p>`;
    container.appendChild(intro)
}