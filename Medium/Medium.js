const card_click = new Audio();
card_click.src = "../music/card_click.wav";

const wrong = new Audio();
wrong.src = "../music/wrong.wav";

const correct = new Audio();
correct.src = "../music/correct.wav";

const win = new Audio();
win.src = "../music/win.wav";
const playAgain = document.getElementsByClassName("playAgain")[0];

playAgain.onclick = function(){
    location.href = "./Medium.html";
}

const home = document.getElementsByClassName("homebtn")[0];

home.onclick = function(){
    location.href = "../index.html";
}
var cards = [
    {
        name:'giraffe',
        icon:  "<img src='../images/gir.webp' width='110' height='150'>"
    },
    {
        name:'elephant',
        icon:"<img src='../images/eleph.jpg' width='120' height='160'>"
    },
    {
        name:'dog',
        icon:"<img src='../images/dog.jpg' width='110' height='150'>"
    },
    {
        name:'tiger',
        icon:"<img src='../images/tiger.jpg' width='110' height='150'>"
    },
   
    {
        name:'giraffe',
        icon:  "<img src='../images/gir.webp' width='110' height='150'>"
    },
    {
        name:'elephant',
        icon:"<img src='../images/eleph.jpg' width='120' height='160'>"
    },
    {
        name:'dog',
        icon:"<img src='../images/dog.jpg' width='110' height='150'>"
    },
    {
        name:'tiger',
        icon:"<img src='../images/tiger.jpg' width='110' height='150'>"
    }
];
shuffleCards();

const gameboard = document.getElementById('gameboard')
display();


function shuffleCards(){
    for(var i=0; i<cards.length; i++){
        var randomindex = Math.floor(Math.random()*(i+1));
        [cards[i],cards[randomindex]]=[cards[randomindex],cards[i]];
    }
}


 function display(){
    cards.forEach((curr,index,arr)=>{
        const card = document.createElement('div');
         gameboard.append(card);
        card.setAttribute('id',index);
        card.classList.add('cardback');
       card.classList.add('active');
       card.addEventListener('click',turnCard);        
    })
 }
 var flippedCards = [];
 var matched = 0;
 
  function turnCard(){
    if(flippedCards.length<2&&this.classList.contains('active')){
        this.onclick = card_click.play();
        let cardId = this.getAttribute('id');
   flippedCards.push(this);
   this.classList.remove('cardback');
   this.innerHTML = cards[cardId].icon;
   if(flippedCards.length==2){
    setTimeout(checkMatch,1000);
   }
    }
 }
 function checkMatch(){
var card1 = flippedCards[0].getAttribute('id');
var card2 = flippedCards[1].getAttribute('id');
if(cards[card1].name===cards[card2].name){
    flippedCards[0].classList.remove('active');
    flippedCards[0].innerHTML = '';
    flippedCards[0].style.border = 'none';
    //flippedCards[0].style.backgroundColor ='rgb(226, 165, 190)';
    flippedCards[1].classList.remove('active');
    flippedCards[1].innerHTML = '';
    flippedCards[1].style.border = 'none';
    //flippedCards[1].style.backgroundColor ='rgb(226, 165, 190)';
    matched++;
    correct.play();
    if(matched==(cards.length/2)){
        win.play();
        GameOver();
      }
}
else{
    
    flippedCards[0].innerHTML = '';
    flippedCards[0].classList.add('cardback');
    flippedCards[1].innerHTML = '';
    flippedCards[1].classList.add('cardback');
    wrong.play();
}
flippedCards = [];
 }

 function GameOver(){
    while(gameboard.firstChild){
        gameboard.removeChild(gameboard.firstChild);
    }
    gameboard.classList.remove('game');
    gameboard.classList.add('won');
    gameboard.innerHTML = 'YOU WON!!!';
     
  
 }
 
 
 

