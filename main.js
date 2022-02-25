song1 = "music.mp3";
song2 = "music2.mp3"
function setup(){
    canvas = createCanvas(500,600);
    video.createCapture(VIDEO);
    video.hide();
    canvas.center();
}

function draw(){
    image(VIDEO, 0, 0, 500,600)

}
 function preload(){
    song1 = loadSound("music.mp3");
    ong1 = loadSound("music.mp3");
}