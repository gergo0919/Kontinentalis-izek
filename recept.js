document.addEventListener("DOMContentLoaded", function () {
    imageMapResize();

    // Attach hover events to all areas with a class
    document.querySelectorAll("area").forEach((area) => {
        const polygonClass = area.className; // Get the class of the area
        const matchingPolygon = document.querySelector(`polygon.${polygonClass}`); // Find matching polygon

        if (matchingPolygon) {
            area.addEventListener("mouseover", () => {
                matchingPolygon.style.opacity = "0.5"; // Highlight the polygon
            });

            area.addEventListener("mouseout", () => {
                matchingPolygon.style.opacity = "0"; // Remove highlight
            });
        }
    });
});