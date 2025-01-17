import kiotoImg from './images/first-item.jpg'
import okinawaImg from './images/second-item.jpg'
import samuraiImg from './images/third-item.jpg'

export class MenuCard {
    constructor(imageUrl, title, discription, price) {
        this.imageUrl = imageUrl
        this.title = title
        this.discription = discription
        this.price = price
    }

    createMenuCard() {
        const card = document.createElement('div')
        card.classList.add('menu-card')

        const cardImage = document.createElement('div')
        cardImage.classList.add('card-image')
        cardImage.style.backgroundImage = `url(${this.imageUrl})`
        cardImage.style.backgroundSize = 'cover'
        cardImage.style.backgroundPosition = 'center'
        card.appendChild(cardImage)

        const cardInformation = document.createElement('div')
        cardInformation.classList.add('card-info')
        cardInformation.innerHTML = `<h1>${this.title}</h1><p>${this.discription}</p><span>${this.price}</span>`
        card.appendChild(cardInformation)

        return card
    }
}


export class Menu {
    constructor(contentClass) {
        this.content = document.querySelector(contentClass)
        this.items = []
    }

    addItem(item) {
        this.items.push(item)
        this.render()
    }

    render() {
        this.content.innerHTML = ''

        const menuContainer = document.createElement('div')
        menuContainer.classList.add('menu-container')

        this.items.forEach(item => {
            const card = item.createMenuCard()
            menuContainer.appendChild(card)
        })

        this.content.appendChild(menuContainer)
    }
}

export const kioto = new MenuCard(kiotoImg, 'Kioto',
     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis diam nec justo pulvinar mattis quis non turpis. Nullam molestie dignissim iaculis. Pellentesque venenatis libero',
     '22.99$')

export const okinawa = new MenuCard(okinawaImg, 'Okinawa',
     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce justo urna, luctus sit amet sem vitae, interdum dignissim massa. Quisque at libero ex molestie',
     '19.99$')
export const samurai = new MenuCard(samuraiImg, 'Samurai', 
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et nunc a arcu tempus facilisis. Phasellus posuere pharetra sapien. Praesent auctor ornare turpis vitae scelerisque', 
    '16.99$'
)