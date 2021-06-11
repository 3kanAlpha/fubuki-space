
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

$(function() {
    let notice = document.getElementById("wait");

    notice.addEventListener("click", function() {
        $("#wait").fadeOut();
        playVideo();
    });
});