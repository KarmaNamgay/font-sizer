var nose_x="";
var nose_y="";
var right_wrist="";
var left_wrist="";
var text_size="";

function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas= createCanvas(550,420);
    canvas.position(550,200);

    posenet=ml5.poseNet(video,model_loaded);
    posenet.on("pose",gotresults);
}
function preload(){

}
function draw(){
    background("white");
    document.getElementById("text_size").innerHTML="the size of the square is "+text_size;
    fill("#434750");
    text("Potato",nose_x,nose_y,text_size);
}

function model_loaded(){
    console.log("poseNet model is loaded");
}

function gotresults(results){
    if(results.length > 0){
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("nose x = "+nose_x+" and nose y = "+nose_y);
        right_wrist=results[0].pose.rightWrist.x;
        left_wrist=results[0].pose.leftWrist.x;
        console.log("right wrist = "+right_wrist+" and left wrist = "+left_wrist);
        square_size=floor(left_wrist-right_wrist);
        console.log("diffrennce = "+square_size);
    }
}