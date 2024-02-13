$(document).ready(function(){
    $('#nav > ul > li').on('mouseenter', function(){
        $(this).find('.floor2').stop().fadeIn(150);
    });
    $('#nav > ul > li').on('mouseleave', function(){
        $('.floor2').fadeOut(150);
    });

    $(window).on('scroll', function(){
        if($(window).scrollTop() > $('#main_title').offset().top){
            $('body').addClass('fixed_header');
            $('#header').addClass('scroll_over');
        }
        else{
            $('body').removeClass('fixed_header');
            $('#header').removeClass('scroll_over');
        }
    });

    $('.qst_btn ul li').on('click', function(e){
        $(this).addClass('active').siblings().removeClass('active');
        var tg = $(this);
        var idx = tg.index();

        $('.qst_box').eq(idx).addClass('active').fadeIn(150).siblings('.qst_box').removeClass('active').fadeOut(150);
    });

    $('.qst_floor1 > li > button').on('click', function(e){
        $(this).parent('li').toggleClass('active');
        if($(this).parent('li').hasClass('active')){
            $(this).siblings('.qst_floor2').stop().slideDown(300);
        }
        else{
            $(this).siblings('.qst_floor2').stop().slideUp(300);
        }
    });

    $('.insights_desc .read_more_type2 a').on('click', function(e){
        e.preventDefault();
        $(this).parent().parent().siblings('.insights_desc_info').addClass('on');
    });

    $('.hta_search > a').on('click', function(){
      setTimeout(() => {
        $('#htasp_input').focus(); 
      }, 500);
        $('.hta_search_popup_bg').addClass('active');
    });
    $('.htasp_close button').on('click', function(e){
        e.preventDefault();
        $('.hta_search_popup_bg').removeClass('active');
    });

    $('.mobile_menu_btn button').on('click', function(e){
        e.preventDefault();
        $('body').addClass('mobile_menu_active');
    });

    var mobNavListBtn = $('.mob_floor1 > li > a > button');
    var mobNavList = $('.mob_floor2');

    mobNavListBtn.on('click',function(){
    $(this).toggleClass('active').parent().parent().siblings().find(mobNavListBtn).removeClass('active');
    
    if(mobNavListBtn.hasClass('active')){
      $(this).parent().siblings(mobNavList).slideDown(300);
      $(this).parent().parent().siblings().find(mobNavList).slideUp(300);
    }

    else if(mobNavListBtn.not('.active')){
      $(this).parent().siblings(mobNavList).slideUp(300);
    }

  });

  $(document).on('mouseup', function(e){
    var mob_nav_pop = $('.mobile_nav');
    var mob_nav_body = $('body');
    if(mob_nav_pop.has(e.target).length === 0){
      mob_nav_body.removeClass('mobile_menu_active');
    }
  });

    $(document).on('mouseup', function(e){
        var idi_txt_pop = $('.idi_txt_box');
        var idi_txt_bg = $('.insights_desc_info');
        if(idi_txt_pop.has(e.target).length === 0){
          idi_txt_bg.removeClass('on');
        }
      });

      $('#from').datepicker({
        dateFormat: "yy-mm-dd",
        minDate: 0,
      });
      $('#to').datepicker({
        dateFormat: "yy-mm-dd",
      });


      var el = document.querySelector('#counter_1');
 
      od = new Odometer({
      el: el,
      value: 0,
      
      // Any option (other than auto and selector) can be passed in here
      format: '(,ddd)',
      });
      
      od.update(9500)
      // or
      el.innerHTML = 9500
     
      var el2 = document.querySelector('#counter_2');
     
      od2 = new Odometer({
      el: el2,
      value: 0,
      
      // Any option (other than auto and selector) can be passed in here
      format: '(,ddd)',
      });
      
      od2.update(1200)
      // or
      el2.innerHTML = 1200
     
      var el3 = document.querySelector('#counter_3');
     
      od3 = new Odometer({
      el: el3,
      value: 0,
      
      // Any option (other than auto and selector) can be passed in here
      format: '(,ddd)',
      });
      
      od3.update(7771)
      // or
      el3.innerHTML = 7771
     
      var el4 = document.querySelector('#counter_4');
     
      od4 = new Odometer({
      el: el4,
      value: 0,
      
      // Any option (other than auto and selector) can be passed in here
      format: '(,ddd)',
      });
      
      od4.update(139)
      // or
      el4.innerHTML = 139
     
      var el5 = document.querySelector('#counter_5');
     
      od5 = new Odometer({
      el: el5,
      value: 0,
      
      // Any option (other than auto and selector) can be passed in here
      format: '(,ddd)',
      });
      
      od5.update(114)
      // or
      el5.innerHTML = 114

    
        
});





