import "./style.css";

function CardGame(icon = "bau-pixel", alt = "bau") {
  return /*html*/ `
    <article class="card-game">
      <img src="images/${icon}.png" alt="${alt}">     
    </article>
  `;
}

export default CardGame;