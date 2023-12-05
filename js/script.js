$(function () {

        //-------------scroll section-------
    var $main = $('.first > h1');
    var $mask = $('#clip-path');
    var $fontsize = $('#scroll'); 
    var $window = $(window);
    var mainhTop = $main.offset().top;
    var scrollhTop = $fontsize.offset().top;

    $window.scroll(function(){
        var scrolling = $(this).scrollTop();
        // console.log('scrollY', + scrolling);
        if( scrolling >= mainhTop ) {
            $main.css('animation-name', 'back', '2s', 'both');
            $mask.css('animation-name', 'remask', '1.5s','0.5s', 'both');
        }else {
            $main.css('animation-name', 'mov', '2s', 'both');
            $mask.css('animation-name', 'mask', '1.5s','0.5s', 'both');
        }
        if( scrolling >= scrollhTop - 600) {
            $fontsize.css('transform', 'scale3d(1, 1, 1)');
        }else {
            $fontsize.css('transform', 'scale3d(0.6, 0.6, 1)');
        }
    });

    //-------------second section-------
    var $rebtn = $('#record');
    var $skbtn = $('#skill');
    var $slideup = $('#slideup');

    $rebtn.on('click', function () {
        $slideup.children(':first').slideToggle();
    });
    $skbtn.on('click', function () {
        $slideup.children(':last').slideToggle();
    });
    $slideup.children().on('click', function (){
        $(this).slideUp();
    });

    //------------third section--------
    var $pobtn = $('#portfolio');
    var $slidedown = $('#slidedown > li');
    var delay = 300;

    $pobtn.on('click', down);

    $slidedown.each(function(index){
        $(this).addClass('op'+(index +1));
    });
    function down() {
        $('.op1').slideToggle( delay, 
        function(){
            $('.op2').slideToggle( delay,
            function(){
                $('.op3').slideToggle( delay,
                function(){
                    $('.op4').slideToggle( delay);
                });
            });
        });
    }
    //-----------overlay--------------
    var $conlist = $('#slidedown > li > a');
    var $overlay = $('#overlay');
    var $con = $('#con > ul');
    var $next = $('#next');
    var $prev = $('#prev');
    var interval = 3000;
    var timerId = window.setInterval(slide, interval);


    $overlay.on('wheel', function(e){
        // var overHeight = $overlay.offset().top;
        // console.log('overHeight =' +overHeight);
        // console.log('deltaY =' + e.originalEvent.deltaY);
        if( $overlay.is(':visible')){
            window.addEventListener('wheel', scrollDefault(e), { passive: false });
        }else if($overlay.is(':hidden')){
            window.removeEventListener('wheel', scrollDefault(e));
        }
    });

    function scrollDefault(e){
        e.preventDefault();
    }


    $conlist.on('click', function (e){
        e.preventDefault();
        $overlay.fadeIn( function (){
            $con.fadeIn();
        });
    });
    $con.parent().on({
        mouseenter : function(){
            window.clearInterval(timerId);
        },
        mouseleave : function(){
            timerId = window.setInterval(slide, interval);
        }
    });
    $next.on({
        click : function(e){
        e.stopPropagation();
        slide();
        },
        mouseenter : function(){
            window.clearInterval(timerId);
        },
        mouseleave : function(){
            timerId = window.setInterval(slide, interval);
        }
    });
    $prev.on({
        click: function(e){
        e.stopPropagation();
        $con.prepend($con.children(':last')).css({marginLeft: '-100%'})
        .animate({marginLeft: 0});
        },
        mouseenter : function(){
            window.clearInterval(timerId);
        },
        mouseleave : function(){
            timerId = window.setInterval(slide, interval);
        }
    });

    $overlay.on('click', function (){
        $con.fadeOut( function () {
            $overlay.fadeOut();
        });
    });
    $con.on('click', function (e){
        e.stopPropagation();
    });
    
    function slide() {
        $con.animate({ marginLeft: '-100%'}, function (){
            $con.removeAttr('style').children(':first').appendTo($con);
        });
    }

});