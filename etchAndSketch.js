
function GenerateSquareGrid(){
    sideCount = AskUserGridSize();
    if(sideCount === 0) return;

    const gridContainer = document.querySelector(".grid-container"); 
    CleanOldGrid(gridContainer);
    
    if(sideCount > 100) sideCount = 100;
    let squareWidth = 100 / sideCount;

    for(let i = 0; i < sideCount; i++){

        for(let y = 0; y < sideCount; y++){
            const nextSquare = document.createElement("div");
            nextSquare.classList.add("square");
            nextSquare.style.minWidth = `${squareWidth}%`;
            gridContainer.appendChild(nextSquare);
        }
    }
    DrawSquareOnMouseEnter(gridContainer);
}

function CleanOldGrid(gridContainer){
    gridContainer.textContent = '';
}

function DrawSquareOnMouseEnter(gridContainer){ 
    gridContainer.addEventListener("mouseover", (e) => {
        let target = e.target;

        if(target.classList.contains("square")){
            target.style.backgroundColor = "black";
        }
    });
}

function SetUpGridGeneratorBtn(){
    const button = document.querySelector("button");
    button.addEventListener("click", GenerateSquareGrid);
}

function AskUserGridSize(){
    let userInput = prompt("Enter a side amount for a new grid:", 0);
    let gridSideSize = parseInt(userInput);
    console.log(typeof gridSideSize);

    if(typeof gridSideSize === "number"){
        return gridSideSize;
    }
    else{
        return 0;
    }
}

SetUpGridGeneratorBtn();