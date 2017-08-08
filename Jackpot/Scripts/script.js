function getRando(number) {
    var num = Math.round(Math.random() * number);
    num = num.toString();

    if (num.length < 2) {
        num = "0" + num;
    }
    return num;
}

function getPBNums() {
    document.getElementById("PB1").innerHTML = getRando(65);
    document.getElementById("PB2").innerHTML = getRando(65);
    while (document.getElementById("PB2").innerHTML == document.getElementById("PB1").innerHTML) {
        document.getElementById("PB2").innerHTML = getRando(65);
    }
    document.getElementById("PB3").innerHTML = getRando(65);
    while (document.getElementById("PB3").innerHTML == document.getElementById("PB1").innerHTML || document.getElementById("PB3").innerHTML == document.getElementById("PB2").innerHTML) {
        document.getElementById("PB3").innerHTML = getRando(65);
    }
    document.getElementById("PB4").innerHTML = getRando(65);
    while (document.getElementById("PB4").innerHTML == document.getElementById("PB1").innerHTML || document.getElementById("PB4").innerHTML == document.getElementById("PB2").innerHTML || document.getElementById("PB4").innerHTML == document.getElementById("PB3").innerHTML) {
        document.getElementById("PB4").innerHTML = getRando(65);
    }
    document.getElementById("PB5").innerHTML = getRando(65);
    while (document.getElementById("PB5").innerHTML == document.getElementById("PB1").innerHTML || document.getElementById("PB5").innerHTML == document.getElementById("PB2").innerHTML || document.getElementById("PB5").innerHTML == document.getElementById("PB3").innerHTML || document.getElementById("PB5").innerHTML == document.getElementById("PB4").innerHTML) {
        document.getElementById("PB4").innerHTML = getRando(65);
    }
    document.getElementById("PB6").innerHTML = getRando(65);
    while (document.getElementById("PB6").innerHTML == document.getElementById("PB1").innerHTML || document.getElementById("PB6").innerHTML == document.getElementById("PB2").innerHTML || document.getElementById("PB6").innerHTML == document.getElementById("PB3").innerHTML || document.getElementById("PB6").innerHTML == document.getElementById("PB4").innerHTML || document.getElementById("PB6").innerHTML == document.getElementById("PB5").innerHTML)  {
        document.getElementById("PB4").innerHTML = getRando(65);
    }
}