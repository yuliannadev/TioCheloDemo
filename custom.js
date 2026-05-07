

(function($) {
    "use strict";
	
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
				|| location.hostname == this.hostname) {
		
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				   if (target.length) {
					 $('html,body').animate({
						 scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
		  $('body').scrollspy({
			target: '#mainNav',
			offset: 54
		  });
		$(window).on('scroll', function () {
			if ($(window).scrollTop() > 50) {
				$('.header-block-top').addClass('fixed-menu');
			} else {
				$('.header-block-top').removeClass('fixed-menu');
			}
		});
		$('.navbar-nav li a').on("click", function(e) {
			$('.navbar-nav li').removeClass('active');
			var $parent = $(this).parent();
			if (!$parent.hasClass('active')) {
				$parent.addClass('active');
			}
		});
		
		$(document).ready(function() {
		  $("#owl-demo").owlCarousel({
			  autoPlay: 3000, 
			  items : 3,
			  itemsDesktop : [1199,3],
			  itemsDesktopSmall : [979,2]
		 
		  });
		});

$(document).ready(function() {
    if ($('.slider-nav').hasClass('slick-initialized')) {
        $('.slider-nav').slick('unslick');
    }
    if ($('.slider-single').hasClass('slick-initialized')) {
        $('.slider-single').slick('unslick');
    }
    
    $('.slider-nav').removeClass('slick-initialized slick-slider');
    $('.slider-nav .slick-list').children().unwrap();
    $('.slider-nav .slick-track').children().unwrap();
    
    console.log('Categorías disponibles:', $('.slider-nav .tab-title-menu').length);
    
    $('.slider-nav .tab-title-menu').each(function(index) {
        $(this).attr('data-tab-index', index);
        
        $(this).on('click', function(e) {
            e.preventDefault();
            
            var index = $(this).data('tab-index');
            console.log('Seleccionada pestaña:', index);
            
            $('.slider-single > div').hide();
            $('.slider-single > div').eq(index).show();
            
            $('.slider-nav .tab-title-menu').removeClass('is-active');
            $(this).addClass('is-active');
            
            $('html, body').animate({
                scrollTop: $('.slider-single').offset().top - 100
            }, 500);
        });
    });
    
    $('.slider-nav').css({
        'display': 'flex',
        'overflow-x': 'auto',
        'flex-wrap': 'nowrap',
        'gap': '10px',
        'padding': '10px 0'
    });
    
    $('.slider-nav .tab-title-menu').css({
        'flex': '0 0 auto',
        'min-width': '120px',
        'cursor': 'pointer',
        'padding': '15px 10px',
        'text-align': 'center',
        'border': '2px solid transparent',
        'border-radius': '5px',
        'transition': 'all 0.3s ease'
    });
    
    $('.slider-nav .tab-title-menu.is-active').css({
        'border-color': '#ff8c00',
        'background': 'rgba(255, 140, 0, 0.1)'
    });
    
    $('.slider-single > div').hide();
    $('.slider-single > div').first().show();
    
    $('.slider-nav .tab-title-menu').first().addClass('is-active');
});
$('.slider-nav .slick-slide').click(function() {
    console.log('Clicked!', $(this).data('slick-index'));
});
		 $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
			$('.slider-nav').slick('slickGoTo', currentSlide);
			var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
			$('.slider-nav .slick-slide.is-active').removeClass('is-active');
			$(currrentNavSlideElem).addClass('is-active');
		 });
		$('.slider-nav').on('click', '.slick-slide:not(.slick-cloned)', function (event) {
    event.preventDefault();

    var index = $(this).data('slick-index');
    $('.slider-single').slick('slickGoTo', index);
});

		
    		new WOW().init();

		var date = new Date();
		var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
		$('#date-picker').datetimepicker({
			format: 'DD.MM.YYYY',
			minDate: today
		});
		$('#time-picker').datetimepicker({
			format: 'LT'
		});

		$('.selectpicker').selectpicker();

		$(window).load(function() { 
			$("#status").fadeOut("slow"); 
			$("#loader").delay(200).fadeOut(); 
		})

			$(window).scroll(function(){
				if ($(this).scrollTop() > 100) {
					$('.scrollup').fadeIn();
				} else {
					$('.scrollup').fadeOut();
				}
			}); 
			
			$('.scrollup').click(function(){
				$("html, body").animate({ scrollTop: 0 }, 600);
				return false;
			});
		
		 $( "#color-panel .panel-button" ).click(function(){
			$( "#color-panel" ).toggleClass( "close-color-panel", "open-color-panel", 1000 );
			$( "#color-panel" ).toggleClass( "open-color-panel", "close-color-panel", 1000 );
			return false;
		});
		$('.switcher').click(function(){
			var title = jQuery(this).attr('title');		
			jQuery('#changeable-colors').attr('href', 'css/colors/' + title + '.css');				
			return false;
		});	
		
		jQuery(".orange-bg").on('click',function(){
			jQuery(".logo-header img").attr("src", "images/logo.png");
			jQuery(".footer-logo .text-center img").attr("src", "images/logo.png");
			return false;
		});

		jQuery(".strong-blue-bg").on('click',function(){
			jQuery(".logo-header img").attr("src", "images/logo2.png");
			jQuery(".footer-logo .text-center img").attr("src", "images/logo2.png");
			return false;
		});

		jQuery(".moderate-green-bg").on('click',function(){
			jQuery(".logo-header img").attr("src", "images/logo3.png");
			jQuery(".footer-logo .text-center img").attr("src", "images/logo3.png");
			return false;
		});

		jQuery(".vivid-yellow-bg").on('click',function(){
			jQuery(".logo-header img").attr("src", "images/logo4.png");
			jQuery(".footer-logo .text-center img").attr("src", "images/logo4.png");
			return false;
		});
	
		$.fn.parallax = function(options) {
 
			var windowHeight = $(window).height();
	 
			var settings = $.extend({
				speed        : 0.15
			}, options);
	 
			return this.each( function() {
	 
				var $this = $(this);
	 
				$(document).scroll(function(){
	 
						var scrollTop = $(window).scrollTop();
							var offset = $this.offset().top;
							var height = $this.outerHeight();
	 
				if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
					return;
				}
	 
				var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
	 
					$this.css('background-position', 'center ' + yBgPosition + 'px');
					
				});
			});
		}
	
		$('.parallax').parallax({
			speed : 0.15
		});

			 jQuery(document).ready(function() {
				$('#contact-form').submit(function() {
					var action = $(this).attr('action');
					$("#message").slideUp(750, function() {
						$('#message').hide();
						$('#submit')
							.after('<img src="images/ajax-loader.gif" class="loader" />')
							.attr('disabled', 'disabled');
						$.post(action, {
								first_name: $('#first_name').val(),
								email: $('#email').val(),
								phone: $('#phone').val(),
								no_of_persons: $('#no_of_persons').val(),
								preferred_food: $('#preferred_food').val(),
								occasion: $('#occasion').val(),
								verify: $('#verify').val()
							},
							function(data) {
								document.getElementById('message').innerHTML = data;
								$('#message').slideDown('slow');
								$('#contact-form img.loader').fadeOut('slow', function() {
									$(this).remove()
								});
								$('#submit').removeAttr('disabled');
								if (data.match('success') != null) $('#contact-form').slideUp('slow');
							}
						);
					});
					return false;
				});
			});
		 
	
		// Unmute video on user interaction
		$(document).on('click', function() {
			const video = document.getElementById('banner-video');
			if (video && video.muted) {
				video.muted = false;
			}
		});
	
})(jQuery);


