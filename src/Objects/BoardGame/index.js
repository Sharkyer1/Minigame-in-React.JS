import './style.css';
import CardFrontBack from '../../components/CardFrontBack';
import cards from "./data.js"
 
function BoardGame(amountCards) {
   const FlipAndHideCards = ($cardsActive) => {
      $cardsActive.forEach((card) => card.classList.remove('-active'));
   }
   const swapPlayer = () => {
      const CurrentPlayer = $arrowDown.getAttribute('data-currentplayer');

      $arrowDown.setAttribute('data-currentplayer', CurrentPlayer == 1 ? 2 : 1);
   }

   window.boardGame = {};
   window.boardGame.handleClick = () => {
      const $boardGame = document.querySelector('.board-game');
     
      const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active');

      if ($cardsActive.length === 2) {
         setTimeout(() => { 
            FlipAndHideCards($cardsActive)
            swapPlayers()
      }, 1000);

   }
}
   const htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon));
   const $htmlCards = htmlCardsList.join('');

   return  /*html*/`
   <section class = "board-game" onClick="boardGame.handleClick()">
      ${$htmlCards}
   </section>
   `;
}

export default BoardGame;