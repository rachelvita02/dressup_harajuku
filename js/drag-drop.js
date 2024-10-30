document.addEventListener("DOMContentLoaded", function() {
    const draggables = document.querySelectorAll(".draggable");

    draggables.forEach(draggable => {
        draggable.addEventListener("mousedown", startDrag);

        function startDrag(e) {
            e.preventDefault();
            let offsetX = e.clientX - draggable.offsetLeft;
            let offsetY = e.clientY - draggable.offsetTop;

            document.addEventListener("mousemove", onDrag);
            document.addEventListener("mouseup", stopDrag);

            function onDrag(e) {
                draggable.style.left = `${e.clientX - offsetX}px`;
                draggable.style.top = `${e.clientY - offsetY}px`;
            }

            function stopDrag() {
                document.removeEventListener("mousemove", onDrag);
                document.removeEventListener("mouseup", stopDrag);
            }
        }
    });
});
