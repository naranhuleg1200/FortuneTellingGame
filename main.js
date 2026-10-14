'use strict';

const resultElement = document.querySelector('#result');

const submitButton = document.querySelector('.btn');

submitButton.addEventListener('click', () => {
    resultElement.textContent = "大吉!(^^)!";

    const fortunes = ["大吉!(^^)!","中吉(^_-)-☆","小吉(*^^*)","凶( ;∀;)"];
    
    const randomIndex= Math.floor(Math.random() * fortunes.length);

    const fortune = fortunes[randomIndex];

    resultElement.textContent = fortune;
});

