/* кнопки input (People) */
$(document).on('click', '.input-down-button', function () {
    let total = $(this).prev().prev();
    if ( total.val() > 1 ) {
        total.val(+total.val() - 1);
    }
});

// Увеличиваем на 1
$(document).on('click', '.input-up-button', function () {
    let total = $(this).prev();
    total.val(+total.val() + 1);
});

// Запрещаем ввод текста
$(document).on('input', '.form-input--number-input', function () {
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    }
});

// Hover на input
$(document).ready(function() {
    $('.input-up-button, .input-down-button').hover(function(event) {
        $(".number-input-wrapper").toggleClass("active")
    });
});
/* /кнопки input (People) */

/* menu */
$(document).ready(function() {
    $('.pizza').click(function(event) {
        $('.pizza').addClass("active")
        $(".menu__list--pizza").addClass("active")
        $(".menu-nav-item").not($(this)).removeClass("active")
        $(".menu__list").not(".menu__list--pizza").removeClass("active")
    });
    $('.soup').click(function(event) {
        $('.soup').addClass("active")
        $(".menu__list--soup").addClass("active")
        $(".menu-nav-item").not($(this)).removeClass("active")
        $(".menu__list").not(".menu__list--soup").removeClass("active")
    });
    $('.pasta').click(function(event) {
        $('.pasta').addClass("active")
        $(".menu__list--pasta").addClass("active")
        $(".menu-nav-item").not($(this)).removeClass("active")
        $(".menu__list").not(".menu__list--pasta").removeClass("active")
    });
    $('.desert').click(function(event) {
        $('.desert').addClass("active")
        $(".menu__list--desert").addClass("active")
        $(".menu-nav-item").not($(this)).removeClass("active")
        $(".menu__list").not(".menu__list--desert").removeClass("active")
    });
    $('.wine').click(function(event) {
        $('.wine').addClass("active")
        $(".menu__list--wine").addClass("active")
        $(".menu-nav-item").not($(this)).removeClass("active")
        $(".menu__list").not(".menu__list--wine").removeClass("active")
    });
    $('.beer').click(function(event) {
        $('.beer').addClass("active")
        $(".menu__list--beer").addClass("active")
        $(".menu-nav-item").not($(this)).removeClass("active")
        $(".menu__list").not(".menu__list--beer").removeClass("active")
    });
    $('.drinks').click(function(event) {
        $('.drinks').addClass("active")
        $(".menu__list--drinks").addClass("active")
        $(".menu-nav-item").not($(this)).removeClass("active")
        $(".menu__list").not(".menu__list--drinks").removeClass("active")
    });
});
/* /menu */