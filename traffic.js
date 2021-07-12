console.log('semafor');


const red = document.getElementById('red')
const orange = document.getElementById('orange')
const green = document.getElementById('green')

function changeColorRed() {
    red.setAttribute('class', 'red')
    green.setAttribute('class', 'dark-green')
}

function changeColorOrange() {
    orange.setAttribute('class', 'orange')
}

function changeColorGreen() {
    red.setAttribute('class', 'dark-red')
    orange.setAttribute('class', 'dark-orange')
    green.setAttribute('class', 'green')
}


changeColorRed()

setTimeout(() => changeColorOrange(), 5000)
setTimeout(() => changeColorGreen(), 7000)
setTimeout(() => changeColorRed(), 12000);

