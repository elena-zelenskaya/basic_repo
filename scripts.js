function changeColor() {
    document.onmousedown = function(e) {
        document.getElementById("lol").style.backgroundColor="blanchedalmond";
        document.getElementById("lol").innerHTML="I cannot believe it! I've just changed color!";

}
}
changeColor();