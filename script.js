document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const resetButton = document.getElementById("reset-button");
    const clearButton = document.getElementById("clear-button");
    let gridSize = 16;

    function createGrid(size) {

        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        const squareSize = container.clientWidth / size;

        for (let i = 0; i < size * size; i++) {
            const square = document.createElement("div");
            square.classList.add("grid-square");
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.style.opacity = "0.1";

            square.addEventListener("mouseenter", () => {
                let randomColor = `rgb(${random255()}, ${random255()}, ${random255()})`;

                let currentOpacity = parseFloat(square.style.opacity);
                if (currentOpacity < 1) {
                    square.style.opacity = Math.min(1, (currentOpacity + 0.1));
                }

                square.style.backgroundColor = randomColor;
            });

            container.appendChild(square);
        }
    }
    function random255() {
        return Math.floor(Math.random() * 256);
    }
    function resetGrid() {
        let newSize = prompt("Enter the number of squares per side (max 100):", gridSize);
        newSize = parseInt(newSize);

        if (isNaN(newSize) || newSize < 1 || newSize > 100) {
            alert("Invalid input! Please enter a number between 1 and 100.");
        } else {
            gridSize = newSize;
            createGrid(gridSize);
        }
    }

    function clearGrid() {
        document.querySelectorAll(".grid-square").forEach(square => {
            square.style.backgroundColor = "white";
            square.style.opacity = "0.1";
        });
    }

    resetButton.addEventListener("click", resetGrid);
    clearButton.addEventListener("click", clearGrid); 
    
    createGrid(gridSize);

    console.log("Grid created successfully!");
});
