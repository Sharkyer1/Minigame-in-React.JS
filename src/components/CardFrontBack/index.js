import CardGame from "../CardGame";

function CardFrontBack(){
    return `
        <article class="card-front-back">
        ${CardGame()}
        ${CardGame("creper", "creper")}
        </article>
    `
}

export default CardFrontBack;