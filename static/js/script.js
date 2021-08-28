$(document).ready(function () {
    //sticky menu  mynavbar when screen gets really small
    $('.menu-btn').click(function () {
        $('.myNavbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $(window).scroll(function () {
        //modify navbar wen scrolling down
        if (this.scrollY > 20) {
            $('.myNavbar').addClass("sticky");
        } else {
            $('.myNavbar').removeClass("sticky");
        }
        //scroll top button
        if ($(this).scrollTop() > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    //slide-up script
    $('.scroll-up-btn').click(function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    //popup script
    $('.contact .button').click(function () {
        $('.popup').addClass("popupshow");
        console.log("open popup");
    })
    $('.popup button i').click(function () {
        $('.popup').removeClass("popupshow");
        console.log("close popup")
    })

    //owl carousel script
    $('.carousel').owlCarousel({
        items: 1,
        margin: 20,
        loop: true,
        autoplay:true,
        autoplayTimeout: 7000,
        autoplaySpeed:6000,
        autoplayHoverPasue: true,
    });
    if (top.location.pathname == '/about' || top.location.pathname == '/') {
        // typing animation script
        var typed = new Typed(".typing",
            {
                strings: ["Software Engineer", "Data Engineer", "Freelancer"],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true
            });
    }
});

//add active to navbar link which is associated the curent page
$(function () {
    $('.myNavbar .menu li a').click(function () {
        $('.myNavbar .menu li').removeClass();
        $($(this).attr('href')).addClass('active');
    });
});

//process form submit
$('#form').on('submit', function (event) {
    console.log("comehere ");
    event.preventDefault();
    console.log("come to ajax")
    $.ajax({
        type: "POST",
        url: "{% url 'ajax_posting' %}",
        data: {
            name: $('#name').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            desc: $('#concern').val(),
           
            dataType: "json",
        },

        success: function (data) {
            $('#output').html(data.msg) /* response message */
        },

        failure: function () {

        }


    });


});