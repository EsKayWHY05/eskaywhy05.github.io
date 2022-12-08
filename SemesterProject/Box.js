class Box {
    constructor(newXPos, newYPos, newXSize, newYSize) {
      this.xPos = newXPos;
      this.yPos = newYPos;
      this.xSize = newXSize;
      this.ySize = newYSize;
    }
    display() {
      push();
      fill(color(255, 165, 0));
      rect(this.xPos, this.yPos, this.xSize, this.ySize);
      pop();
    }
    update() {
      if((user.yPos < this.yPos) && (user.yPos > this.yPos - this.ySize-5) && (user.xPos > this.xPos-20) && (user.xPos < this.xPos+75)) {
        user.yPos > this.yPos;
        user.grounded = true;
        user.canJump = true;
        jumpCooldown = 0;
      }
      //move box right
      if((user.xPos > this.xPos-40) && (user.xPos < this.xPos+20) && user.yPos > this.yPos) {
        user.xSpeed = 10;
        this.xPos = user.xPos + 32;
      }
      //move box left
      else if((user.xPos > this.xPos + 80) && (user.xPos < this.xPos + 110) && user.yPos > this.yPos) {
          this.xPos = user.xPos - 110;
          user.xSpeed = 10;
          }
      else {
        user.xSpeed = 20;
      }
      
      // if((user.yPos < this.yPos) && (user.xPos > this.xPos-50) && (user.xPos < this.xPos+30)) {
      //   user.yPos = 320;
      //   user.isOnBox = true;
      // }
      // else {
      //   user.isOnBox = false;
      //   user.gravity = 5;
      // }
    }
  }