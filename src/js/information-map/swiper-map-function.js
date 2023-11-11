new Swiper('.image-slider', {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // Навигация
    // Буллеты, текущее положение, прогрессбар
    pagination: {
        el: '.swiper-pagination',
        // Буллеты
        clickable: true,
        // Динамические буллеты 
        dynamicBullets: true,
        // Кастомные буллеты
        renderBullet: function (index, className) {
            return '<span class="' + className + '" style="color:white">' + (index + 1) + '</span>';
        }
    },
});