(function($) {
    "use strict";
    
    // Función para ocultar todas las secciones de menú
    function ocultarTodasLasSecciones() {
        $('.menu-carta-section').hide();
    }
    
    // Función para mostrar una sección específica
    function mostrarSeccion(idSeccion) {
        // MOSTRAR TODO EL CONTENEDOR DEL MENÚ (FONDO + TÍTULO + SECCIONES)
        $('#menu-completo-contenedor').fadeIn(600);
        
        ocultarTodasLasSecciones();
        
        // Mostrar la sección seleccionada
        $(idSeccion).fadeIn(600);
        
        // Scroll suave hacia la sección
        $('html, body').animate({
            scrollTop: $(idSeccion).offset().top - 100
        }, 800);
    }
    
    // Al cargar la página
    $(document).ready(function() {
        // Ocultar todo el contenedor del menú al inicio
        $('#menu-completo-contenedor').hide();
        
        // Configurar los enlaces de los destacados
        $('.destacado-enlace').on('click', function(e) {
            e.preventDefault();
            
            // Obtener el href del enlace (ej: #menu-hamburguesas)
            var destino = $(this).attr('href');
            
            // Mostrar la sección correspondiente
            mostrarSeccion(destino);
        });
        
        // Si viene de un enlace directo (con hash en la URL)
        if(window.location.hash) {
            var hash = window.location.hash;
            if($(hash).length) {
                mostrarSeccion(hash);
            }
        }
    });
    
})(jQuery);

