/* Все время изменяется, потому что не все карты загружены, а пустые перменные мешают работе выполнения процесса */
const button_Home = document.getElementById('frame-bth__box__blockHome');
const button_54 = document.getElementById('frame-bth__box__block54');
const button_53 = document.getElementById('frame-bth__box__block53');
const button_52 = document.getElementById('frame-bth__box__block52');
const button_51 = document.getElementById('frame-bth__box__block51');
const button_36 = document.getElementById('frame-bth__box__block36');
const button_35 = document.getElementById('frame-bth__box__block35');
const button_34 = document.getElementById('frame-bth__box__block34');
const button_33 = document.getElementById('frame-bth__box__block33');
const button_32 = document.getElementById('frame-bth__box__block32');
const button_31 = document.getElementById('frame-bth__box__block31');
const button_24 = document.getElementById('frame-bth__box__block24');
const button_23 = document.getElementById('frame-bth__box__block23');
const button_22 = document.getElementById('frame-bth__box__block22');
const button_21 = document.getElementById('frame-bth__box__block21');
const button_15 = document.getElementById('frame-bth__box__block15');
const button_14 = document.getElementById('frame-bth__box__block14');
const button_13 = document.getElementById('frame-bth__box__block13');
const button_12 = document.getElementById('frame-bth__box__block12');
const button_11 = document.getElementById('frame-bth__box__block11');

const button_54_right = document.getElementById('frame-bth__box__block54(right)');
const button_53_right = document.getElementById('frame-bth__box__block53(right)');
const button_52_right = document.getElementById('frame-bth__box__block52(right)');
const button_51_right = document.getElementById('frame-bth__box__block51(right)');
const button_36_right = document.getElementById('frame-bth__box__block36(right)');
const button_35_right = document.getElementById('frame-bth__box__block35(right)');
const button_34_right = document.getElementById('frame-bth__box__block34(right)');
const button_33_right = document.getElementById('frame-bth__box__block33(right)');
const button_32_right = document.getElementById('frame-bth__box__block32(right)');
const button_31_right = document.getElementById('frame-bth__box__block31(right)');
const button_24_right = document.getElementById('frame-bth__box__block24(right)');
const button_23_right = document.getElementById('frame-bth__box__block23(right)');
const button_22_right = document.getElementById('frame-bth__box__block22(right)');
const button_21_right = document.getElementById('frame-bth__box__block21(right)');
const button_15_right = document.getElementById('frame-bth__box__block15(right)');
const button_14_right = document.getElementById('frame-bth__box__block14(right)');
const button_13_right = document.getElementById('frame-bth__box__block13(right)');
const button_12_right = document.getElementById('frame-bth__box__block12(right)');
const button_11_right = document.getElementById('frame-bth__box__block11(right)');

const image_frame_Home = document.getElementById('map__frame_HomeStart');
const image_frame_54 = document.getElementById('map__frame_54');
const image_frame_53 = document.getElementById('map__frame_53');
const image_frame_52 = document.getElementById('map__frame_52');
const image_frame_51 = document.getElementById('map__frame_51');
const image_frame_36 = document.getElementById('map__frame_36');
const image_frame_35 = document.getElementById('map__frame_35');
const image_frame_34 = document.getElementById('map__frame_34');
const image_frame_33 = document.getElementById('map__frame_33');
const image_frame_32 = document.getElementById('map__frame_32');
const image_frame_31 = document.getElementById('map__frame_31');
const image_frame_24 = document.getElementById('map__frame_24');
const image_frame_23 = document.getElementById('map__frame_23');
const image_frame_22 = document.getElementById('map__frame_22');
const image_frame_21 = document.getElementById('map__frame_21');
const image_frame_15 = document.getElementById('map__frame_15');
const image_frame_14 = document.getElementById('map__frame_14');
const image_frame_13 = document.getElementById('map__frame_13');
const image_frame_12 = document.getElementById('map__frame_12');
const image_frame_11 = document.getElementById('map__frame_11');





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
}
function notBlock1() {
  image_frame_11.style.display = 'none';
  image_frame_12.style.display = 'none';
  image_frame_13.style.display = 'none';
  image_frame_14.style.display = 'none';
  image_frame_15.style.display = 'none';
}





