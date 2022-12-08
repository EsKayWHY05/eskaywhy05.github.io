let user;
let jumpCooldown;
let gPCooldown;
let dashLength;
let dashCooldown;
let techCooldown;
let techCounter;
let canSpring;
let stamina;
let boxes = [];
let platforms = [];
let timeBar;
var level = 1;
let sScreen;
var click;
var splash;

var currentImage;

var guideX;
var guideY;

// function randomPlats() {
//     for(let i = 0; i<15; i++) {
//         let randomFloor = Math.floor(Math.random() * height);
//     platforms.push(new Platform(Math.floor(Math.random() * width), randomFloor, 150, 15));
//     if(i%3 == 0) {
//         boxes.push(new Box(Math.floor(Math.random() * width), randomFloor, 50, 50));
//     }
//     }
// }

function preload() {
  splash1 = loadImage("braincell splash screen.001.jpeg");
  splash2 = loadImage("braincell splash screen.002.jpeg");
  splash3 = loadImage("braincell splash screen.003.jpeg");
  splash4 = loadImage("braincell splash screen.004.jpeg");
  splash5 = loadImage("braincell splash screen.005.jpeg");

  city = loadImage("braincell splash screen.006.jpeg");

  guide1 = loadImage("braincell guide.001.jpeg");
  guide2 = loadImage("braincell guide.002.jpeg");


}

var canvasHeight = 640;

function setup() {
  push();
  createCanvas(1280, canvasHeight);
  canvas.style = "position: absolute; top: 80px; left: 0px; width: 1280px; z-index: 0; right: 0px; bottom: 0px; margin: auto";
  pop();
  user = new Player();
  jumpCooldown = 0;
  dashLength = 0;
  dashCooldown = 0;
  gPCooldown = 0;
  techCooldown = 0;
  techCounter = 0;

  sScreen = new splashScreen();

  stamina = new Bar();
  timeBar = new Time();
  click = 0;

  guideX = 1;
  guideY = 1;
  currentImage = guide1;
}

//TUTORIAL BEGINS HERE
var levelOne = false;
var levelTwo;
var levelThree;
var levelFour = false;
var levelFive = 0;
var levelSix = false;
var levelSeven = false;
var levelEight = false;
var levelNine = false;
var levelTen = false;
let textWidth = 200;
var levelEleven = false;
var levelTwelve = false;
var level13 = false;
var level14 = false;
var level15 = false;
var level16 = false;
var level17 = false;
var lightsOut = 0;
var away = 0;


var bgColor = 220;

