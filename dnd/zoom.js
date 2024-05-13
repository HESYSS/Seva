document.addEventListener("DOMContentLoaded", function() {
    var imageContainer = document.getElementById("image-container");
    var zoomImage = document.getElementById("zoom-image");
    var isZoomed = false; // Флаг для отслеживания текущего состояния масштабирования

    imageContainer.addEventListener("dblclick", function(event) {
        var scale = isZoomed ? 1 : 7; // Если изображение уже увеличено, уменьшаем масштаб, иначе увеличиваем его
        isZoomed = !isZoomed; // Изменяем флаг состояния масштабирования

        var rect = zoomImage.getBoundingClientRect();
        var posX = (event.clientX - rect.left) / rect.width;
        var posY = (event.clientY - rect.top) / rect.height;

        zoomImage.style.transition = "transform 0.3s ease"; // Плавное изменение масштаба
        zoomImage.style.transformOrigin = (posX * 100) + "% " + (posY * 100) + "%"; // Установка точки масштабирования в месте клика
        zoomImage.style.transform = "scale(" + scale + ")"; // Применение увеличения или уменьшения
    });
});
