/**
 * Created by Nata.net on 7/13/2017.
 */
window.onload = function () {
    document.querySelector(".sound-btn").addEventListener("click", function () {
        if (document.querySelector("audio").play) {
            document.querySelector("audio").pause();
        }
        else document.querySelector("audio").play();
    })
}