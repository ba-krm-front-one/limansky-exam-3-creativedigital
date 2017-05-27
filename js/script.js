//--------------------isotope
(() => {
    var $grid = $('.grid').packery({
        itemSelector: '.grid-item',
        // columnWidth helps with drop positioning
        columnWidth: 410

    });

// make all items draggable
    var $items = $grid.find('.grid-item').draggable();
// bind drag events to Packery
    $grid.packery( 'bindUIDraggableEvents', $items );

})();


//----------------------scroll
(() => {
$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        if ($.browser.safari) {
            $('body').animate({scrollTop: destination}, 1500);
        } else {
            $('html').animate({scrollTop: destination}, 1500);
        }
        return false;
    });
});
})();


$('.carousel').flickity({
    arrowShape: {
        x0: 10,
        x1: 40, y1: 50,
        x2: 80, y2: 50,
        x3: 50
    }
});





//--------------------------------------------MAP
;(function () {
    window.onload = function () {
        var map,
            point = {lat: 48.734294, lng: 37.579304},
            iv1Content = document.querySelector('.info-window');

        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: point,
                zoom: 17,
                disableDefaultUI: true
            });

            var marker = new google.maps.Marker({
                position: point,
                map: map,
                icon: {
                url: "img/bbb.png",
                scaledSize: new google.maps.Size(32, 42)
            }
            });

            var infowindow = new google.maps.InfoWindow({
                content: iv1Content
            });
            marker.addListener('click', function () {
                infowindow.open(map, marker);
                iv1Content.style.opacity = 1;
            });
        }
        initMap();
    }
})();


