class Invader {
    constructor() {
      this.xPos = invaderX;
      this.yPos = invaderY;
      this.xVel = 10;
      this.yVel = 10;
      this.fillColor = (255, 0, 0);
    }
    display() {
        rect(this.xPos, this.yPos, 30, 20);
    }
    delete() {
          this.fillColor = (0, 0, 255);
    }
    update() {
      this.xPos += this.xVel;
      invaderX += this.xVel;
      counter++;
      //console.log(counter);
    }
    bounce() {
      if(this.xPos >= width - 15 || this.xPos <= 0) {
        this.xVel = -this.xVel;
        this.yPos += 20;
        invaderY += 20;
      }
      if(counter > spawn) {
        Balls.push(new Ball((invaderX + (10)), (invaderY)+(20)));
        counter = 0;
        spawn = Math.floor(Math.random() * 10 + 4);
      }
    }
    save() {
      invaderX = this.xPos;
      invaderY = this.yPos;
    }
  }