/**
  * isMobile
  * responsiveMenu
  * headerFixed
  * flatIconboxCarousel
  * blogCarousel
  * ClientCarousel
  * flatTeam
  * googleMap
  * portfolioIsotope
  * goTop
  * parallax
*/

;(function($) {

   'use strict'

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

	var responsiveMenu = function() {
        var menuType = 'desktop';

        $(window).on('load resize', function() {
            var currMenuType = 'desktop';

            if ( matchMedia( 'only screen and (max-width: 1199px)' ).matches ) {
                currMenuType = 'mobile';
            }

            if ( currMenuType !== menuType ) {
                menuType = currMenuType;

                if ( currMenuType === 'mobile' ) {
                    var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
                    var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');
                    var $account = $('.box-account').attr('class', 'box-account-mobi');

                    $('#header').after($mobileMenu);
                    $('#mainnav-mobi').append($account);
                    hasChildMenu.children('ul').hide();
                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                    $('.btn-menu').removeClass('active');
                } else {
                    var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');

                    $desktopMenu.find('.submenu').removeAttr('style');
                    $('#header').find('.nav-wrap').append($desktopMenu);
                    $('.btn-submenu').remove();
                    var $pcAccount = $('.box-account-mobi').attr('class', 'box-account');
                        $('#logo').after($pcAccount);
                }
            }
        });

        $('.btn-menu').on('click', function() {
            $('#mainnav-mobi').slideToggle(300);
            $(this).toggleClass('active');
        });

        $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
            $(this).toggleClass('active').next('ul').slideToggle(300);
            e.stopImmediatePropagation()
        });
    }

    var headerFixed_s1 = function() {
        var nav = $('.header.bg-color');
            if ( nav.size() !== 0 ) {

            $(window).on('load', function(){
            var header = $('.header.bg-color');
            var offsetTop = $('.header.bg-color').offset().top;
            var headerHeight = $('.header.bg-color').height();
            var buffer  = $('<div>', { height: headerHeight }).insertAfter(header);
                buffer.hide();

                $(window).on('load scroll', function(){
                    if ( $(window).scrollTop() > offsetTop  ) {
                        $('.header.bg-color').addClass('fixed-header');
                        buffer.show();
                    } else {
                        $('.header.bg-color').removeClass('fixed-header');
                        buffer.hide();
                    }
                })

            }); // headerFixed style1
        }
    };

    var showSignUp = function() {
            var showSignUp = $('li.sign-up a');
            showSignUp.on('click',function(e) {
                e.stopPropagation();
                $(this).closest('.boxed').children('.box-sign-up').addClass('open');
                $('body').append('<div class="overlay"></div>');
            });
            $('.box-sign-up').on('click', function(e){
                e.stopPropagation();
            });
            $('body').on('click', function(){
               $('.boxed').children('.box-sign-up').removeClass('open');
                $('.overlay').remove();
            })
        }; // Show Search Button

    var videoPopup =  function() {
        $(".fancybox").on("click", function(){
            $.fancybox({
              href: this.href,
              type: $(this).data("type")
            }); // fancybox
            return false
        }); // on
    }; // Video Popup

    var ShowPopup = function() {
      var popupFinish = $('.space-drop-container .upload-file label');
      var popupFinishClose = $('.popup-upload .delete');

      // Order
      popupFinish.on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        $(this).closest('.boxed').children('.popup-upload').addClass('open');
        $('body').append('<div class="modal-backdrop fade show"></div>');
      });
      popupFinishClose.on('click', function() {
        $(this).closest('.boxed').children('.popup-upload').removeClass('open');
        $('.modal-backdrop.fade.show').remove();
      });
      $('.popup-upload').on('click', function(e) {
        e.stopPropagation();
      });
      $('body').on('click', function() {
        $('.boxed').children('.popup-upload').removeClass('open');
        $('.modal-backdrop.fade.show').remove();
      });

      var popupReceiver = $('.file-receiver');
      var popupReceiverClose = $('.popup-receiver .delete');

      // Order
      popupReceiver.on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        $(this).closest('.boxed').children('.popup-receiver').addClass('open');
        $('body').append('<div class="modal-backdrop fade show"></div>');
      });
      popupReceiverClose.on('click', function() {
        $(this).closest('.boxed').children('.popup-receiver').removeClass('open');
        $('.modal-backdrop.fade.show').remove();
      });
      $('.popup-receiver').on('click', function(e) {
        e.stopPropagation();
      });
      $('body').on('click', function() {
        $('.boxed').children('.popup-receiver').removeClass('open');
        $('.modal-backdrop.fade.show').remove();
      });
    };

    var removePreloader = function() {
        $(window).load(function() {
            $('#preloader').css('opacity', 0);
            setTimeout(function() {
                $('#preloader').hide(); }, 1000
            );
        });

    };


   	// Dom Ready
	$(function() {
        if ( matchMedia( 'only screen and (min-width: 1199px)' ).matches ) {
            headerFixed_s1();
        }
        // responsiveMenu();
        // showSignUp();
        // videoPopup();
        // tabs();
        ShowPopup();
        removePreloader();
   	});

})(jQuery);
