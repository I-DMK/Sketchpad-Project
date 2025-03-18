document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const gridSize = 16;

    function createGrid(size) {
        // Remove previous elements securely
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        const squareSize = 400 / size; // Adjust dynamically

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

    createGrid(gridSize); // Initialize grid

    console.log("Grid created successfully with hover effect!");
});
