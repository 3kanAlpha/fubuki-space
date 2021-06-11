
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
    // console.log("you clicked (" + event.pageX + ", " + event.pageY + ")");

    const x = event.pageX;
    const y = event.pageY;

    let fav = document.createElement("div");
    fav.innerHTML = "<i class='large material-icons'>favorite</i>";
    fav.style.left = x + "px";
    fav.style.top = y + "px";
    document.body.appendChild(fav);

    fav.className = "fav";

    fav.addEventListener("animationend", function() {
        this.parentNode.removeChild(this);
    }, false);
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