var tooltips = "Press 'W' to jump onto the platform";
function draw() {
  background(bgColor);
  image(city, 0, 0, 1300, canvasHeight);
  image(currentImage, -1000, -1000, guideX, guideY);
  image(loadImage("braincell guide.001.jpeg"), 0, 0, 1000, 645);
  user.display();



  //text(platforms.length, width/2-70, height/2+50);

//TOOLTIPS
  if(level == 1) {
    text(tooltips, textWidth + 0, height/2-10);
  }
  if(levelOne == false) {
    levelOne = true;
    platforms.push(new Platform(width/2-50, height-150, 150, 15, color(169, 169, 169)));
  }
  if((levelOne) && user.xPos > platforms[0].xPos && user.yPos < platforms[0].yPos && user.xPos < platforms[0].xPos+platforms[0].xSize) {
    levelTwo = false;
  }
  if(levelTwo == false) {
    tooltips="Use 'A' or 'D' to leave the platform.";
    levelTwo = true;
  }
  if(levelTwo) {
    if((user.yPos > platforms[0].yPos+10 && user.xPos<platforms[0].xPos) || (user.yPos > platforms[0].yPos+10 && user.xPos>platforms[0].xPos + platforms[0].xSize/2)) {
      platforms[0].yPos = height-230;
      levelThree = false;
      }
  }
  if(levelThree == false) {
    tooltips = "HOLD 'S' while grounded to Spring Jump (advanced move)";
    if((user.xPos > platforms[0].xPos && user.yPos < platforms[0].yPos && user.xPos < platforms[0].xPos+platforms[0].xSize) && (levelFour == false)) {
      platforms.push(new Platform(width/2-50, height-465, 150, 15, color(169, 169, 169)));
      levelFour = true;
    }
    if(levelFour) {
      guideX = 500;
      guideY = 300;
      tooltips = "HOLD 'S' while in air to Ground-Pound! (The higher this is executed, the higher the bounce!)";
      if(user.xPos > platforms[1].xPos && user.yPos < platforms[1].yPos) {
        tooltips = "Ground-Pounds through platforms drastically multiplies jump-height!";
        platforms[0].yPos = -30;
        levelFive = 2;
      }
      if(levelFive == 2 && !user.grounded) {
      guideX = 1;
      guideY = 1;
        platforms[0].yPos = -30;
        platforms[1].yPos = -30;
        tooltips = "Let's GO!";
      }
      if(levelFive == 2 && user.grounded) {
        levelFive = 4;
        // platforms[0].yPos = 20;
        // platforms[1].yPos = 20;
        // platforms[1].xPos = 400;
        //levelFive = true;
        //levelSix = true;
        }
    }
    if(levelFive == 4) {
      currentImage = guide2;
      tooltips = "Jump while touching a wall to Wall Jump! (Try pairing with a Ground-Pound!)";
      levelSix = true;
    }
    if(levelSix) {
      platforms[0].yPos = -30;
      platforms[1].yPos = height-325;
      platforms[1].xPos = 100;
    }
    if ((levelSix) && (user.xPos > platforms[1].xPos && user.yPos < platforms[1].yPos) && (user.xPos < platforms[1].xPos+platforms[1].xSize)) {
      tooltips = "Awesome! Now leave the platform.";
      levelSeven = true;
      levelSix = false;
    }
    if((levelSeven) && (user.yPos > height - 50)) {
      platforms[1].yPos = 20;
      levelEight = true;
  }
  if((levelEight) && (!levelNine)) {
    guideX = 1;
      guideY = 1;
    tooltips = "Use the orange box to help you reach the platform... HINT: the box can be moved :0";
    //boxes.push(new Box(width-600, height-200, 100, 200));
    levelNine = true;
    levelTen = true;
  }
  if(levelNine) {
    guideX = 1;
      guideY = 1;
    tooltips = "Use the orange box to help you reach the platform... (note to Skyler: remove box from the game)";
    platforms[1].xPos = width-250;
    platforms[1].yPos = height-400;
    platforms[0].yPos = height+
    platforms[0].ySize;
    if((user.yPos < platforms[1].yPos+10 && user.xPos>platforms[1].xPos) && (user.yPos>platforms[1].yPos-40)) {
      levelTen = true;
    }
  }
    if(levelTen) {
      tooltips = "Enough child's play! Click 'SPACE' for a challenge!"
      platforms[1].xSize = 1;
      platforms[1].xPos = -10;
      levelEleven = true;
    }
    if((keyIsPressed) && (keyCode==32) && (levelEleven)) {
      levelTwelve = true;
    }
    if((levelTwelve)) {
      tooltips = "LEVEL IN PROGRESS - all moves will be tested (maybe not orange box) and combos WILL be required to reach the goal (green plat)."
      platforms[0].xPos = 50;
      platforms[0].yPos = height-260;
      platforms[1].xSize = 150;
      platforms[1].yPos = height-400;
      platforms[1].xPos = 800;
      platforms.push(new Platform(800, height+200, 150, 15, color(169, 169, 169)));
      platforms.push(new Platform(-20, -20, 150, 15, color(169, 169, 169)));

      platforms.push(new Platform(800, height+200, 150, 15, color(0, 255, 0)));


      level13 = true;
    }
    if(level13) {
      tooltips = "Reach the GOAL (Green Platform)!";
      levelTwelve=false;
      platforms[0].xPos = 50;
      platforms[0].yPos = height-255;
      platforms[1].xSize = 150;
      platforms[1].yPos = height-350;
      platforms[1].xSize = 600;
      platforms[1].xPos = 800;
    platforms[2].xPos = width-900;
    platforms[2].yPos = 50;
    platforms[2].xSize = 800;
    platforms[3].xPos = width/2 -100;
    platforms[3].yPos = height+50;

    platforms[4].xPos = 230;
    platforms[4].yPos = 50;

    if((level13) && user.xPos > platforms[4].xPos && user.yPos < platforms[4].yPos && user.xPos < platforms[4].xPos+platforms[4].xSize) {
      level14 = true;
    }
  }

    if(level14) {
      platforms[4].xPos = width - 200;
      platforms[4].yPos = height-425;

      platforms[0].xSize = 150;
      platforms[0].yPos = height-100;
      platforms[0].xPos = 100;

      platforms[1].xSize = 150;
      platforms[1].yPos = height-250;
      platforms[1].xPos = 450;

      platforms[2].xSize = 150;
      platforms[2].yPos = height-425;
      platforms[2].xPos = 800;

      platforms[3].xSize = 1;
      platforms[3].xPos = -2;

      if((level14) && user.xPos > platforms[4].xPos && user.yPos < platforms[4].yPos && user.xPos < platforms[4].xPos+platforms[4].xSize) {
        level15 = true;
      }
    }

    if(level15) {
      platforms[0].xSize = 150;
      platforms[0].xPos = 200;
      platforms[0].yPos = height-100;

      platforms[1].xSize = 150;
      platforms[1].xPos = 200;
      platforms[1].yPos = height-200;

      platforms[2].xSize = 150;
      platforms[2].xPos = 200;
      platforms[2].yPos = height-300;

      platforms[3].xSize = 150;
      platforms[3].xPos = 200;
      platforms[3].yPos = height-400;

      platforms[4].xSize = 150;
      platforms[4].xPos = 200;
      platforms[4].yPos = height-500;
      canvasHeight = 0.1;
      tooltips = "Wait... where did the background go? nvm, just keep playing.";
      if((level15) && user.xPos > platforms[4].xPos && user.yPos < platforms[4].yPos && user.xPos < platforms[4].xPos+platforms[4].xSize) {
        level16 = true;
      }
    }

    if(level16) {
      tooltips = "ok, now the platforms are gone.";
      platforms[0].xSize = 1;
      platforms[0].xPos = -2;

      platforms[1].xSize = 1;
      platforms[1].xPos = -2;

      platforms[2].xSize = 1;
      platforms[2].xPos = -2;

      platforms[3].xSize = 1;
      platforms[3].xPos = -2;

      platforms[4].xSize = 150;
      platforms[4].xPos = 800;
      platforms[4].yPos = 400;

      if((level16) && user.xPos > platforms[4].xPos && user.yPos < platforms[4].yPos && user.xPos < platforms[4].xPos+platforms[4].xSize) {
        level17 = true;
      }
    }

    if(level17) {
      tooltips = "the game is over.";
      platforms[4].xPos = -200;
      lightsOut++;
      if(lightsOut > 100) {
        bgColor = color(0,0,0);
      }
      if(lightsOut > 150) {
        canvas.height = 400;
      }
    }


  }


  user.update();
  //user.jump();
  user.checkGround();
  user.wallJump();
  user.groundPound();
  user.crouch();
  user.springJump();
  user.timer();
  stamina.display();
  timeBar.display();
  user.boundYSpeed();
  //text("Level " + level, 10, 20);
  
  // text("Jump Cooldown: " + jumpCooldown, width/2, 20);
  // text("gravity " + user.gravity, width/2, 50);
  // text("dashing? " + user.dashing + " " + dashLength, width/2, 80);
  // text("dash cooldown " + dashCooldown, width/2, 90);
  // text("yPos " + user.yPos, width/2, 100);
  // text("gp cooldown " + gPCooldown, width/2, 110);
  // text("tech cooldown " + techCooldown, width/2, 130);
  // text("tech counter " + techCounter, width/2, 140);
   //text("user yPos " + user.yPos, width/2, 160);
  // text("box[0] xPos " + boxes[0].xPos, width/2, 170);
  // text("box[0] yPos " + boxes[0].yPos, width/2, 180);
  // text("user xSpeed " + user.xSpeed, width/2, 190);
  // text("can GP? " + user.canGP, width/2, 200);
   //text("grounded? " + user.grounded, width/2, 210);
  // text("is on box? " + user.isOnBox, width/2, 220);






  
  if(!user.canGP) {
    gPCooldown++;
  }
  if(gPCooldown > 70) {
    user.canGP = true;
    gPCooldown = 0;
  }
  
  if(!user.grounded) {
  jumpCooldown++;
  }
  if(jumpCooldown > 0 && user.grounded) {
  jumpCooldown++;  
  }
  if(jumpCooldown >= 50) {
    jumpCooldown = 0;
  }
  
  if(!user.dashing) {
    dashCooldown++;
  }
  if(dashCooldown >= 40) {
    user.dashing = true;
    dashCooldown = 0;
  }
  if(techCounter > 0) {
    techCooldown++;
  }
  if(techCooldown >= 70) { //COOLDOWN IS HERE!!
    techCounter = 0;
    techCooldown = 0;
    user.ySpeed = 200;
  }
  
  for(let i = 0; i<boxes.length; i++) {
    boxes[i].display();
    boxes[i].update();
  }
  for(let i = 0; i<platforms.length; i++) {
    platforms[i].display();
    platforms[i].update();

  }


  if(click < 5) {
    sScreen.display();
  }
  else {
    sScreen.xSize = 0;
  }

  
}





class Time {
  constructor() {
    this.xPos = 20;
    this.yPos = height-15;
  }
  display() {
    push();
    fill(color(173,216,230));
    rect(this.xPos, this.yPos, techCooldown*2.9 + 5, 8);
    pop();
  }
}

class Bar {
  constructor() {
    this.xPos = 20;
    this.yPos = height-40;
  }
  display() {
    text("Jump Height:", 18, height-45);
    this.yellow = color(255, 255, 0);
    rect(this.xPos, this.yPos, 220, 20); //outer
    push();
    fill(this.yellow)
    rect(this.xPos, this.yPos, user.ySpeed-190, 20); //inner
    pop();
  }
}

