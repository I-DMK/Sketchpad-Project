document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const resetButton = document.getElementById("reset-button");
    let gridSize = 16; // Default grid size

    function createGrid(size) {
        // Remove previous elements securely
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        const squareSize = 400 / size; // Adjust square size dynamically

        for (let i = 0; i < size * size; i++) {
            const square = document.createElement("div");
            square.classList.add("grid-square");
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;

            // Add hover effect: change color on mouseenter
            square.addEventListener("mouseenter", () => {
                square.style.backgroundColor = "black"; // Default to black
            });

            container.appendChild(square);
        }
    }

    // Function to ask user for new grid size and regenerate grid
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

    resetButton.addEventListener("click", resetGrid);

    createGrid(gridSize); // Initialize grid on page load

    console.log("Grid created successfully with dynamic resizing!");
});
