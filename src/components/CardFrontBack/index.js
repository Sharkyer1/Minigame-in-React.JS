import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack(){
    return `
        <article class="card-front-back">
            <div class="card -front"> 
                ${CardGame()}
            </div>
            <div class"card -back">
                ${CardGame("creper", "creper")}
            </div>
        </article>
    `
}

export default CardFrontBack;