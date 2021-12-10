import CardGame from "../CardGame";

function CardFrontBack(){
    return `
        <article class="card-front-back">
        ${CardGame()}
        ${CardGame()}
        </article>
    `
}

export default CardFrontBack;