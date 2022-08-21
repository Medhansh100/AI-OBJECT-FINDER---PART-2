status = "";
video = "";

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    background("white");
}

function preload(){
    video = createVideo("video.mp4");
    video.hide();
}

function start(){
object_detector = ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML = "object is Detecting";
text = document.getElementById("object").innerHTML.value;

}

