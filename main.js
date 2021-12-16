import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css"
import "./src/styles/Elements/base.css"; 
import ScoreBoard from "./src/Objects/ScoreBoard";
import PlayerName from "./src/components/PlayerName";
import BoardGame from "./src/Objects/BoardGame";
import VsPlayer from "./src/components/VsPlayer";


const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    "beforeend", 
    `
       ${ScoreBoard()} 
       ${BoardGame(6)}
    `
    
    );