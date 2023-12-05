$(function(){

    //----------------햄버거 메뉴바 이벤트-------------------------------------
    var $hambg_btn = $('.menu-btn');
    var $submn = $('#submenu > div');

    $hambg_btn.on('click', function(){
        $(this).toggleClass('on');
        if ($submn.parent().is(':hidden')) {
            $submn.parent().slideDown();
        }
        else {
            $submn.parent().slideUp();
        }
    });
    $submn.parent().on('click', function() {
        $(this).slideUp();
        $hambg_btn.toggleClass('on');
    });
    $submn.children().on('click', function(e){
        e.stopPropagation();
    });

    //----------------스크롤 이벤트 변수-------------------------------------
    var $window = $(window);
    var viewTop = $window.height();
    var num = 200;
    var $first_h1 = $('#first > .inner > h1');
    var $first_h2 = $('#star');
    var first_h2Top = $first_h2.offset().top;
    var $shose = $('#main_shose > img');

    var $second_h2 = $('#second > .inner > h2');
    var second_h2Top = $second_h2.parent().offset().top;
    var $second_p = $('#second > .inner > p');

    var $third_h2 = $('#third > .inner > h2');
    var third_h2Top = $third_h2.parent().offset().top;

    var $fourth_h2 = $('#fourth > .inner > div:first-child').children();
    var fourth_h2Top = $fourth_h2.parent().offset().top;
    var $fourth_p = $('#fourth > .inner > div > p');

    var $fifth_img = $('#fifth > .inner > img');
    var fifth_imgTop = $fifth_img.parent().offset().top;

    var $sixth_h2 = $('#sixth > .inner > h2');
    var sixth_h2Top = $sixth_h2.parent().offset().top;

    var $lastbn_shose = $('#lastbn > div:nth-child(1)');
    var $lastbn_path = $('#lastbn > div:nth-child(2)');
    var lastbnTop = $('#lastbn').offset().top;

     //--------path1 코드----------------------------------------------------
    var $star_path = $('#star_path');
    var $path1 = document.querySelector('#path1');
    var path1Length = $path1.getTotalLength();

    $path1.style.strokeDasharray = path1Length;
    $path1.style.strokeDashoffset = calcDashoffset(viewTop * 0.6, $star_path, path1Length);

    function calcDashoffset(scrollY, element, length) {
        var ratio = (scrollY - element.offset().top) / element.height();
        var value = length - (length * ratio);
        return value < 0 ? 0 : value > length ? length : value;
    }
    function drawStar() {
        var scrollY = $window.scrollTop() + (viewTop * 0.6);
        $path1.style.strokeDashoffset = calcDashoffset(scrollY, $star_path, path1Length);
    }
    
    //--------path2 코드----------------------------------------------------
    var $chuck_path = $('#chuck');
    var $path2 = document.querySelector('#path2');

    drawChuck( $chuck_path, $path2);

    function drawChuck(container, line) {
        var pathLength = line.getTotalLength();
        var pathTop = container.offset().top;
        var pathHeight = container.height();
        var scrollY = $window.scrollTop() + (viewTop * 1.1);
        var ratio = (scrollY - pathTop) / pathHeight;
        var length = ratio * pathLength;
        line.style.strokeDasharray = [length, pathLength].join(' ');
    }

    //---------------스크롤 이벤트----------------------------------------------------------

    $window.scroll(function(){
        var $this = $(this);
        var scrolling = $this.scrollTop();

    //----------------1th 이벤트-------------------------------------
        if(scrolling >= 100) {
            $hambg_btn.css('opacity', '0.8');
        }else {
            $hambg_btn.css('opacity', '0');
        }
        if(scrolling >= first_h2Top) {
            $first_h1.css('animation-name', 'section1h1_out', '2s', 'both');
        }else {
            $first_h1.css('animation-name', 'section1h1_in', '2s', 'both');
        }
        
        if(scrolling >= 1) {
            $shose.next().removeClass('red').addClass('yellow');
            $first_h2.removeClass('up').addClass('down');
        }else {
            $shose.next().removeClass('yellow').addClass('red');
            $first_h2.removeClass('down').addClass('up');

        }
    //----------------2th 이벤트-------------------------------------
        if(scrolling >= second_h2Top - num) {
            $second_h2.css('animation-name', 'section2h2_in', '2s', 'both');
            $second_p.css('animation-name', 'section2p_in', '2s', 'both');
        }else {
            $second_h2.css('animation-name', 'section2h2_out', '2s', 'both');
            $second_p.css('animation-name', 'section2p_out', '2s', 'both');
        }
    //----------------3th 이벤트-------------------------------------
        if(scrolling >= third_h2Top) {
            $third_h2.css('animation-name', 'section3h2_in');
        }else {
            $third_h2.css('animation-name', 'section3h2_out');
        }
        drawStar();
        
    //---------------4th 이벤트--------------------------------------    
        if(scrolling >= fourth_h2Top - num) {
            $fourth_h2.css('animation-name', 'section4h2_in');
            $fourth_p.css('animation-name', 'section4p_in');
        }else {
            $fourth_h2.css('animation-name', 'section4h2_out');
            $fourth_p.css('animation-name', 'section4p_out');
        }
    //---------------5th 이벤트--------------------------------------    
        if(scrolling >= fifth_imgTop -num) {
            $fifth_img.css('animation-name', 'rotate_in')
        }else {
            $fifth_img.css('animation-name', 'rotate_out')
        }
    //---------------6th 이벤트--------------------------------------    
        if(scrolling >= sixth_h2Top - num) {
            $sixth_h2.css('animation-name', 'section3h2_in');
        }else {
            $sixth_h2.css('animation-name', 'section3h2_out');
        }
        drawChuck( $chuck_path, $path2);

    //---------------7th 이벤트--------------------------------------    
        if(scrolling >= lastbnTop - 100) {
            $lastbn_shose.css('animation-name', 'lastbn_shose_in');
            $lastbn_path.css('animation-name', 'lastbn_path_in');
        }else {
            $lastbn_shose.css('animation-name', 'lastbn_shose_out');
            $lastbn_path.css('animation-name', 'lastbn_path_out');
        }
        // console.log('scrollY', + scrolling);
        // console.log('viewTop', + viewTop);
        // console.log('first_h2Top', + first_h2Top);
        // console.log('first_starTop', + first_starTop);

    });
    //---------------5th 슬라이드 이벤트--------------------------------------    

    var $shoseList1 = $('.ctaylor > ul');
    var $shoseList2 = $('.c70 > ul');
    var interval = 2000;
    var timeId1 = window.setInterval(slideList1, interval);
    var timeId2 = window.setInterval(slideList2, interval);

    $shoseList1.parent().on({
        mouseenter : function() {
            window.clearInterval(timeId1);
        },
        mouseleave : function() {
            timeId1 = window.setInterval(slideList1, interval);
        }
    });
    $shoseList2.parent().on({
        mouseenter : function() {
            window.clearInterval(timeId2);
        },
        mouseleave : function() {
            timeId2 = window.setInterval(slideList2, interval);
        }
    });
    function slideList1() {
        $shoseList1.animate({marginLeft: '-33.33%'}, function(){
            $shoseList1.removeAttr('style').children(':first').appendTo(this);
        });
    }
    function slideList2() {
        $shoseList2.animate({marginLeft: '-33.33%'}, function(){
            $shoseList2.removeAttr('style').children(':first').appendTo(this);
        });
    }

});