const gridContainer = document.querySelector(".grid-container");

for(let i = 0; i < 256; i++){
    const nextSquare = document.createElement("div");
    gridContainer.appendChild(nextSquare);
}