const gridContainer = document.querySelector(".grid-container");

function GenerateSquareGrid(){
    for(let i = 0; i < sideCount; i++){

        for(let y = 0; y < sideCount; y++){
            const nextSquare = document.createElement("div");
            nextSquare.classList.add("square");
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

DrawSquareOnMouseEnter();