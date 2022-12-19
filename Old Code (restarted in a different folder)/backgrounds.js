class Backgrounds{

	constructor(){

	}

	 preload(){
		  schoolFrontBg = loadImage("images/school_front_bg.png")
	}

	 setting(option){
		if(option == 1){
			background(schoolFrontBg);
		}
	}


}