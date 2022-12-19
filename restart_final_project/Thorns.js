class Thorns{
	constructor(){
		this.randSize = random(20,80);
		this.randX = random(0,200);
		this.randRot = random(0,180);
		this.randY = random(0,300);
		this.whichThorn = random(1,3);
	}
	
	drawThorn(thorn1){
		// if(this.whichThorn == 1){
		// 	this.thorn = image(thorn1,this.randX, this.thornY);
		// }else if(this.whichThorn == 2){
		// 	this.thorn = image(thorn2,this.randX, this.thornY);
		// }
		//thorn1.resize(this.randSize,0);
		rotate(this.randRot);
		image(thorn1,this.randX, this.randY);
		// thorn2.resize(this.randSize,0);
		
		//this.bubbly = circle(30, 30, 20);
	}
	
	// thornPlace(){
	// 	if(this.bubY >= 0){
	// 		this.bubY = this.bubY - this.randSpeed;
	// 	} else if(this.bubY < 0){
	// 		this.bubY = 0;
	// 	}
	// }
}