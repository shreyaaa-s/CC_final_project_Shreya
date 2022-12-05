class Backgrounds{

	constructor(){

	}

	function preload(){
		  schoolFrontBg = loadImage("images/school_front_bg.png")
	}

	function setting(option){
		if(option == 1){
			background(schoolFrontBg);
		}
	}


}