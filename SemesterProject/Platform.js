class Platform {
  constructor(newXPos, newYPos, xSize, ySize, platColor) {
    this.xPos = newXPos;
    this.yPos = newYPos;
    this.xSize = xSize;
    this.ySize = ySize;
    this.color = platColor;
  }
  
  display() {
    push();
    fill(this.color);
    rect(this.xPos, this.yPos, this.xSize, this.ySize);
    pop();
  }
  update() {
    if((user.yPos < this.yPos) && (user.yPos > this.yPos -30) && (user.xPos > this.xPos) && (user.xPos < this.xPos + this.xSize))
      {
        user.yPos = this.yPos-30;
          user.grounded = true;
        jumpCooldown = -1;
      }
  }
}