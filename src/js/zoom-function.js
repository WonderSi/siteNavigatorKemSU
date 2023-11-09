const zoomedImage = document.getElementById('map');
var maxZoom = 3; // Объявляем maxZoom и инициализируем его значением 3
const currentWidth = parseFloat(zoomedImage.width);

function zoom() {
	if(maxZoom < 5) {
		maxZoom += 1;
		if(maxZoom == 5){
			zoomedImage.style.transform = "scale(1.4)";
			zoomedImage.style.transition = "transform 0.25s ease";
		}
		if(maxZoom == 4){
			zoomedImage.style.transform = "scale(1.2)";
			zoomedImage.style.transition = "transform 0.25s ease";
		}
		if(maxZoom == 3){
			zoomedImage.style.transform = "scale(1)";
			zoomedImage.style.transition = "transform 0.25s ease";
		}
		if(maxZoom == 2){
			zoomedImage.style.transform = "scale(0.8)";
			zoomedImage.style.transition = "transform 0.25s ease";			
		}
		if(maxZoom == 1){
			zoomedImage.style.transform = "scale(0.4)";
			zoomedImage.style.transition = "transform 0.25s ease";			
		}
	}
}

function notzum() {
	if(maxZoom > 1) {
		maxZoom -= 1;
		if(maxZoom == 5){
			zoomedImage.style.transform = "scale(1.4)";
			zoomedImage.style.transition = "transform 0.25s ease";
		}
		if(maxZoom == 4){
			zoomedImage.style.transform = "scale(1.2)";
			zoomedImage.style.transition = "transform 0.25s ease";
		}
		if(maxZoom == 3){
			zoomedImage.style.transform = "scale(1)";
			zoomedImage.style.transition = "transform 0.25s ease";
		}
		if(maxZoom == 2){
			zoomedImage.style.transform = "scale(0.8)";
			zoomedImage.style.transition = "transform 0.25s ease";			
		}
		if(maxZoom == 1){
			zoomedImage.style.transform = "scale(0.6)";
			zoomedImage.style.transition = "transform 0.25s ease";			
		}
	}
}