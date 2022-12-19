class Rose{
	constructor(){
		this.randSize = random(20,80);
		this.randX = random(0,800);
		this.randRot = random(0,180);
		this.randY = random(0,600);
	}
	
	drawRose(loneRose){
		
		loneRose.resize(100,0);
		rotate(this.randRot);
		image(loneRose,this.randX, this.randY);

	}
	
	
}