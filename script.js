const block_0 = [
  [['Не можу уявити свого життя без твоїх '], [' 🌼']],
  [['Коли мені замало твоїх '], [', мене огортає журбинка 😥']],
  [['Без твоїх '], [' мої будні, наче "Нудота" Жана-Поля Сартра 💩']],
  [['Хочу твоїх '], [', як Саурон хоче перстень 🔥']],
  [['Життя позбавлене твоїх '], [', наче розмита чорно-біла фотографія 📷']]
];

const options_0 = ['поцілунків', 'печеньок', 'сідничок', 'обіймів', 'очей', 'жартів', 'думок', 'пісень','щічок', 'уст'];

const block_1 = [
  [['Якби я не був людиною, то хотів би бути твоїм '], [' 💕']],
  [['Бути твоїм '], [' - це моя нічна фантазія ❤️‍🔥']],
  [['В моїх снах ти живеш у чарівному замку, а я є твоїм '], [' 🏯']],
  [['В минулому житті я був твоїм '], [' 🍀']],
  [['В рольових іграх я буду твоїм '], [', а ти - моєю квіточкою 🌺']]
];

const options_1 = [ 'хомʼячком', 'улюбленим музичним інструментом', 'котиком', 'альтер еґо', 'улюбленим книжковим персонажем', 'найкращим моментом', 'натхненням', 'коциком', 'вазоночком', 'улюбленим сендвічем' ];

const block_2 = [
  [['В найщасливіший день свого життя я буду '], [' з тобою ❤️']],
  [['Мати можливість '], [' з тобою - це справжній подарунок долі ❣️']],
  [['Хотів би '], [' з тобою від 8 ранку і до комендантської години 💘']],
  [['Коли я буду '], [' з тобою, у мене буде передозування дофаміном ✨']],
  [['Якщо мені скажуть, що я ніколи не зможу '], [' з тобою, я почну революцію 💥']]
];

const options_2 = ['ходити по горах', 'любитись', 'читати одну і ту ж книгу', 'обійматись', 'дивитись файні фільми', 'сміятись з жартів пана Романа', 'слухати джаз', 'говорити на філософські теми', 'гуляти львівськими парками', 'складати план поїздки до Мон-Сен-Мішель'];

const generateNewPostCardBtn = document.querySelector('.generate-new');
const container = document.querySelector('.container');
const musicContainer =document.querySelector('.fantastic-music-container');

const history = [];
let counter = 0;
let musicCount = 0;
let magicSentence = '';
let typeWriterIndex = 0;

generateNewPostCardBtn.addEventListener('click', generatePostcard);

function generatePostcard() {
  const blockNumber = generateRandomNumber(3);
  const sentenceNumber = generateRandomNumber(5);
  const optionNumber = generateRandomNumber(10);

  let block, options;

  switch (blockNumber) {
    case 0 :
      block = block_0;
      options = options_0;
      break;
    case 1 :
      block = block_1
      options = options_1;
      break;
    case 2 : 
      block = block_2;
      options = options_2;
      break;
    default :
      break; 
  }

  magicSentence = block[sentenceNumber][0] + options[optionNumber] + block[sentenceNumber][1];

  if (history.includes(magicSentence)) {
    console.log('magic sentence repeated')
    generatePostcard();
    return;
  } else {
    history.push(magicSentence);
  }

  counter++;
  container.innerHTML = '';
  
  if (counter === 15) {
    container.innerHTML = '<div class="reminder">Ще не втомилась? Відпочинь трохи: випий какаву, послухай файну музику 🙂</div>';
    musicContainer.innerHTML = ` <iframe class="responsive-iframe" src="https://www.youtube.com/embed/bj_r0-Nio38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  } else if (counter === 29) {
    container.innerHTML = '<div class="reminder">Нічого собі, вже 30 валентинок! Це капітально. Відпочинь трохи: почитай гарну <a href="https://www.themarginalian.org/2021/06/25/jose-ortega-y-gasset-on-love/" target="_blank">історію</a>, подивися файні <a href="https://www.themarginalian.org/2022/01/16/what-is-love-carson-ellis-mac-barnett/" target="_blank">картинки</a> 🙂</div>';
  } else if (counter === 59) {
    container.innerHTML = '<div class="reminder">Ти мене дивуєш! Але моя фантазія не безмежна 🙂</div>'
  } else if (counter === 99) {
    container.innerHTML = '<div class="reminder">Думаю, на сьогодні досить 🙂</div>'
    generateNewPostCardBtn.style.visibility = 'hidden';
  } else {
    generateNewPostCardBtn.disabled = true;
    typeWriter();
  }
}

function generateRandomNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}

function typeWriter() {
  if (typeWriterIndex < magicSentence.length) {
    container.innerHTML += magicSentence.charAt(typeWriterIndex);
    typeWriterIndex++;
    setTimeout(typeWriter, 0);
  } else {
    typeWriterIndex = 0;
    generateNewPostCardBtn.disabled = false;
  }
}
