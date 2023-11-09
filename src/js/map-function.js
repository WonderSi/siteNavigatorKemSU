/* Все время изменяется, потому что не все карты загружены, а пустые перменные мешают работе выполнения процесса */
const button_Home = document.getElementById('frame-bth__box__blockHome');
const button_5 = document.getElementById('frame-bth__box__block5');
const button_36 = document.getElementById('frame-bth__box__block36');
const button_35 = document.getElementById('frame-bth__box__block35');
const button_34 = document.getElementById('frame-bth__box__block34');
const button_33 = document.getElementById('frame-bth__box__block33');
const button_32 = document.getElementById('frame-bth__box__block32');
const button_31 = document.getElementById('frame-bth__box__block31');
const button_2 = document.getElementById('frame-bth__box__block2');
const button_1 = document.getElementById('frame-bth__box__block1');

const image_frame_Home = document.getElementById('map__frame_HomeStart');
const image_frame_31 = document.getElementById('map__frame_31');
const image_frame_32 = document.getElementById('map__frame_32');
const image_frame_33 = document.getElementById('map__frame_33');
const image_frame_34 = document.getElementById('map__frame_34');
const image_frame_35 = document.getElementById('map__frame_35');
const image_frame_36 = document.getElementById('map__frame_36');
const image_frame_22 = document.getElementById('map__frame_22');





function notHome() {
  image_frame_Home.style.display = 'none';
}
function notBlock5() {
  image_frame_51.style.display = 'none';
  image_frame_52.style.display = 'none';
  image_frame_53.style.display = 'none';
  image_frame_54.style.display = 'none';
}
function notBlock3() {
  image_frame_31.style.display = 'none';
  image_frame_32.style.display = 'none';
  image_frame_33.style.display = 'none';
  image_frame_34.style.display = 'none';
  image_frame_35.style.display = 'none';
  image_frame_36.style.display = 'none';
}
function notBlock2() {
  image_frame_21.style.display = 'none';
  image_frame_22.style.display = 'none';
  image_frame_23.style.display = 'none';
  image_frame_24.style.display = 'none';
  image_frame_25.style.display = 'none';
}
function notBlock1() {
  image_frame_11.style.display = 'none';
  image_frame_12.style.display = 'none';
  image_frame_13.style.display = 'none';
  image_frame_14.style.display = 'none';
  image_frame_15.style.display = 'none';
}





button_Home.addEventListener('click', function() {
  notBlock3();
  image_frame_Home.style.display = 'block';
});



button_36.addEventListener('click', function() {
  notHome();
  image_frame_31.style.display = 'none';
  image_frame_32.style.display = 'none';
  image_frame_33.style.display = 'none';
  image_frame_34.style.display = 'none';
  image_frame_35.style.display = 'none';
  image_frame_36.style.display = 'block';
})
button_35.addEventListener('click', function() {
  notHome();
  image_frame_31.style.display = 'none';
  image_frame_32.style.display = 'none';
  image_frame_33.style.display = 'none';
  image_frame_34.style.display = 'none';
  image_frame_35.style.display = 'block';
  image_frame_36.style.display = 'none';
})
button_34.addEventListener('click', function() {
  notHome();
  image_frame_31.style.display = 'none';
  image_frame_32.style.display = 'none';
  image_frame_33.style.display = 'none';
  image_frame_34.style.display = 'block';
  image_frame_35.style.display = 'none';
  image_frame_36.style.display = 'none';
})
button_33.addEventListener('click', function() {
  notHome();
  image_frame_31.style.display = 'none';
  image_frame_32.style.display = 'none';
  image_frame_33.style.display = 'block';
  image_frame_34.style.display = 'none';
  image_frame_35.style.display = 'none';
  image_frame_36.style.display = 'none';
})
button_32.addEventListener('click', function() {
  notHome();
  image_frame_31.style.display = 'none';
  image_frame_32.style.display = 'block';
  image_frame_33.style.display = 'none';
  image_frame_34.style.display = 'none';
  image_frame_35.style.display = 'none';
  image_frame_36.style.display = 'none';
})
button_31.addEventListener('click', function() {
  notHome();
  image_frame_31.style.display = 'block';
  image_frame_32.style.display = 'none';
  image_frame_33.style.display = 'none';
  image_frame_34.style.display = 'none';
  image_frame_35.style.display = 'none';
  image_frame_36.style.display = 'none';
})