const gridContainer = document.querySelector(".grid-container");

function GenerateSquareGrid(sideCount){

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
}

function DrawSquareOnMouseEnter(){ 
    gridContainer.addEventListener("mouseover", (e) => {
        let target = e.target;

        if(target.classList.contains("square")){
            target.style.backgroundColor = "black";
        }
    });
}
GenerateSquareGrid(40);
DrawSquareOnMouseEnter();