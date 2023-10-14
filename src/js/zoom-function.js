const zoomedImage = document.getElementById('zoomedImage');
var maxZoom = 0; // Объявляем maxZoom и инициализируем его значением 3
const currentWidth = parseFloat(zoomedImage.width);

console.log(currentWidth)

function zoom() {

	if (maxZoom !== 3) { // Проверяем, что maxZoom не равен 5

		maxZoom += 1;

		const currentWidth = parseFloat(zoomedImage.width);

		zoomedImage.width = currentWidth + 200;

		console.log("Ширина элемента: " + zoomedImage.width + " пикселей " + maxZoom);
	}
}

function notzum() {

	if (maxZoom !== 0) { // Проверяем, что maxZoom не равен 0

		maxZoom -= 1;

		const currentWidth = parseFloat(zoomedImage.width);

		zoomedImage.width = currentWidth - 200;

		console.log("Ширина элемента: " + zoomedImage.width + " пикселей " + maxZoom);
	}

}