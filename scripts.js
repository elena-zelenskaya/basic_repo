function changeColor() {
    document.onmousedown = function(e) {
        document.getElementById("lol").style.backgroundColor="blanchedalmond";
        document.getElementById("lol").innerHTML="I cannot believe it! I've just changed color! Click me one more time!";
        document.onmousedown = function(e) {
            document.getElementById("lol").style.backgroundColor="aquamarine";
            document.getElementById("lol").innerHTML="I like it! Click me again!!!";
            changeColor();
        }

    }
}
changeColor();