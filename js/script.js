
$(document).ready(function() {
    var arrayImg = ["images/slider1.jpg", "images/nature-full-hd.jpg", "images/4235765-wallpaper-full-hd.jpg", "images/d87623f111226679f540d19309d6c711.jpg", "images/widescreen-full-hd.jpg"];
    //var arrayImg = ["images/slider1.jpg", "images/widescreen-full-hd.jpg"];
    var imgSlider = $(".slider_photo");
    var key = 0;
    var keyPrevious = 0;

    $(".change-photo-left").on("click", function() {
        key--;
        imgSlider.attr("src", nextAndBack(key)).css({"display" : "block","height" : "490px"});
    });

    $(".change-photo-right").on("click", function() {
        key++;
        imgSlider.attr("src", nextAndBack(key)).css({"display" : "block","height" : "490px"});

    });

    function nextAndBack(keyCount) {
        keyPrevious++;
        console.log("KeyPrevious = " + keyPrevious);
        console.log("KeyCount = " + keyCount);
        if((keyCount >= arrayImg.length) && (keyPrevious >= arrayImg.length)) {
            key = 0;
            keyPrevious = 0;
            return nextAndBack(keyCount);
        } else if(keyPrevious > keyCount) {
            return arrayImg[keyCount--];
        } else if(keyPrevious == keyCount) {
            return arrayImg[keyCount];
        } else if((keyCount <= arrayImg.length) && (keyPrevious <= arrayImg.length)) {
            console.log("ok");
        }
    }

});