export function showAbout() {
    const content = document.querySelector('.content')
    content.innerHTML = ''

    const aboutContainer = document.createElement('div')
    aboutContainer.classList.add('about-container')
    aboutContainer.innerHTML = `<h1>Here is main information about us</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit erat, euismod nec tincidunt nec, varius ac tortor. Pellentesque eu eros rhoncus ante aliquam blandit. Nam accumsan iaculis dapibus. Integer ac elementum ante. Duis vehicula purus magna. Suspendisse fermentum nibh eros, ut consequat tellus tempor sit amet. Sed malesuada massa felis, et consectetur justo pulvinar vel. Integer elementum, leo ac feugiat dictum, dolor lorem volutpat nisl, sollicitudin egestas nisi est ut diam. Proin blandit lacus convallis nunc euismod, sollicitudin euismod dolor viverra. Nulla erat lacus, faucibus quis bibendum a, condimentum id tellus. Etiam tincidunt semper turpis, ornare iaculis leo faucibus non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas vestibulum aliquet porttitor. Cras hendrerit tortor nulla.</p>`
    content.appendChild(aboutContainer)
}