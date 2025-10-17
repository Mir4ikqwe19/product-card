// Покраска первой карточки

const firstCard = document.querySelector('.product_card');
const changeColorCardButton = document.querySelector('#change-card-color-button');
const lilacColorHash = '#C3C2FF';
const deepPurpleColorHash = '#432A73';

changeColorCardButton.addEventListener('click', () => {
  firstCard.style.backgroundColor = deepPurpleColorHash;
});

// Покраска всех карточек

const allCardList = document.querySelectorAll('.product_card');
const changeAllCardsColor = document.querySelector('#change-color-all-cards-btn');

changeAllCardsColor.addEventListener('click', () => {
  allCardList.forEach((card) => card.style.backgroundColor = lilacColorHash)
});

// Открываем гугл

const openGooglePageButton = document.querySelector('#open-google-page-btn');

openGooglePageButton.addEventListener('click', openGoogle);

function openGoogle () {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://www.google.com/')
  } else {
    return
  }
};

// Задачка с заголовоком

const pageTitle = document.querySelector('.title');
const textPageTitle = pageTitle.textContent;

pageTitle.addEventListener('mouseenter', () => {
  console.log(textPageTitle)
});

// Задачка со сменой цветов у кнопки

const multiColorButton = document.querySelector('.multi-colored-btn');

if (multiColorButton) {
  multiColorButton.addEventListener('click', () => {
    const isActive = multiColorButton.classList.toggle('active');

    if(isActive) {
      multiColorButton.style.backgroundColor = '#374366';
    } else {
      multiColorButton.style.backgroundColor ='#4A0C35'
    }
  });
}