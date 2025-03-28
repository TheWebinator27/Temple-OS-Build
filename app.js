// clock
window.onload = () => {
  callDateTime();
}

function callDateTime(){
    let date = new Date();

    let dayInt = date.getDay();
    const days = ["Sun", "Mon", "Tue", "Wedy", "Thu", "Fri", "Sat"];
    let shortDay = days[dayInt];

    let dayDate = ('0' + date.getDate()).slice(-2);
    let monthDate = ('0' + (date.getMonth() + 1)).slice(-2);
f
    const localDate = `${shortDay} ${dayDate}/${monthDate}`
    let currentTime = date.toLocaleTimeString('en-GB');

    document.getElementById('mini-clock').innerHTML=`${localDate} ${currentTime}`;
  }
 
setInterval(function(){  callDateTime() }, 1000);

//FPS

// Function that returns a Promise for the FPS
const getFPS = () =>
  new Promise(resolve =>
    requestAnimationFrame(t1 =>
      requestAnimationFrame(t2 => resolve(1000 / (t2 - t1)))
    )
  )

// Calling the function to get the FPS
setInterval(function(){getFPS().then(fps => 
  document.getElementById('fps-counter').innerHTML = Math.round(fps)
)}, 400);



//popup

const openModalButton = document.querySelectorAll('[data-modal-target]');
const closeModalButton = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('popup-overlay');
const modalPopup = document.getElementById('modal');

openModalButton.forEach(button =>{
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

closeModalButton.forEach(button =>{
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

// popup end

// blinking function

  setInterval(function() {
    document.querySelector('.load-menu').classList.toggle('blink')
  }, 400)

  setInterval(function() {
    document.querySelector('.god-word-blink').classList.toggle('blink')
  }, 400)

// binary conversion

const binaryButton = document.getElementById('binary-convert-button');

binaryButton.onclick = function(){
  const text = document.getElementById('binary-input').value;
  let result = '';
  if(/^[01 ]+$/.test(text)){
    //binary to text
    const binaryArray = text.split(' ');
    for(let i = 0; i < binaryArray.length; i++){
      result += String.fromCharCode(parseInt(binaryArray[i], 2));
    }
  }else{
    //text to binary
    for (let i = 0; i < text.length; i++){
      result += text[i].charCodeAt(0).toString(2) + ' ';
    }
  }
  document.getElementById('binary-result').value = result.trim();
};

// God word

const godButton = document.getElementById('god-word-button');

let bibleWords = ['Jesus', 'holy', 'land', 'sea', 'sun', 'world', 'bird',
'life', 'wine', 'sinner', 'mercy', 'Father', 'repent', 'age', 'God', 'word',
 'christ', 'wisdom', 'divinity', 'nobility', 'Omnipotence', 'babtise' ];

godButton.addEventListener('click', () =>{


    for (let i = 0; i < bibleWords.length; i++){

      let randNum = (Math.round(Math.random() * 27));

      console.log(bibleWords[randNum]);
      let storage = bibleWords[randNum];
      document.getElementById('god-text-output').innerText = storage;

    }
});