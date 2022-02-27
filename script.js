const esales = document.querySelector('.menu_eSales');
const finance = document.querySelector('.menu_finance');
const move = document.querySelector('.menu_move');
const universe = document.querySelector('.menu_universe');
const team = document.querySelector('.menu_team');
const sectionone = document.querySelector('.eSales');
const sectiontwo = document.querySelector('.finance');
const sectionthree = document.querySelector('.move');
const sectionfour = document.querySelector('.universe');
const sectionfive = document.querySelector('.team');
const platform = document.querySelectorAll('.platform');
const buttonOne = document.querySelector('.button_one');
const buttonTwo = document.querySelector('.button_two');
const buttonThree = document.querySelector('.button_three');
const financeOne = document.querySelector('.finance_one');
const financeTwo = document.querySelector('.finance_two');
const financeThree = document.querySelector('.finance_three');


const preview = document.querySelector('.preview');

const start = document.querySelector('.header_logo');

function openStart(event) {
    event.preventDefault();
    sectionone.style.display = 'none';
    preview.style.display = 'block';
    sectiontwo.style.display = 'none';
    sectionthree.style.display = 'none';
    sectionfour.style.display = 'none';
    sectionfive.style.display = 'none';
}

start.addEventListener('click', openStart);

function openESales(event) {
    event.preventDefault();
    sectionone.style.display = 'block';
    preview.style.display = 'none';
    sectiontwo.style.display = 'none';
    sectionthree.style.display = 'none';
    sectionfour.style.display = 'none';
    sectionfive.style.display = 'none';
}

esales.addEventListener('click', openESales);

function openFinance(event) {
    event.preventDefault();
    sectionone.style.display = 'none';
    preview.style.display = 'none';
    sectiontwo.style.display = 'block';
    sectionthree.style.display = 'none';
    sectionfour.style.display = 'none';
    sectionfive.style.display = 'none';
}

finance.addEventListener('click', openFinance);

function openMove(event) {
    event.preventDefault();
    sectionone.style.display = 'none';
    preview.style.display = 'none';
    sectiontwo.style.display = 'none';
    sectionthree.style.display = 'block';
    sectionfour.style.display = 'none';
    sectionfive.style.display = 'none';
}

move.addEventListener('click', openMove);

function openUniverse(event) {
    event.preventDefault();
    sectionone.style.display = 'none';
    preview.style.display = 'none';
    sectiontwo.style.display = 'none';
    sectionthree.style.display = 'none';
    sectionfour.style.display = 'block';
    sectionfive.style.display = 'none';
}

universe.addEventListener('click', openUniverse);

function openTeam(event) {
    event.preventDefault();
    sectionone.style.display = 'none';
    preview.style.display = 'none';
    sectiontwo.style.display = 'none';
    sectionthree.style.display = 'none';
    sectionfour.style.display = 'none';
    sectionfive.style.display = 'block';
}

team.addEventListener('click', openTeam);

function openOne(event) {
    event.preventDefault();
    financeTwo.style.display = 'none';
    financeThree.style.display = 'none';
    financeOne.style.display = 'block';
}

buttonOne.addEventListener('click', openOne);

function openTwo(event) {
    event.preventDefault();
    financeTwo.style.display = 'block';
    financeThree.style.display = 'none';
    financeOne.style.display = 'none';
}

buttonTwo.addEventListener('click', openTwo);

function openThree(event) {
    event.preventDefault();
    financeTwo.style.display = 'none';
    financeThree.style.display = 'block';
    financeOne.style.display = 'none';
}

buttonThree.addEventListener('click', openThree);

function toggleFullScreen(e) {
    e.path[0].requestFullscreen();
}

platform.forEach(key => {
    key.addEventListener('click', toggleFullScreen, false);
})


