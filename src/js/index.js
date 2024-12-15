import $ from "jquery";
import "slick-carousel";
"use strict";

var Project = function Project() {
    this.sliderRight = ".js-slider-right";
    this.sliderLeft = ".js-slider-left";
    this.menu = ".js-menu"; //Меню на моб устройстве
    this.init();
};

Project.prototype = {
    init: function init() {
        this.initSliderRight();
        this.initSliderLeft();
        $(document).on("click", this.menu, $.proxy(this.eventMenu, this)); // Меню на мобильном устройстве
    },

    initSliderRight: function initSliderRight() {
        if ($(document).find(this.sliderRight).length > 0) {
            $(document).find(this.sliderRight).each(function () {
                setTimeout(() => {
                    $(this).slick({
                        dots: false,
                        arrows: false,
                        autoplay: true,
                        infinite: true,
                        speed: 1000,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        variableWidth: true,
                        rtl: true,
                    });
                }, 100);
            });
        }
    },
    initSliderLeft: function initSliderLeft() {
        if ($(document).find(this.sliderLeft).length > 0) {
            $(document).find(this.sliderLeft).each(function () {
                setTimeout(() => {
                    $(this).slick({
                        dots: false,
                        arrows: false,
                        autoplay: true,
                        infinite: true,
                        speed: 1000,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        variableWidth: true,
                     
                    });
                }, 800);
            });
        }
    },

    // Открытие меню
    eventMenu: function eventMenu(e) {
        if ($(document).find(this.menu).length > 0) {
            var $this = $(e.target).closest(this.menu);
            $this.closest(".header__burger").toggleClass("active");
            $this.closest(".header").find(".header__nav>ul").toggleClass("active");
        }
    },

};

var project = null;
$(document).ready(function () {
    project = new Project();

});