button_Home.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  image_frame_Home.style.display = 'block';
});



button_51.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  image_frame_51.style.display = 'block';
})
button_51_right.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  notVisible();
  image_frame_51.style.display = 'block';
  frame5_photo.style.display = 'block';
})

button_52.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  image_frame_52.style.display = 'block';
})
button_52_right.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  notVisible();
  image_frame_52.style.display = 'block';
  frame5_photo.style.display = 'block';
})

button_53.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  image_frame_53.style.display = 'block';
})
button_53_right.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  notVisible();
  image_frame_53.style.display = 'block';
  frame5_photo.style.display = 'block';
})

button_54.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  image_frame_54.style.display = 'block';
})
button_54_right.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  notVisible();
  image_frame_54.style.display = 'block';
  frame5_photo.style.display = 'block';
})



button_36.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  image_frame_36.style.display = 'block';
})
button_36_right.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  notVisible();
  image_frame_36.style.display = 'block';
  frame3_photo.style.display = 'block';
})

button_35.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  image_frame_35.style.display = 'block';
})
button_35_right.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  notVisible();
  image_frame_35.style.display = 'block';
  frame3_photo.style.display = 'block';
})

button_34.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  image_frame_34.style.display = 'block';
})
button_34_right.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  notVisible();
  image_frame_34.style.display = 'block';
  frame3_photo.style.display = 'block';
})

button_33.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  image_frame_33.style.display = 'block';
})
button_33_right.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  notVisible();
  image_frame_33.style.display = 'block';
  frame3_photo.style.display = 'block';
})

button_32.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  image_frame_32.style.display = 'block';
})
button_32_right.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  notVisible();
  image_frame_32.style.display = 'block';
  frame3_photo.style.display = 'block';
})

button_31.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  image_frame_31.style.display = 'block';
})
button_31_right.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  notVisible();
  image_frame_31.style.display = 'block';
  frame3_photo.style.display = 'block';
})



button_21.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  image_frame_21.style.display = 'block';
})
button_21_right.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  notVisible();
  image_frame_21.style.display = 'block';
  frame2_photo.style.display = 'block';
})

button_22.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  image_frame_22.style.display = 'block';
})
button_22_right.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  notVisible();
  image_frame_22.style.display = 'block';
  frame2_photo.style.display = 'block';
})

button_23.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  image_frame_23.style.display = 'block';
})
button_23_right.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  notVisible();
  image_frame_23.style.display = 'block';
  frame2_photo.style.display = 'block';
})

button_24.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  image_frame_24.style.display = 'block';
})
button_24_right.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  notVisible();
  image_frame_24.style.display = 'block';
  frame2_photo.style.display = 'block';
})



button_11.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  image_frame_11.style.display = 'block';
})
button_11_right.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  notVisible();
  image_frame_11.style.display = 'block';
  frame1_photo.style.display = 'blcok'
})

button_12.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  image_frame_12.style.display = 'block';
})
button_12_right.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  notVisible();
  image_frame_12.style.display = 'block';
  frame1_photo.style.display = 'blcok'
})

button_13.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  image_frame_13.style.display = 'block';
})
button_13_right.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  notVisible();
  image_frame_13.style.display = 'block';
  frame1_photo.style.display = 'blcok'
})


button_14.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  image_frame_14.style.display = 'block';
})
button_14_right.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  notVisible();
  image_frame_14.style.display = 'block';
  frame1_photo.style.display = 'blcok'
})

button_15.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  image_frame_1x.style.display = 'block';
})
button_15_right.addEventListener('click', function() {
  notHome();
  notBlock1();
  notBlock2();
  notBlock3();
  notBlock5();
  notVisible();
  image_frame_15.style.display = 'block';
  frame1_photo.style.display = 'blcok'
})
