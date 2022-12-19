class Bubble{
	constructor(){
		this.randSize = random(20,80);
		this.randX = random(0,800);
		this.randSpeed = random(2,7) 
		this.bubY = 0;
		this.randColor = random(2);
	}
	
	drawBubble(bubbleimg){
		if(this.randColor == 0){
			tint(230,150,150);
		}else if(this.randColor == 1){
			tint(108, 173, 118);
		}
		bubbleimg.resize(this.randSize,0);
		this.bubbly = image(bubbleimg,this.randX, this.bubY);
		//this.bubbly = circle(30, 30, 20);
	}
	
	bubbleMove(){
		if(this.bubY >= 0){
			this.bubY = this.bubY - this.randSpeed;
		} else if(this.bubY < 0){
			this.bubY = 600;
		}
	}
}