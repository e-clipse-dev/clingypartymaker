document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.querySelector('body').addEventListener('mouseleave', partyOver)
document.querySelector('body').addEventListener('mouseenter', partyRestart)


function partyText() {
    document.querySelector('h1').style.fontSize = '4rem'
    document.querySelector('h1').style.margin = '0'
}

function partyPurple() {
    document.querySelector('body').style.backgroundColor = 'rgb(207,5,255)'
    document.querySelector('body').style.color = 'rgb(48,250,0)'
    document.querySelector('h1').innerHTML = 'PURPLE PARTYYY'
    partyText();
}

function partyGreen() {
    document.querySelector('body').style.backgroundColor = 'rgb(0, 255, 81)'
    document.querySelector('body').style.color = 'rgb(255,0,174)'
    document.querySelector('h1').innerHTML = 'GREEN PARTYYY'
    partyText();
}

function partyBlue() {
    document.querySelector('body').style.backgroundColor = 'rgb(1, 221, 221)'
    document.querySelector('body').style.color = 'rgb(254,34,34)'
    document.querySelector('h1').innerHTML = 'BLUE PARTYYY'
    partyText();
}

function partyOver() {
    document.querySelector('body').style.background = 'gray'
    document.querySelector('body').style.color = 'white'
    document.querySelector('body').classList.add('partyOver')
    document.querySelector('body').classList.add('partyOverPadding')
    document.querySelector('section').classList.add('hidden')
    document.querySelector('.partyOverText').innerHTML = 'No more party . . . . . . ?'
}

function partyRestart() {
    if (document.querySelector('h1').innerHTML == 'PURPLE PARTYYY') {
        document.querySelector('body').style.background = 'rgb(227, 0, 255)'
        document.querySelector('body').style.color = 'rgb(28, 255, 0)'
    }
    else if (document.querySelector('h1').innerHTML == 'GREEN PARTYYY') {
        document.querySelector('body').style.background = 'rgb(0, 255, 81)'
        document.querySelector('body').style.color = 'rgb(255, 0, 174)'
    }
    else if (document.querySelector('h1').innerHTML == 'BLUE PARTYYY') {
        document.querySelector('body').style.background = 'rgb(1, 221, 221)'
        document.querySelector('body').style.color = 'rgb(254, 34, 34)'
    }
    else {
        document.querySelector('body').style.background = 'moccasin'
        document.querySelector('body').style.color = 'black'
    }
    document.querySelector('body').classList.remove('partyOver')
    document.querySelector('body').classList.remove('partyOverPadding')
    document.querySelector('section').classList.remove('hidden')
    document.querySelector('.partyOverText').innerHTML = ''
}
