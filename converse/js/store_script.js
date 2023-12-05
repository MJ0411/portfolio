$(function(){

    //--------hambgbtn-------------------
    var $hambg_btn = $('.menu-btn');
    var $submn = $('#submenu > div');

    $hambg_btn.on('click', function(){
        $(this).toggleClass('on');
        if($submn.parent().is(':hidden')) {
            $submn.parent().slideDown();
        } else {
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

    //--------scroll-------------------
    var $fon1 = $('#fon1 > ul > li');
    var $fonh1 = $('section:nth-child(2) > .inner > h1');
    var $sec2 = $('section:nth-child(3) > .inner > img');
    var $sec4 = $('section:nth-child(5) > .inner > img');
    var $sec6 = $('section:nth-child(7) > .inner > div > img');
    
    $(window).scroll(function(){
        var $this = $(this);
        var scrolling = $this.scrollTop();

        if(scrolling >= 100) {
            $hambg_btn.css('opacity', '1');
        } else {
            $hambg_btn.css('opacity', '0');
        }
        if(scrolling >= 200) {
            $fonh1.css('animation-name', 'fon1_out');
            $fon1.eq(0).css('animation-name', 'fon1_out');
            $fon1.eq(1).css('animation-name', 'fon1_out');
            $fon1.eq(2).css('animation-name', 'fon1_out');
            $fon1.eq(3).css('animation-name', 'fon1_out');
        } else {
            $fonh1.css('animation-name', 'fon1_in');
            $fon1.eq(0).css('animation-name', 'fon1_in');
            $fon1.eq(1).css('animation-name', 'fon1_in');
            $fon1.eq(2).css('animation-name', 'fon1_in');
            $fon1.eq(3).css('animation-name', 'fon1_in');
        }
        if(scrolling >= $('#fon2 > .bnbtn').offset().top) {
            $sec2.eq(0).css('animation-name', 'opct_in');
        } else {
            $sec2.eq(0).css('animation-name', 'opct_out');
        }
        if(scrolling >= $('section:nth-child(4) > .inner > .goods > ul').offset().top) {
            $sec4.eq(0).css('animation-name', 'opct_in');
        } else {
            $sec4.eq(0).css('animation-name', 'opct_out');
        }
        if(scrolling >= $('section:nth-child(6) > .inner > .goods > ul').offset().top) {
            $sec6.eq(0).css('animation-name', 's6_shose_in');
            $sec6.eq(1).css('animation-name', 's6_path_in');
        } else {
            $sec6.eq(0).css('animation-name', 's6_shose_out');
            $sec6.eq(1).css('animation-name', 's6_path_out');
        }
    });

});