// let mgr;
let startB;
let sceneCount;
let nameBoxLength = 200;
let name;
let story;

function preload(){
  schoolFrontBg = loadImage("school_front_bg.png")
  dayHall = loadImage("dayHall.png");
  nextArrow = loadImage("nextArrow.png")
  fancy = loadFont("font3.otf")
  normalF = loadFont("font0.otf")
	dayClass = loadImage("dayClass.png");
}

function setup(){
	rectMode(CENTER);
  createCanvas(800,600);
	// mgr = new SceneManager();
	// mgr.addScene(titleScreen)
	//mgr.addScene(information);
  //bg = new Backgrounds();
  //bg.setting(1);
  option = 0;
  scene = 1;
  sceneCount = 1;
	story = 0;
  // startB.mousePressed(information);
  
}

function draw(){

	// mgr.draw();
  //storyTime();
	if(sceneCount == 1){
		titleScreen();
	}
	if(sceneCount == 2){
		information();
	}
	if(sceneCount == 3){
		warning();
	}
	if(sceneCount == 4){
		inputName();
	}
	if(sceneCount == 5){
		storyTime(sceneCount);
	}
	if(sceneCount == 6){
		storyTime(sceneCount);
	}
	if(sceneCount == 7){
		storyTime(sceneCount);
	}
	if(sceneCount == 8){
		storyTime(sceneCount);
	}
	if(sceneCount == 9){
		storyTime(sceneCount);
	}
	if(sceneCount == 10){
		storyTime(sceneCount);
	}
	if(sceneCount == 50){
		storyTime(sceneCount);
	}
	print(sceneCount);
	textAlign(LEFT);
	textSize(15);
	text(mouseX,10,10);
	text(mouseY,10,30);
}

function titleScreen(){ //scene 1
	textFont(fancy,70);
  background(schoolFrontBg);
	textAlign(CENTER);
  text("DROPS IN THE WIND", width/2,200);
	// startB = new Sprite();
	// startB.pos = {x: width/2, y: height/2};
	// if (keyIsPressed === true) {
	// 	sceneManager.showScene( information );
	// }
	square(width/2,height/2,100,5);
	textFont(normalF,20);
	textAlign(CENTER,CENTER);
	text("START",width/2,height/2);
}

function information(){ //scene 2
  //startB.hide();
  background(0);
  fill(255);
	textAlign(LEFT);
  textFont(normalF,20);
  text("You're a new student at Tandon High School.",10,50);
  text("Everyone wants to get to know you.",10,100);
  text("People keep coming up to talk to you… who will you be closest ",10,200);
  text("with by the end of the day?",10,230);
	square(700,500,60,5);
	textFont(normalF,15);
	textAlign(CENTER,CENTER);
	fill(0);
	text("NEXT",700,500);
  // directionBtn = createButton("I'm Ready!");
  // directionBtn.position(700,550);
  // directionBtn.mousePressed(warning);
  //when the name is eventually entered
  // bgOpt becomes 2 and in the draw function, if bgOpt is 2, then scene change runs
  //scene change has its own if statements that change based on mouse pressed
}

function warning(){ //scene 3
  background(0);
  fill(255,0,0);
	textAlign(LEFT);
	textFont(normalF,20);
  text("Remember, your choices matter!",10,300)
	square(700,500,60,5);
	textFont(normalF,15);
	textAlign(CENTER,CENTER);
	fill(255);
	text("NEXT",700,500);
}

// function inputName(){ //scene 4
//   //directionBtn.hide();
//   background(schoolFrontBg);
//   fill(0);
//   textSize(50);
// 	textAlign(CENTER);
//   text("Welcome to Tandon High!",width/2,200);
//   textSize(40);
//   text("Your name is: ",width/2,275);
//rectMode(CORNER);
//   name = createInput("What is your name?"); //creating the textbox
//   //enterName = createButton('enter'); //creating the button
//   name.position(width,height);
//   //enterName.position(width/2,height/2 + 50);
//   name.size(nameBoxLength);
// 	fill(255);
// 	square(width/2,450,100,5);
// 	textFont(normalF,20);
// 	textAlign(CENTER,CENTER);
// 	fill(0);
// 	text("ENTER",width/2,450);
//   //enterName.mousePressed(name.changed(storyTime)); //when the button is clicked, run the greeting function on the name
//   name.changed(startStory); //when the name is entered (changed), run the greeting function
// }

// function startStory(){
// 	sceneCount = 5;
// 	name.hide();
// 	background(dayHall);
// }

