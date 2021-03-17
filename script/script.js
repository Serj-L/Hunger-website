 /* scroll up */
 var scrbtn = $('.scroll-up-btn');

 $(window).scroll(function() {
   if ($(window).scrollTop() > 100) {
     scrbtn.addClass('active');
   } else {
     scrbtn.removeClass('active');
   }
 });

 scrbtn.on('click', function(e) {
   e.preventDefault();
   $('html, body').animate({scrollTop:0}, '100');
 });
/* /scroll up */

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
        $(this).parent('li').addClass('active-span');
        $(".active-span").not($(this).parent("li")).removeClass("active-span")

    });
    $('.soup').click(function(event) {
        $('.soup').addClass("active")
        $(".menu__list--soup").addClass("active")
        $(".menu-nav-item").not($(this)).removeClass("active")
        $(".menu__list").not(".menu__list--soup").removeClass("active")
        $(this).parent('li').addClass('active-span');
        $(".active-span").not(this).parent("li").removeClass("active-span")
        $(this).parent('li').addClass('active-span');
        $(".active-span").not($(this).parent("li")).removeClass("active-span")
    });
    $('.pasta').click(function(event) {
        $('.pasta').addClass("active")
        $(".menu__list--pasta").addClass("active")
        $(".menu-nav-item").not($(this)).removeClass("active")
        $(".menu__list").not(".menu__list--pasta").removeClass("active")
        $(this).parent('li').addClass('active-span');
        $(".active-span").not($(this).parent("li")).removeClass("active-span")
    });
    $('.desert').click(function(event) {
        $('.desert').addClass("active")
        $(".menu__list--desert").addClass("active")
        $(".menu-nav-item").not($(this)).removeClass("active")
        $(".menu__list").not(".menu__list--desert").removeClass("active")
        $(this).parent('li').addClass('active-span');
        $(".active-span").not($(this).parent("li")).removeClass("active-span")
    });
    $('.wine').click(function(event) {
        $('.wine').addClass("active")
        $(".menu__list--wine").addClass("active")
        $(".menu-nav-item").not($(this)).removeClass("active")
        $(".menu__list").not(".menu__list--wine").removeClass("active")
        $(this).parent('li').addClass('active-span');
        $(".active-span").not($(this).parent("li")).removeClass("active-span")
    });
    $('.beer').click(function(event) {
        $('.beer').addClass("active")
        $(".menu__list--beer").addClass("active")
        $(".menu-nav-item").not($(this)).removeClass("active")
        $(".menu__list").not(".menu__list--beer").removeClass("active")
        $(this).parent('li').addClass('active-span');
        $(".active-span").not($(this).parent("li")).removeClass("active-span")
    });
    $('.drinks').click(function(event) {
        $('.drinks').addClass("active")
        $(".menu__list--drinks").addClass("active")
        $(".menu-nav-item").not($(this)).removeClass("active")
        $(".menu__list").not(".menu__list--drinks").removeClass("active")
        $(this).parent('li').addClass('active-span');
        $(".active-span").not($(this).parent("li")).removeClass("active-span")
    });
});
/* /menu */