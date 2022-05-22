class Hamburger {

}

document.querySelector('.big').addEventListener('click', event => {
    event.target.closest('.hamburgerWrap').classList.remove('unSelected');
    document.querySelector('.small').classList.add('unSelected');
});

document.querySelector('.small').addEventListener('click', event => {
    event.target.closest('.hamburgerWrap').classList.remove('unSelected');
    document.querySelector('.big').classList.add('unSelected');
});

document.querySelector('.cheese').addEventListener('click', event => {
    event.target.closest('.toppingWrap').classList.remove('unSelected');
    document.querySelector('.salad').classList.add('unSelected');
    document.querySelector('.potato').classList.add('unSelected');
});

document.querySelector('.salad').addEventListener('click', event => {
    event.target.closest('.toppingWrap').classList.remove('unSelected');
    document.querySelector('.cheese').classList.add('unSelected');
    document.querySelector('.potato').classList.add('unSelected');
});

document.querySelector('.potato').addEventListener('click', event => {
    event.target.closest('.toppingWrap').classList.remove('unSelected');
    document.querySelector('.cheese').classList.add('unSelected');
    document.querySelector('.salad').classList.add('unSelected');
});

