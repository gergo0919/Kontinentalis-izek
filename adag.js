document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("bekeres"); // Single input for all recipes
    const recipes = document.querySelectorAll(".recept");

    input.addEventListener("input", function () {
        const newServings = parseInt(input.value, 10) || 4; // Default to 4 if input is invalid

        recipes.forEach(recept => {
            const currentServings = recept.querySelector(".jelen-adag");
            const ingredients = recept.querySelectorAll(".hozzavalok .mennyiseg");
            const baseServings = 4; // Assuming all recipes start with 4 servings

            // Update the serving count display
            currentServings.innerHTML = newServings;

            // Update ingredient quantities
            ingredients.forEach(item => {
                const originalQuantity = parseFloat(item.dataset.eredeti);
                const updatedQuantity = (originalQuantity * newServings / baseServings).toFixed(2);
                item.innerHTML = updatedQuantity;
            });
        });
    });
});
