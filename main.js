function setup(){
    video = createCapture(VIDEO);
    video.size(350, 300);

    canvas = createCanvas(350, 300);
    canvas.position(450, 150);

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on("pose", gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
      console.log(results);
      nose_x = results[0].pose.nose.x;
      nose_y = results[0].pose.nose.y;
  
      console.log("nose_x = " + nose_x + "nose_y" + nose_y);
  
      left_wrist_x = results[0].pose.leftWrist.x;
      right_wrist_x = results[0].pose.rightWrist.x;
      difference = floor(left_wrist_x - right_wrist_x); 
  
      console.log("left_wrist_x = " + left_wrist_x  + "right_wrist_x = " + right_wrist_x + "difference = " + difference);
  
    }
}

function modelloaded(){
    console.log("posenet is initialised");

}