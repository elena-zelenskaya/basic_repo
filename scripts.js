function changeColor() {
    document.getElementById("lol").onmousedown = function(e) {
        document.getElementById("lol").style.backgroundColor="blanchedalmond";
        document.getElementById("lol").style.borderColor="magenta";
        document.getElementById("lol").innerHTML="I cannot believe it! I've just changed color! Click me one more time!";
        document.getElementById("lol").onmousedown = function(e) {
            document.getElementById("lol").style.backgroundColor="aquamarine";
            document.getElementById("lol").style.borderColor="burlywood";
            document.getElementById("lol").innerHTML="I like it! Click me again!!! I am so cool!";
            changeColor();
        }

    }
}
changeColor();

function createNewBlock() {
    document.getElementById("rofl").onmousedown = function(e) {
        document.getElementById("rofl").innerHTML="I've just become a mother!";
        document.getElementById("sonOfRofl").style.display="inline-block";
        document.getElementById("rofl").onmousedown = function(e) {
            document.getElementById("rofl").innerHTML="Yes, I am very proud to be a mother. Thank you for asking!";
        }

    }
}

createNewBlock();

function murderOfRoflSon() {
    document.getElementById("sonOfRofl").onmousedown = function(e) {
        document.getElementById("sonOfRofl").getElementsByTagName("p")[0].innerHTML="Why did you do it?! You just killed me :( Goodbye...";
        document.getElementById("sonOfRofl").getElementsByTagName("p")[0].style.backgroundColor="grey";
        document.getElementById("sonOfRofl").getElementsByTagName("p")[0].style.borderColor="black";
        setTimeout(death, 3000);
    }
}

murderOfRoflSon();

function death() {
    //document.getElementById("sonOfRofl").innerHTML="DEAD";
    document.getElementById("sonOfRofl").style.display="none"
}