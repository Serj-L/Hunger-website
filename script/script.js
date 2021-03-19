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

/* scroll-bar width calculation*/
const getscrollbarWidth = () => {
    const outer = document.createElement("div");

    outer.style.position = "adsolute";
    outer.style.top = "-9999px";
    outer.style.width = "50px";
    outer.style.height = "50px";
    outer.style.overflow = "scroll";
    outer.style.visibility = "hidden";
    document.body.appendChild(outer);
    const scrollbarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return scrollbarWidth;
}
/* /scroll-bar width calculation*/

/* burger menu */
$(document).ready(function() {
	$(".header__burger-btn").click(function(event) {
		$(".header__burger-btn, .header__nav-wrapper").toggleClass("active")
        if($(".header__burger-btn").hasClass("active"))
        $(".header__nav").css({"padding-right": getscrollbarWidth}),
        $("body").css({"padding-right": getscrollbarWidth}),
        $(".header__nav-link").click(function(event) {
            $(".header__burger-btn, .header__nav-wrapper").removeClass("active")
            $("body").removeClass("lock")
            $("body").css({"padding-right": ""})
            $(".header__nav").css({"padding-right": ""})
        }),
        $(window).resize(function() {
            $(".header__burger-btn, .header__nav-wrapper").removeClass("active")
            $("body").removeClass("lock")
            $("body").css({"padding-right": ""})
            $(".header__nav").css({"padding-right": ""})
        })
        else ($(".header__nav").css({"padding-right": ""})),
        $("body").css({"padding-right": ""})
        $("body").toggleClass("lock")
	});
/* /burger menu */

/* arrow-buttons (section Book-table, input People) */
$(document).on('click', '.input-down-button', function () {
    let total = $(this).prev().prev();
    if ( total.val() > 1 ) {
        total.val(+total.val() - 1);
    }
});
// Increase +1
$(document).on('click', '.input-up-button', function () {
    let total = $(this).prev();
    total.val(+total.val() + 1);
});
// ban on text entry
$(document).on('input', '.form-input--number-input', function () {
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    }
});
// hover on input
$(document).ready(function() {
    $('.input-up-button, .input-down-button').hover(function(event) {
        $(".number-input-wrapper").toggleClass("active")
    });
});
/* /arrow-buttons (section Book-table, input People) */

/* restourant menu */
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
/* /restourant menu */
});
