var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
script.type = 'text/javascript';
script.onload = function () {
    fetch('/layout/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        });

    $(document).ready(function () {
        var prevScrollPos = $(window).scrollTop();

        $(window).scroll(function () {
            var currentScrollPos = $(window).scrollTop();
            var navbarHeight = $('.navbar').outerHeight();

            if (prevScrollPos > currentScrollPos) {
                $('.navbar').css('top', '0');
            } else {
                $('.navbar').css('top', '-' + navbarHeight + 'px');
            }

            prevScrollPos = currentScrollPos;
        });
    });
};

document.head.appendChild(script);