nose_x = 0
nose_y = 0
righteye_y = 0
righteye_x = 0
lefteye_y = 0
lefteye_x = 0

function preload()
{
    clown = loadImage("https://i.postimg.cc/hPz1XX13/joker-nose-glass-removebg-preview.png")
}

function setup()
{
    canvas = createCanvas(300,230)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,230)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded()
{
    console.log("MoDeL LoAdEd PeEpS")
}

function gotPoses(results)
{
    if (results.length > 0)
    { console.log(results)
        console.log("nose_x = " + results[0].pose.nose.x)
        console.log("nose_y = " + results[0].pose.nose.y)
        console.log("lefteye_x = " + results[0].pose.leftEye.x)
        console.log("righteye_x = " + results[0].pose.rightEye.x)
        console.log("lefteye_y = " + results[0].pose.leftEye.y)
        console.log("righteye_y = " + results[0].pose.rightEye.y)
        nose_x = results[0].pose.nose.x
        nose_y = results[0].pose.nose.y
        righteye_y = results[0].pose.rightEye.y
        righteye_x =results[0].pose.rightEye.x
        lefteye_y = results[0].pose.leftEye.y
        lefteye_x = results[0].pose.leftEye.x
    }
}

function draw()
{
    image(video, 0,0,300,230)
//    fill("red")
  //  circle(nose_x, nose_y,17)
    //fill("black")
   // circle(lefteye_x, lefteye_y,20)
    //circle(righteye_x, righteye_y,20)
    image(clown, righteye_x-22,righteye_y-22, 75, 70)
}

function take_snapshot()
{
    save("My Jokernose Image.jpg")
}