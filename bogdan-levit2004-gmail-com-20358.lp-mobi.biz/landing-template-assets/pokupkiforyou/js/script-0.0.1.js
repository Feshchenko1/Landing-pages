$(document).ready(function(){
    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    })

    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        smartSpeed: 300,
        mouseDrag: false,
        pullDrag: false,
        nav: true,
        navText: ""
    });

    var itembox = $(".review_radio");
        itembox.click(function(){
            var _this = $(this);
            _this.addClass("active").siblings(itembox).removeClass("active").find("input[type='radio']").removeAttr("checked");

            if(_this.hasClass('active')){
              _this.find("input[type='radio']").attr("checked","checked");
            }
        });


        var itembox = $(".review_radio");
        itembox.click(function(){
            itembox.hide();
            $(".review_result").fadeIn();

            $(".green_result").addClass("green_view");
            $(".red_result").addClass("red_view");
            $(".blue_result").addClass("blue_view");
        });


        // Стилизация input[type=file]
        $('.min_input .button').click(function(){
            $(this).siblings('input[type=file]').click();
            return false;
        });



    now = new Date();
    var perem = (24-now.getHours())*3600;
    $(".el-timer").attr("data-timer", perem);
    $(".el-timer").TimeCircles({
        "animation": "smooth",
        "bg_width": 0.2,
        "fg_width": 0.03,
        "circle_bg_color": "#fff",
        "time": window.timerData
    });

    now = new Date();
    var perem = (24-now.getHours())*3600;
    $(".el-timer2").attr("data-timer", perem);
    $(".el-timer2").TimeCircles({
        "animation": "smooth",
        "bg_width": 0.2,
        "fg_width": 0.03,
        "circle_bg_color": "#f2f2f2",
        "time": window.timerData
    });

    $('[name="country"]').on('change', function() {
        var geoKey = $(this).find('option:selected').val();
        var data = $jsonData.prices[geoKey];
        var price = data.price;
        var oldPrice = data.old_price;
        var currency = data.currency
        $("[value = "+geoKey+"]").attr("selected", true).siblings().attr('selected', false);

        $('.price_land_s1').text(price);
        $('.price_land_s2').text(oldPrice);
        $('.price_land_curr').text(currency);
    });

    lastpack(2, 60, 'lastpack');


});
