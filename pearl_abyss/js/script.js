$(function(){

    //----------------햄버거 메뉴바 이벤트-------------------------------------
    var $hambg_btn = $('.menu-btn');
    var $submn = $('#submenu > div');
    var $submn_bt = $('#submenu > div > ul > li');

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
    $submn_bt.children().on('click', function() {
        $submn.parent().slideUp();
        $hambg_btn.toggleClass('on');
        var move = $(this.hash).offset().top;
        $('html, body').animate({scrollTop : move},500);
    });
    $submn.children().on('click', function(e){
        e.stopPropagation();
    });

    

    //----------------nav 이벤트-------------------------------------
    var $nav = $('#nav > ul > li > a');
    $nav.on('click', function(e){
        e.preventDefault();
        var move = $(this.hash).offset().top;
        $('html, body').animate({scrollTop : move},500);
    });

    //----------------marquee 이벤트-------------------------------------
    var $marquee = $('#sec3_marquee > div > ul');

    $marquee.clone().appendTo($marquee.parent());
    
    //----------------스크롤 이벤트-------------------------------------
    var $window = $(window);
    var $main_logo = $('#main_logo > div');
    var $introduct = $('#introduction');
    var $lineY = $('#title_text > p > span');
    var $article = $('#title_text');
    var $sec2_bn = $('#sec2_bn > div');
    var $rollup = $('#sec2_rollup > ul > li');
    var $sec3_bn = $('#sec3_bn > div');
    var $board = $('#board_content > ul > li');
    
    
    $window.scroll(function(){
        var value = 300;
        var $this = $(this);
        var scrollY = $this.scrollTop();
        console.log(scrollY);
        
        if(! $main_logo.is('active') && scrollY >= value) {
            $main_logo.addClass('active');
        } else if(! $main_logo.is('active') && scrollY <= value) {
            $main_logo.removeClass('active');
        }
        if(scrollY >=$introduct.offset().top) {
            $hambg_btn.css('opacity', '0.8');
        } else {
            $hambg_btn.css('opacity', '0');
        }
        if(! $lineY.is('on') && scrollY >= $introduct.offset().top) {
            $lineY.addClass('on');
            $lineY.parent().addClass('on');
            $article.next().children().addClass('on');
        } else if(! $lineY.is('on') && scrollY <= $introduct.offset().top) {
            $lineY.removeClass('on');
            $lineY.parent().removeClass('on');
            $article.next().children().removeClass('on');
        }
        if(! $sec2_bn.is('on') && scrollY >= $sec2_bn.offset().top - value) {
            $sec2_bn.addClass('on');
            $rollup.addClass('on');
        } else  if(! $sec2_bn.is('on') && scrollY <= $sec2_bn.offset().top - value) {
            $sec2_bn.removeClass('on');
            $rollup.removeClass('on');
        }
        if(! $sec3_bn.parent().is('on') && scrollY >= $sec3_bn.parent().offset().top - value) {
            $sec3_bn.parent().addClass('on');
            $sec3_bn.children().addClass('on');
        } else if(! $sec3_bn.parent().is('on') && scrollY <= $sec3_bn.parent().offset().top - value){
            $sec3_bn.parent().removeClass('on');
            $sec3_bn.children().removeClass('on');
        }
        if(! $game_contain.is('on') && scrollY >= $game_wrap.parent().offset().top - value) {
            $game_contain.addClass('on');
            $game_wrap.eq(0).addClass('on');
            $game_nav.eq(0).addClass('active');
        } else if(! $game_contain.is('on') && scrollY <= $game_wrap.parent().offset().top - value){
            $game_contain.removeClass('on');
            $game_wrap.removeClass('on');
            $game_nav.removeClass('active');
        }
        if(! $board.children().is('on') && scrollY >= $('#news').offset().top - value) {
            $board.children().addClass('on');
        } else if (! $board.children().is('on') && scrollY <= $('#news').offset().top - value) {
            $board.children().removeClass('on');
        }

        $section.eq(0).children().css('transform', 'translateY('+(scrollY-parallaxTop) *0.2+ 'px'+')');
        $section.eq(1).css('transform', 'translateY('+(scrollY-parallaxTop) * (-0.005)+ 'px'+')');
        $section.eq(2).css('transform', 'translateY('+(scrollY-parallaxTop) * (-0.06)+ 'px'+')');
    });
    
    
    
    var $section = $('#sec4_wrap > div');
    var parallaxTop = $section.offset().top;

    var $game_contain = $('#game_container');
    var $game_nav = $('#game_nav > ul > li > a');
    var $game_wrap = $('.game_wrap');
    
    $game_nav.on('click', function(e){
        e.preventDefault();
        $game_nav.removeClass('active');
        $(this).addClass('active');
        var target = $(this).attr('href');
        $(target).addClass('on').siblings($game_wrap).removeClass('on');
        
    });

    // window.addEventListener('resize', function(){
    //     windowHeight = $window.height();
    // });

});