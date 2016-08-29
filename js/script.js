$(document).ready(function() {

    var Slider = function(container) {
        var $container = $(container);

        var sliderHandler = function(key) {
            if (key) {
                if(count < arraySize) {
                    return arrayImg[count];
                }

                else if(count == arraySize) {
                    count = 0;
                    return sliderHandler(true);
                }
            } else {
                if(count == 0) {
                    count = arraySize;
                    return sliderHandler(false);
                } else {
                    return arrayImg[--count];
                }
            }
        };

        var
            imgSlider = $container.find(".slider_photo"),
            startImg = imgSlider.attr("src"),
            arrayImg = [startImg, "images/nature-full-hd.jpg", "images/4235765-wallpaper-full-hd.jpg", "images/d87623f111226679f540d19309d6c711.jpg", "images/widescreen-full-hd.jpg"],
            arraySize = arrayImg.length,
            keyLeft = false,
            keyRight = true,
            count = 0;

        $container.find(".change-photo-left").click(function() {
            //imgSlider.attr("src", slider(keyLeft));
            imgSlider.animate({right: '100vw'}, 'slow', function() {$(this).animate({right: 0})}).attr("src", sliderHandler(keyLeft));
        });

        $container.find(".change-photo-right").click(function() {
            count++;
            imgSlider.animate({left: '100vw'}, 'slow', function() {$(this).animate({left: 0})}).attr("src", sliderHandler(keyRight));
        });
    };

    $('.slider').each(function(index, element) {
        new Slider(element);
    })
});