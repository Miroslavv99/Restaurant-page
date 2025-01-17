import './styles.css'
import { homeDisplay } from "./home.js";
import { Menu, kioto, okinawa, samurai } from './menu.js';
import { showAbout } from './about.js';

document.addEventListener('DOMContentLoaded', () => {
    homeDisplay()
})

const homeButton = document.querySelector('.home')

homeButton.addEventListener('click', () => {
    homeDisplay()
})


const menuButton = document.querySelector('.menu')

const menu = new Menu('.content')
menu.addItem(kioto)
menu.addItem(okinawa)
menu.addItem(samurai)

menuButton.addEventListener('click', () => {
    menu.render()
})

const aboutButton = document.querySelector('.about')

aboutButton.addEventListener('click', () => {
    showAbout()
})