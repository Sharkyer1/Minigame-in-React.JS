import "./style.css";

function ArrowDown(CurrentPlayer = 1){
    return /*html*/ `
      <img class="arrow-down" data-CurrentPlayer="${CurrentPlayer}" src="images/Seta.png" 
      alt="Icone de uma seta para baixo">  
    `
}

export default ArrowDown;