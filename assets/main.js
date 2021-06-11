
let video;

function playVideo() {
    video = $("#video").YTPlayer();

    let filters = {
        grayscale: 50,
        sepia: 50,
        blur: 5
    };

    video.YTPApplyFilters(filters);
}

function onClick(event) {
    console.log("you clicked (" + event.pageX + ", " + event.pageY + ")");
}

$(function() {
    let notice = document.getElementById("wait");

    notice.addEventListener("click", function() {
        $("#wait").fadeOut();
        playVideo();
    });
});

$("#video").on("YTPStart", function(e) {
    let container = document.getElementById("container");
    container.addEventListener("click", onClick);
});