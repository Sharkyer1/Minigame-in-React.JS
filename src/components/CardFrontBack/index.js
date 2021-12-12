import CardGame from "../CardGame";
import "./style.css";



function CardFrontBack() {
    window.CardFrontBack = {}
    window.CardFrontBack.handleClick = (event) => {
      const $origin = event.target;
      const $CardFrontBack = $origin.closest('.card-front-back');

      $CardFrontBack.classList.toggle('-active');
    }

    return `
        <article class="card-front-back" onClick="CardFrontBack.handleClick(event)">
            <div class="card -front">  
                ${CardGame()}
            </div>
            <div class"card -back">
                ${CardGame("creper", "creper")}
            </div>
        </article>
    `;
}

export default CardFrontBack;