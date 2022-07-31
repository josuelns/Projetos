
document.addEventListener("mousemove", function(e) {

    var tracker = document.querySelector(" .tracker");
    tracker.style.left = e.pageX + 'px';
    tracker.style.top = e.pageY + 'px';
});