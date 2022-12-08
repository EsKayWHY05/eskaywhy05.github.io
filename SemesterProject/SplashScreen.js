var storyText1 = "GEOMETRY DASH AT HOME";
var storyText2 = "Click 'SPACE' to continue";
var spaceClicks = 0;
var canPress = true;

var splashSize = 645;

class splashScreen {
    constructor() {
      this.xPos = 0;
      this.yPos = 0;
      this.xSize = 0;
      this.ySize = 0;
    }
    display() {
      image(splash1, 0, 0, 1300, splashSize);
      push();
      fill(color(220, 220, 220));
      rect(this.xPos, this.yPos, this.xSize, this.ySize);
      pop();
      push();
      //translate(width/2, height/2);
      rotate(-0.16);
      textAlign(CENTER);
      textSize(15);
      textFont('Georgia');
      text(storyText1, width/2-70, height/2-120);
      text(storyText2, width/2-60, height/2+20-120);
      //translate(-1*width/2, -1*height/2);
      pop();

      if((keyIsDown) && (keyCode==32) && (canPress) && (click == 0)) {
        click++;
        splash1 = splash2;
        storyText1 = "Welcome to Walmart Geometry Dash! In this scuffed flash platformer, advanced movements (ground pound, wall-jump, etc.) are key to your sucess!";
        storyText2 = "Press ENTER to continue";
        canPress = false;
      }
      if((keyIsDown) && (keyCode==13) && (!canPress) && (click == 1)) {
        click++;
        splash1 = splash3;
        storyText1 = "This is your JUMP-HEIGHT bar! It represents your jump height. Perform advanced movements in sequence to build up your stamina!"
        storyText2 = "Press SPACE to continue"
        canPress = true;
      }
      if((keyIsDown) && (keyCode==32) && (canPress) && (click == 2)) {
        click++;
        splash1 = splash4;
        storyText1 = "Here is the COOLDOWN meter! It activates after an advanced movement is performed. Advanced movements can only be completed once EACH until the meter resets!"
        storyText2 = "Press ENTER to continue"
        canPress = false;
      }
      if((keyIsDown) && (keyCode==13) && (!canPress) && (click == 3)) {
        click++;
        splash1 = splash5;
        storyText1 = "Use WASD to move, and we'll explain all of the advanced moves in the tutorial!"
        storyText2 = "Press SPACE to continue to tutorial"
        canPress = true;
      }
      if((keyIsDown) && (keyCode==32) && (canPress) && (click == 4)) {
        click++;
        //splash1 = splash6;
        // this.xSize = 1280;
        // this.ySize = 720;
      }
    }
  }