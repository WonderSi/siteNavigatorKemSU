const object_frame1 = document.getElementById('map__frame_HomeStart-frame1')
const object_frame2 = document.getElementById('map__frame_HomeStart-frame2')
const object_frame3 = document.getElementById('map__frame_HomeStart-frame3')
const object_frame5 = document.getElementById('map__frame_HomeStart-frame5')


const frame1_photo = document.getElementById('frame1_photo')
const frame2_photo = document.getElementById('frame2_photo')
const frame3_photo = document.getElementById('frame3_photo')
const frame5_photo = document.getElementById('frame5_photo')



/* Отключение все окон видимости слайдшоу */
function notVisible() {
    frame1_photo.style.display = 'none';
    frame2_photo.style.display = 'none';
    frame3_photo.style.display = 'none';
    frame5_photo.style.display = 'none';
  }




/* Отображение конкретного слайдшоу, в зависимости от того, что нажал пользователь(какой объект на карте)  */
object_frame1.addEventListener('click', function() {
    notVisible()
    frame1_photo.style.display = 'block';
    
    console.log('Клик на SVG элементе');
});
object_frame2.addEventListener('click', function() {
    notVisible();
    frame2_photo.style.display = 'block';
    
    console.log('Клик на SVG элементе');
});
object_frame3.addEventListener('click', function() {
    notVisible();
    frame3_photo.style.display = 'block';
    
    console.log('Клик на SVG элементе');
});
object_frame5.addEventListener('click', function() {
    notVisible();
    frame5_photo.style.display = 'block';
    
    console.log('Клик на SVG элементе');
});