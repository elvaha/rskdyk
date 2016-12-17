$(window).ready(function() {

    $('.navigation__menu-btn').click(function(event) {

        event.preventDefault();

        var navigation = $('.navigation');
        var navContent = $('.navigation__content');
        var rootMenu = $('.navigation__root-menu');

        if($(navContent).hasClass('navigation__content--expand')) {

            $(navContent).removeClass('navigation__content--scroll');
            $(navContent).removeClass('navigation__content--expand');
            $(navContent).one('transitionend', function() {
                $('.navigation__submenu').hide();
                $(navigation).removeClass('navigation--expand');
            });

        } else {

            $(navigation).addClass('navigation--expand');
            $(navContent).addClass('navigation__content--expand');
            $(navContent).one('transitionend', function() {
                $(navContent).addClass('navigation__content--scroll');
            });

        }

    });

    $('.navigation__menu-item').click(function(event) {

        if($(window).width() < 970) {

            if($(this).find('> ul').length > 0) {

                event.preventDefault();
                var submenu = $(this).find('> ul').first();
                $(submenu).toggle();

            }

        } else {

            if($(this).find('> ul').length > 0) {
                event.preventDefault();
            }

        }

    });

    $('.navigation__menu-item').hover(function() {

        if($(window).width() > 969) {
            $(this).find('> ul').toggle();
        }

    }, function() {

        if($(window).width() > 969) {
            $(this).find('> ul').toggle();
        }
        
    });

    var flagBefore = true;
    var flagAfter = false;

    if($(window).width() > 969) {

        if($(window).scrollTop() >= $('.fold').height() - 100) {
            if(!$('.navigation').hasClass('navigation--transparent-bg')) {
                $('.navigation').addClass('navigation--transparent-bg')
            }
        }

    }



    $(window).on('scroll', function() {

        if($(window).scrollTop() >= $('.fold').height() - 100) {

            if(flagAfter) {

                if($(window).width() > 969) {

                    if(!$('.navigation').hasClass('navigation--transparent-bg')) {
                        $('.navigation').addClass('navigation--transparent-bg')
                    }

                }

                flagAfter = false;
                flagBefore = true;
            }

        } else {

            if(flagBefore) {

                if($(window).width() > 969) {

                    if($('.navigation').hasClass('navigation--transparent-bg')) {
                        $('.navigation').removeClass('navigation--transparent-bg')
                    }
                    
                }

                flagBefore = false;
                flagAfter = true;
            }

        }
    });

    $('.navigation__submenu-item').click(function(event) {
        event.stopPropagation();
    });

    var membershipTitle = $('.membership__title');

    if (membershipTitle.length > 0) {

        var maxHeight = 0;

        for (var i = 0; i < membershipTitle.length; i++)
            if ($(membershipTitle[i]).height() > maxHeight)
                maxHeight = $(membershipTitle[i]).height();

        for (var i = 0; i < membershipTitle.length; i++)
            $(membershipTitle[i]).height(maxHeight);

    }

    var membershipDesc = $('.membership__description');

    if(membershipDesc.length > 0) {

        var maxHeight = 0;

        for(var i = 0; i<membershipDesc.length; i++) 
            if($(membershipDesc[i]).height() > maxHeight) 
                maxHeight = $(membershipDesc[i]).height();

        for(var i = 0; i<membershipDesc.length; i++) 
            $(membershipDesc[i]).height(maxHeight);

    }

});

