//--------------------isotope
(() => {
    var $grid = $('.grid').packery({
        itemSelector: '.grid-item',
        // columnWidth helps with drop positioning
        columnWidth: 410

    });

// make all items draggable
    var $items = $grid.find('.grid-item');
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


function initMap() {
    var uluru = {lat: -7.932621, lng:112.6396402 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: uluru,
        disableDefaultUI: true,
        scrollwheel:false
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon:'pin.png',
    });
}
