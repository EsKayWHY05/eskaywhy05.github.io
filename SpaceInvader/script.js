//let i;
var isRed = false;
var colorCounter;

var score;

var invaderX;
var invaderY;

var playerX;
var playerY;

let laser;
let Invaders;
let Balls = [];
let user;
var numBalls = 1;
var playerColor;

let video;
let poseNet;
let poses = [];

function setup() {
    createCanvas(400, 400);

  video = createCapture(VIDEO);
  video.size(width, height);
 let options = {
  architecture: 'MobileNetV1',
  imageScaleFactor: 0.5,
  outputStride: 16,
  flipHorizontal: true,
  minConfidence: 0.5,
  maxPoseDetections: 5,
  scoreThreshold: 0.5,
  nmsRadius: 20,
  detectionType: 'single',
  inputResolution: 513,
  multiplier: 0.75,
  quantBytes: 2,
};
  
    poseNet = ml5.poseNet(video, options, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on("pose", function (results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
  
  
  colorCounter = 0;
  score = 0;
  invaderX = width/2;
  invaderY = 15;
  playerX = width/2;
playerColor = color(255, 255, 255);

  spawn = 2;
  frameRate(20);
      Invaders = new Invader();
  user = new Player();

}

function modelReady() {
 // select("#status").html("Model Loaded");
}

function draw() {
  background(220);
    for(let i = 0; i < Balls.length; i++) {
      fill(color(255,255,255));
    Balls[i].display();
    Balls[i].update();
  }
      Invaders.display();
      Invaders.update();
      Invaders.bounce(); 
  user.display();
  user.resetColor();
  user.update();
  user.attempt();
  push();
  fill(0);
  //text("Color Counter = " + colorCounter, width/2 - 24, 20);
  pop();
  if(isRed) {
    colorCounter++;
  }

}
var counter = 0;
var spawn;



class Ball {
  constructor(newXPos, newYPos) {
    this.xPos = newXPos;
    this.yPos = newYPos;
    this.gravity = 30;
  }
  
  display() {
    rect(this.xPos, this.yPos, 10, 10);
  }
  update() {
    this.yPos += 10;
    if(this.yPos >= height - 28 && this.xPos > user.xPos - 5 && this.yPos <= height && this.xPos < user.xPos + 20) {
      user.changeColor();
      score--;
    }
  }
  
}
class Player {
  constructor() {
    this.xPos = playerX;
    this.yPos = height - 30;
    this.speed = 30;
    this.color = color(255, 255, 255);
  }
  
  changeColor() {
    this.color = color(255, 0, 0);
    isRed = true;
  }
  
  display() {
    push();
    fill(this.color);
    rect(this.xPos, this.yPos, 30, 30);
    pop();
    
  }
  resetColor() {
    if(colorCounter >= 2) {
    push();
      this.color = color(255, 255, 255);
    fill(this.color);
    rect(this.xPos, this.yPos, 30, 30);
    pop();
      isRed = false;
      colorCounter = 0;
    }
  }
  
  update() {
    // if((keyIsPressed == true) && (key == 'd')) {
    //   if(this.xPos + this.speed <= width) {
    // this.xPos += this.speed;
    // playerX += this.speed;
    //   }
    // }
    // if((keyIsPressed == true) && (key == 'a')) {
    //   if(this.xPos >= 0) {
    //     this.xPos -= this.speed;
    //   }
    // }
  }
  attempt() {
    push();
  scale(-1,1);
  //image(video, -width, 0, width, height);
pop();


  fill(0,0,255);
  //rect(200,50,80,200);
  
  if (poses.length > 0) {
    this.xPos = poses[0].pose.keypoints[0].position.x;
    let x = poses[0].pose.keypoints[0].position.x;
    let y = 300;
 fill(0,0,255);
    noStroke();
    //ellipse(x, y, 30, 30);
  }
  
}
}

