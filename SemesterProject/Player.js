class Player {
    constructor() {
      this.xPos = 15;
      this.yPos = height-30;
      this.ySize = 30;
      this.xSpeed = 10;
      this.gravity = 5;
      this.ySpeed = 200;
      this.yAccel = 20;
      this.grounded = true;
      this.wall = false;
      this.wallJumpWidth = 60;
      this.dashing = true;
      this.canGP = true;
      this.timeInFrames = 0;
      this.timeInSec = 0;
      this.isCrouched = false;
      this.isOnBox = false;
    }
    display() {
      push();
      fill(color(255, 0, 0));
      rect(this.xPos, this.yPos, 30, this.ySize);
      //text("y speed " + this.ySpeed, width/2, 150);
      pop();
    }
    update() {
      //keypad
      if(keyIsDown(68)) {
         if (this.xPos + this.xSpeed <= width) {
        this.xPos += this.xSpeed;
      }
    }
      if(keyIsDown(65)) { 
        if(this.xPos > 0) {
        this.xPos -= this.xSpeed;
        }
      }
      //jump method is here now
      if((keyIsPressed) && (key=='w') && (this.grounded) && jumpCooldown <= 0) {
        this.yPos-=this.ySpeed;
        
      }
      if(this.grounded == false && (!this.isOnBox)) {
        this.yPos+=this.gravity;
      }
    }
    boundYSpeed() {
      if(this.yPos <= 0) {
        this.yPos = 30;
      }
      if(this.ySpeed > 400) {
        this.ySpeed = 400;
      }
    }
    checkGround() {
      if(this.yPos >= height-30) {
        this.grounded = true;
      }
      else {
        this.grounded = false;
      }
      if(this.grounded) {
        this.yPos = height-this.ySize;
      }
    }
    // jump() {
    //   if((keyIsPressed) && (key=='w') && (this.grounded) && jumpCooldown <= 0) {
    //     this.yPos-=this.ySpeed;
    //   }
    //   if(this.grounded == false) {
    //     this.yPos+=this.gravity;
    //   }
    // }
    crouch() {
      if((keyIsPressed) && (key=='s') && (this.grounded)) {
      this.ySize = 15;
        this.isCrouched = true;
    }
      else {
        this.ySize = 30;
        this.isCrouched = false;
      }
    }
    wallJump() {
      //text("Can Wall Jump: " + this.wall, width/2, 30);
      if(this.xPos <= 0) {
        this.wall = true;
      }
      else if(this.xPos > width-20) {
        this.wall = true;
      }
      else {
        this.wall = false;
      }
      if(this.wall == true && (keyIsPressed) && (key=='w') && jumpCooldown <= 0) {
            if(this.xPos < width/2) {
              this.xPos += this.wallJumpWidth;
              this.yPos -=50;
              techCounter++;
              if(techCounter > 0) {
                this.ySpeed*=1.1;
              }
              if(techCooldown < 1)
                {
                  this.ySpeed = 200;
                }
              }
            else if(this.xPos > width/2) {
              this.xPos -= this.wallJumpWidth;
              this.yPos -= 50;
              techCounter++;
              if(techCounter > 0) {
                this.ySpeed*=1.1;
              }
              if(techCooldown < 1)
                {
                  this.ySpeed = 200;
                }  
            }
      }
            //text("Wall Jump", width/2, 40);
                  
  
      }
  groundPound() {
      if((!this.grounded) && (keyIsPressed) && (key=='s') && (this.canGP)) {
          //text("Ground Pound", width/2, 60);
          this.gravity = 40;
          techCounter++;
          if(techCounter > 0) {
                this.ySpeed*=1.1;
              }
          if(techCooldown < 1)
                {
                  this.ySpeed = 200;
                }
      }
      if((this.grounded) && (this.gravity == 40)) {
        this.yPos-=this.ySpeed+50;
        this.gravity = 39;
      }
      if((this.grounded) && (this.gravity == 39)) {
        this.gravity = 5;
        this.canGP = false;
      }
    }
  
    springJump() {
      if((this.grounded) && (keyIsPressed) && (key=='s') && (this.isCrouched)) {
        if(this.timeInSec == 1) {
            this.yPos-=this.ySpeed + 70;
            this.timeInSec = 0;
            this.isCrouched = false;
          this.canGP = false;
          techCounter++;
          if(techCounter > 0) {
                this.ySpeed*=1.1;
            }
            if(techCooldown < 1)
            {
                this.ySpeed = 200;
            }
        }  
        }
    }
    timer() {
          //text("TIME " + this.timeInSec, width/2, 120);
      if(this.isCrouched) {
      this.timeInFrames++;
      if(this.timeInFrames == 50) {
        this.timeInSec++;
        this.timeInFrames = 0;
      }
      }
    }
  }