function storyTime(sceneCount){
  if (sceneCount == 5){ //scene 5
    // enterName.hide();
    // name.hide();
    background(dayHall);
    textBox(1); //christina box
		textAlign(LEFT);
    text("Hi " + "Y/N" + "! Welcome to Tandon High!", 30,460);
    text("I’m Christina, the class president. I’ll show you around.", 30,490);
  } else if (sceneCount == 6){ //scene 6
    textBox(1);
		textAlign(LEFT);
    text("Here, we have the-", 30,460);
  } else if (sceneCount == 7){ //scene 7
		background(dayHall);
		textBox(2);
		textAlign(LEFT);
		text("Hi " + "Y/N" + ", do you remember me?",30,460)
		optButtons();
	} else if (sceneCount == 8){ //scene 8
		background(dayHall);
		textBox(1);
		textAlign(LEFT);
		text("Uh, ok… let’s continue with the tour.",30,460)
	} else if (sceneCount == 9){ //scene 9
		background(dayClass);
		textBox(1);
		textAlign(LEFT);
		text("This is our classroom.",30,460);
		text("Take a good look around! You'll be here for the next year.", 30,490);
	} else if (sceneCount == 10){ //scene 10
		background(dayClass);
		textBox(3);
		textAlign(LEFT);
		text("OMG! Who is this?",30,460);
	} else if (sceneCount == 50){ //scene 8
		background(dayHall);
		textBox(2);
		textAlign(LEFT);
		text("Really? Wow, that's such a relief! I was scared you had",30,460);
		text("forgotten.", 30, 490);
	}
}

function textBox(chara){
	rectMode(CORNER);
  fill(255,214,174);
  stroke(178,58,30);
  strokeWeight(3);
  rect(22.5,425.5,748,156,5); //bigger rectangle dimensions
  if (chara == 1){ //christina text box
    fill(253,187,199);
    stroke(178,58,30);
    rect(53,396,233,39,5); //smaller rectangle
    fill(0);
    textSize(20);
    noStroke();
		textAlign(CENTER,CENTER);
    text("Christina",53 + 233/2,396 + 39/2);
    stroke(253,187,199);
		image(nextArrow,730,550);
  }else if (chara == 2){ //augustin text box
    fill(71, 163, 255);
    stroke(178,58,30);
    rect(53,396,233,39,5); //smaller rectangle
    fill(0);
    textSize(20);
    noStroke();
		textAlign(CENTER,CENTER);
    text("Augustin",53 + 233/2,396 + 39/2);
    stroke(71, 163, 255);
		image(nextArrow,730,550);
	}else if (chara == 3){ //pari text box
    fill(245, 135, 51);
    stroke(178,58,30);
    rect(53,396,233,39,5); //smaller rectangle
    fill(0);
    textSize(20);
    noStroke();
		textAlign(CENTER,CENTER);
    text("Pari",53 + 233/2,396 + 39/2);
    stroke(245, 135, 51);
		image(nextArrow,730,550);
	}
}

function optButtons(){
	fill(102, 232, 95);
	square(width/2-50,100,100,5); //yes
	textFont(normalF,15);
	textAlign(CENTER,CENTER);
	
	fill(255, 51, 68);
	square(width/2-50,220,100,5); //no
	textFont(normalF,15);
	textAlign(CENTER,CENTER);
	
	if(sceneCount == 7){ //text for scene 7 buttons
	stroke(0);
	fill(102, 232, 95);
	text("yas..!",width/2,100+ 100/2);
	fill(255, 51, 68);
	text("Uh...no?",width/2,220 + 100/2);
	}
}

function mouseReleased()
{
	if(sceneCount == 1){
		if(mouseX > 350 && mouseX < 450 &&
		mouseY > 250 && mouseY < 350){
			sceneCount = 2;
		}
	}else if(sceneCount == 2){
		if(mouseX > 670 && mouseX < 730 &&
		mouseY > 470 && mouseY < 530){
			sceneCount = 3;
		}
	}else if(sceneCount == 3){
		if(mouseX > 670 && mouseX < 730 &&
		mouseY > 470 && mouseY < 530){
			sceneCount = 5;
		}
	}else if(sceneCount == 5){
			if(mouseX > 730 && mouseX < 757 &&
		mouseY > 550 && mouseY < 572){
			sceneCount = 6;
		}
	}else if(sceneCount == 6){
			if(mouseX > 730 && mouseX < 757 &&
		mouseY > 550 && mouseY < 572){
			sceneCount = 7;
		}
	}else if(sceneCount == 7){
			if(mouseX > width/2-50 && mouseX < width/2+50 &&
		mouseY > 100 && mouseY < 200){
			sceneCount = 50;
		}else if(mouseX > width/2-50 && mouseX < width/2+50 &&
		mouseY > 220 && mouseY < 320){
			sceneCount = 8;
		}
	}else if(sceneCount == 8){
			if(mouseX > 730 && mouseX < 757 &&
		mouseY > 550 && mouseY < 572){
			sceneCount = 9;
		}
	}else if(sceneCount == 9){
			if(mouseX > 730 && mouseX < 757 &&
		mouseY > 550 && mouseY < 572){
			sceneCount = 10;
		}
	}
}