function makeTextBigger() {

    document.getElementById("textareabox").style.fontSize = "4em";

}sdfasdfasdfasdhel

function setStyle() {

    document.getElementById("textareabox").style.fontWeight = "bold";
    document.getElementById("textareabox").style.color = "blue";
    document.getElementById("textareabox").style.textDecoration = "underline";

}

function removeStyle() {

    document.getElementById("textareabox").style.fontWeight = "normal";
    document.getElementById("textareabox").style.color = "black";
    document.getElementById("textareabox").style.textDecoration = "none";

}

function addMoo() {

    document.getElementById("textareabox").style.textTransform = "uppercase";
    var str = document.getElementById("textareabox").value;
    var parts = str.split(".");
    str = parts.join("-Moo");
    document.getElementById("textareabox").value = str;

}