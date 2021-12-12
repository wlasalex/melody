

$(document).ready(function () {
    let currentFlour = 2;
    let counterUp = $('.counter-up');
    let counterDown = $('.counter-down');
    let flourPath = $('.home-image path');


    flourPath.on("mouseover", function() {
        flourPath.removeClass("current-flour")
        currentFlour = $(this).attr("data-flour");
        $(".counter").text(currentFlour);
    });
    counterUp.on('click', function(){
      if (currentFlour < 18) {
        currentFlour++;
        usCurrentFlour = currentFlour.toLocaleString('en-US', {minimumIntegerDigits:2, useGrouping: false});
        $(".counter").text(usCurrentFlour);
        flourPath.removeClass("current-flour")
        $(`[data-flour=${usCurrentFlour}]`).toggleClass('current-flour');
      }
    });

    counterDown.on('click', function() {
        if(currentFlour > 2) {
            currentFlour--;
            usCurrentFlour = currentFlour.toLocaleString('en-US', {minimumIntegerDigits:2, useGrouping: false});
            $(".counter").text(usCurrentFlour);
            flourPath.removeClass("current-flour")
            $(`[data-flour=${usCurrentFlour}]`).toggleClass('current-flour');
        }
    })
});