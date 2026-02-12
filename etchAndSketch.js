const gridContainer = document.querySelector(".grid-container");

for(let i = 0; i < 256; i++){
    const nextSquare = document.createElement("div");
    nextSquare.classList.add("square");
    gridContainer.appendChild(nextSquare);
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