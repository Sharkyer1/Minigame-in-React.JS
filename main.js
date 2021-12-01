import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css"
import "./src/styles/Elements/base.css"; 
import BoardGame from "./src/Objects/BoardGame";


const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(6);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);