

$(document).ready(function () {
    let currentFlour = 2;
    let counterUp = $('.counter-up');
    let counterDown = $('.counter-down');
    let flourPath = $('.home-image path');
    let modal = $('.modal');
    let modalCloseButton = $('.modal-close-button');
    let viewFlatsButton = $('.view-flats');


    flourPath.on("mouseover", function() {
        flourPath.removeClass("current-flour")
        currentFlour = $(this).attr("data-flour");
        $(".counter").text(currentFlour);
    });

    flourPath.on('click', toggleModal);
    modalCloseButton.on('click',toggleModal);
    viewFlatsButton.on('click',toggleModal);

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
    });
    function toggleModal() {
        modal.toggleClass('is-open');
    }
});