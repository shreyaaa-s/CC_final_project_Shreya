// let mgr;
let startB;
let sceneCount;
let nameBoxLength = 200;
let name;
let story;
let cpMeet;
let cfMeet;
let ccMeet;
let sbMeet;

let video;
let bubbles = [];
let thorny = [];
let roses = [];

function preload() {
	schoolFrontBg = loadImage("school_front_bg.png")
	dayHall = loadImage("dayHall.png");
	nextArrow = loadImage("nextArrow.png")
	fancy = loadFont("font3.otf")
	normalF = loadFont("font0.otf")
	dayClass = loadImage("dayClass.png");
	dayNurse = loadImage("dayNurse.png");
	afterHall = loadImage("afterHall.png");
	afterClass = loadImage("afterClass.png");
	bubbleimg = loadImage("bubble.png");
	loneRose = loadImage("lone_rose.png");
	thorn1 = loadImage("thorny_vine.png");
	
	cpNeutral = loadImage("cpNeutral.png");
	cpHappy = loadImage("cpHappy.png");
	cpSad = loadImage("cpSad.png");
	cpAnnoy = loadImage("cpAnnoy.png");
	cpAngry = loadImage("cpAngry.png");
	cpEmb = loadImage("cpEmb.png");

}

function setup() {
	rectMode(CENTER);
	createCanvas(800, 600);

	option = 0;
	scene = 1;
	sceneCount = 1; //each scene is represented by a sceneCount number
	story = 0;
	cpMeet = false;
	cfMeet = false;
	ccMeet = false;
	sbMeet = false;
	// startB.mousePressed(information);

	//code for video/camera elements
	createCanvas(800, 600);
	background(200);
	video = createCapture(VIDEO);
	video.size(width, height);
	video.hide();

	for (let i = 0; i < 15; i++) {
		bubbles[i] = new Bubble();
	}
	for (let i = 0; i < 30; i++) {
		thorny[i] = new Thorns();
	}
	for (let i = 0; i < 40; i++) {
		roses[i] = new Rose();
	}

}

function draw() {
	angleMode(DEGREES);

	//scenes changed based on the scene number (as displayed by sceneCount)
	if (sceneCount == 1) {
		titleScreen();
	}
	if (sceneCount == 2) {
		information();
	}
	if (sceneCount == 3) {
		warning();
	}
	if (sceneCount == 4) {
		inputName();
	}
	if (sceneCount == 5) {
		storyTime(sceneCount);
	}
	if (sceneCount == 6) {
		storyTime(sceneCount);
	}
	if (sceneCount == 7) {
		storyTime(sceneCount);
	}
	if (sceneCount == 8) {
		storyTime(sceneCount);
	}
	if (sceneCount == 9) {
		storyTime(sceneCount);
	}
	if (sceneCount == 10) {
		storyTime(sceneCount);
	}
	if (sceneCount == 11) {
		storyTime(sceneCount);
	}
	if (sceneCount == 12) {
		storyTime(sceneCount);
	}
	if (sceneCount == 13) {
		storyTime(sceneCount);
	}
	if (sceneCount == 14) {
		storyTime(sceneCount);
	}
	if (sceneCount == 15) {
		storyTime(sceneCount);
	}
	if (sceneCount == 16) {
		storyTime(sceneCount);
	}
	if (sceneCount == 17) {
		storyTime(sceneCount);
	}
	if (sceneCount == 18) {
		storyTime(sceneCount);
	}
	if (sceneCount == 19) {
		storyTime(sceneCount);
	}
	if (sceneCount == 20) {
		storyTime(sceneCount);
	}
	if (sceneCount == 21) {
		storyTime(sceneCount);
	}
	if (sceneCount == 22) {
		storyTime(sceneCount);
	}
	if (sceneCount == 23) {
		storyTime(sceneCount);
	}
	if (sceneCount == 24) {
		storyTime(sceneCount);
	}
	if (sceneCount == 25) {
		storyTime(sceneCount);
	}
	if (sceneCount == 26) {
		schoolEnd();
	}
	if (sceneCount == 27) {
		storyTime(sceneCount);
	}
	if (sceneCount == 28) {
		storyTime(sceneCount);
	}
	if (sceneCount == 29) {
		storyTime(sceneCount);
	}
	if (sceneCount == 30) {
		storyTime(sceneCount);
	}
	if (sceneCount == 31) {
		storyTime(sceneCount);
	}
	if (sceneCount == 32) {
		storyTime(sceneCount);
	}
	if (sceneCount == 33) {
		storyTime(sceneCount);
	}
	if (sceneCount == 34) {
		storyTime(sceneCount);
	}
	if (sceneCount == 35) {
		storyTime(sceneCount);
	}
	if (sceneCount == 36) {
		storyTime(sceneCount);
	}
	if (sceneCount == 37) {
		storyTime(sceneCount);
	}
	if (sceneCount == 38) {
		storyTime(sceneCount);
	}
	if (sceneCount == 39) {
		storyTime(sceneCount);
	}
	if (sceneCount == 40) {
		storyTime(sceneCount);
	}
	if (sceneCount == 41) {
		storyTime(sceneCount);
	}
	if (sceneCount == 42) {
		storyTime(sceneCount);
	}
	if (sceneCount == 43) {
		storyTime(sceneCount);
	}
	if (sceneCount == 44) {
		storyTime(sceneCount);
	}
	if (sceneCount == 45) {
		storyTime(sceneCount);
	}
	if (sceneCount == 46) {
		storyTime(sceneCount);
	}
	if (sceneCount == 47) {
		storyTime(sceneCount);
	}
	if (sceneCount == 48) {
		storyTime(sceneCount);
	}
	if (sceneCount == 49) {
		storyTime(sceneCount);
	}
	if (sceneCount == 50) {
		storyTime(sceneCount);
	}
	if (sceneCount == 51) {
		storyTime(sceneCount);
	}
	if (sceneCount == 52) {
		storyTime(sceneCount);
	}
	if (sceneCount == 53) {
		storyTime(sceneCount);
	}
	if (sceneCount == 54) {
		storyTime(sceneCount);
	}
	if (sceneCount == 55) {
		storyTime(sceneCount);
	}
	if (sceneCount == 56) {
		storyTime(sceneCount);
	}
	if (sceneCount == 57) {
		storyTime(sceneCount);
	}
	if (sceneCount == 58) {
		storyTime(sceneCount);
	}
	if (sceneCount == 59) {
		storyTime(sceneCount);
	}
	if (sceneCount == 60) {
		storyTime(sceneCount);
	}
	print(sceneCount);
	//print(ccMeet);
	textAlign(LEFT);
	textSize(15);
	text(mouseX, 10, 10);
	text(mouseY, 10, 30);
}

function titleScreen() { //scene 1
	textFont(fancy, 70);
	background(schoolFrontBg);
	textAlign(CENTER);
	text("DROPS IN THE WIND", width / 2, 200);
	// startB = new Sprite();
	// startB.pos = {x: width/2, y: height/2};
	// if (keyIsPressed === true) {
	// 	sceneManager.showScene( information );
	// }
	square(width / 2, height / 2, 100, 5);
	textFont(normalF, 20);
	textAlign(CENTER, CENTER);
	text("START", width / 2, height / 2);
}

function information() { //scene 2
	//startB.hide();
	background(0);
	fill(255);
	textAlign(LEFT);
	textFont(normalF, 20);
	text("You're a new student at Tandon High School.", 10, 50);
	text("Everyone wants to get to know you.", 10, 100);
	text("People keep coming up to talk to you… who will you be closest ", 10, 200);
	text("with by the end of the day?", 10, 230);
	square(700, 500, 60, 5);
	textFont(normalF, 15);
	textAlign(CENTER, CENTER);
	fill(0);
	text("NEXT", 700, 500);
	// directionBtn = createButton("I'm Ready!");
	// directionBtn.position(700,550);
	// directionBtn.mousePressed(warning);
	//when the name is eventually entered
	// bgOpt becomes 2 and in the draw function, if bgOpt is 2, then scene change runs
	//scene change has its own if statements that change based on mouse pressed
}

function warning() { //scene 3
	background(0);
	fill(255, 0, 0);
	textAlign(LEFT);
	textFont(normalF, 20);
	text("Remember, your choices matter!", 10, 300);
	square(700, 500, 60, 5);
	textFont(normalF, 15);
	textAlign(CENTER, CENTER);
	fill(255);
	text("NEXT", 700, 500);
}

function schoolEnd() { //scene 26
	background(0);
	fill(255);
	textAlign(LEFT);
	textFont(normalF, 20);
	text("Class starts and the school day passes by quickly.", 10, 50);
	text("As you packup, you remember the commitments you made,", 10, 100);
	text("and realize you forgot to ask where to meet up.", 10, 150);
	text("“Oh well, hopefully they’ll come looking for me on the way out”", 10, 250);
	text("out.”", 10, 250);
	stroke(0);
	square(700, 500, 60, 5);
	textFont(normalF, 15);
	textAlign(CENTER,CENTER);
	fill(255);
	text("NEXT", 700, 500);
}

function goodEnding() {
	background(0);
	fill(255, 0, 0);
	textAlign(LEFT);
	textFont(normalF, 20);
	text("Good ending!", 10, 50);
	fill(0);
	text("You end up leaving school that day happy, albeit a bit", 10, 100);
	text("confused over the people you met. Everyone was a bit", 10, 150);
	text("strange in their own way. You wonder what the day", 10, 200);
	text("would be like if you could live it again…", 10, 250);
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

function storyTime(sceneCount) {
	if (sceneCount == 5) { //scene 5
		// enterName.hide();
		// name.hide();
		background(dayHall);
		image(cpHappy,0,0);
		textBox(1); //christina box
		textAlign(LEFT);
		text("Hi " + "Y/N" + "! Welcome to Tandon High!", 30, 460);
		text("I’m Christina, the class president. I’ll show you around.", 30, 490);
	} else if (sceneCount == 6) { //scene 6
		image(cpNeutral,0,0);
		textBox(1);
		textAlign(LEFT);
		text("Here, we have the-", 30, 460);
	} else if (sceneCount == 7) { //scene 7
		background(dayHall);
		image(cpNeutral,475,0);
		textBox(2);
		textAlign(LEFT);
		text("Hi " + "Y/N" + ", do you remember me?", 30, 460)
		optButtons();
	} else if (sceneCount == 8) { //scene 8
		background(dayHall);
		image(cpNeutral,0,0);
		textBox(1);
		textAlign(LEFT);
		text("Uh, ok… let’s continue with the tour.", 30, 460)
	} else if (sceneCount == 9) { //scene 9
		background(dayClass);
		image(cpHappy,0,0);
		textBox(1);
		textAlign(LEFT);
		text("This is our classroom.", 30, 460);
		text("Take a good look around! You'll be here for the next year.", 30, 490);
	} else if (sceneCount == 10) { //scene 10
		background(dayClass);
		image(cpNeutral,475,0);
		textBox(3);
		textAlign(LEFT);
		text("OMG! Who is this?", 30, 460);
	} else if (sceneCount == 11) { //scene 11
		background(dayClass);
		image(cpAnnoy,475,0);
		textBox(1);
		textAlign(LEFT);
		text("This is our new student.", 30, 460);
	} else if (sceneCount == 12) { //scene 12
		background(dayClass);
		image(cpAnnoy,475,0);
		textBox(0);
		textAlign(LEFT);
		text("Uh... *Christina looks annoyed...*", 30, 460);
	} else if (sceneCount == 13) { //scene 13
		background(dayClass);
		image(cpAnnoy,475,0);
		textBox(3);
		textAlign(LEFT);
		text("Aww! You’re so cute! I’m Pari, what’s your name?", 30, 460);
	} else if (sceneCount == 14) { //scene 14
		background(dayClass);
		image(cpAngry,475,0);
		textBox(1);
		textAlign(LEFT);
		text("Their name is Y/N! We need to finish the tour now.", 30, 460);
	} else if (sceneCount == 15) { //scene 15
		background(dayClass);
		image(cpAnnoy,475,0);
		textBox(3);
		textAlign(LEFT);
		text("Damn, ok class pres. Well Y/N, come meet me after ", 30, 460);
		text("school for a fun welcome gift.", 30, 490);
		text("*wink*", 30, 520);
	} else if (sceneCount == 16) { //scene 16
		background(dayClass);
		image(cpNeutral,0,0);
		textBox(1);
		textAlign(LEFT);
		text("*Christina pulls you to the side*", 30, 460);
		text("They’re the class clown, don’t trust them.", 30, 490);
	} else if (sceneCount == 17) { //scene 17
		background(dayClass);
		image(cpNeutral,475,0);
		textBox(0);
		textAlign(LEFT);
		text("*Will you accept Pari's invite?*", 30, 460);
		optButtons();
	} else if (sceneCount == 18) { //scene 18
		background(dayClass);
		image(cpNeutral,475,0);
		textBox(3);
		textAlign(LEFT);
		text("Yay! Ok, I’ll um… see you then!", 30, 460);
	} else if (sceneCount == 19) { //scene 19
		background(dayClass);
		image(cpAnnoy,0,0);
		textBox(1);
		textAlign(LEFT);
		text("*sigh* Ok, you’’ll probably regret that.", 30, 460);
		text("Class is about to start, so I’ll show you one more room.", 30, 490);
	} else if (sceneCount == 20) { //scene 20
		background(dayNurse);
		image(cpHappy,0,0);
		textBox(1);
		textAlign(LEFT);
		text("Ok, so this is the nurse’s-", 30, 460);
	} else if (sceneCount == 21) { //scene 21
		background(dayNurse);
		image(cpHappy,475,0);
		textBox(0);
		textAlign(LEFT);
		text("Oof! I’m so sorry!", 30, 460);
		text("*You bump into a wall? No... a boy??*", 30, 490);
		text("*You look up, stunned by the glare*", 30, 520);
		optButtons();
	} else if (sceneCount == 22) { //scene 22
		background(dayNurse);
		image(cpNeutral,475,0);
		textBox(5);
		textAlign(LEFT);
		text("*The scary guy smiles at you. It's... charming?*", 30, 460);
	} else if (sceneCount == 23) { //scene 23
		background(dayNurse);
		image(cpAngry,475,0);
		textBox(1);
		textAlign(LEFT);
		text("Oh, absolutely not. *Christina pulls you away*", 30, 460);
	} else if (sceneCount == 24) { //scene 24
		background(dayHall);
		image(cpNeutral,0,0);
		textBox(1);
		textAlign(LEFT);
		text("That's Sumin, don't talk to him. There are rumors he’s ", 30, 460);
		text("a gangster. Anyways, class is about to start. If ", 30, 490);
		text("you’re free, do you want to meet up after class?", 30, 520);
		text("I can show you around town, too.", 30, 550);
		optButtons();
	} else if (sceneCount == 25) { //scene 25
		background(dayHall);
		image(cpEmb,0,0);
		textBox(1);
		textAlign(LEFT);
		text("Ok, cool! See you then!", 30, 460);
	} else if (sceneCount == 27) { //scene 27
		background(afterClass);
		textBox(3);
		textAlign(LEFT);
		text("*as you pack up, Pari finds you*", 30, 460);
		text("Hey there Y/N…", 30, 490);
	} else if (sceneCount == 28) { //scene 28
		background(afterClass);
		textBox(0);
		textAlign(LEFT);
		text("Hey Pari! What did you want to meet for?", 30, 460);
	} else if (sceneCount == 29) { //scene 29
		background(afterClass);
		textBox(3);
		textAlign(LEFT);
		text("Ahh well… you seem nice so I wanted to give you a gift?", 30, 460);
	} else if (sceneCount == 30) { //scene 30
		background(afterClass);
		textBox(3);
		textAlign(LEFT);
		text("Do you want to share a soda?", 30, 460);
		optButtons();
	} else if (sceneCount == 31) { //scene 31
		background(afterClass);
		textBox(0);
		textAlign(LEFT);
		text("*You accept the soda and take a few sips, but", 30, 460);
		text("notice that Pari is not doing the same*", 30, 490);
		text("Is something wr-", 30, 520);
	} else if (sceneCount == 32) { //scene 32
		background(afterClass);
		textBox(0);
		textAlign(LEFT);
		text("*Your vision goes blurry. The last thing", 30, 460);
		text("you hear is Pari’s telltale laugh as you collapse", 30, 490);
		text("Why did she do it? Just for the laughs??*", 30, 490);
	} else if (sceneCount == 33) { //scene 33
		sodaDeath();
	} else if (sceneCount == 34) { //scene 34
		background(afterClass);
		textBox(3);
		textAlign(LEFT);
		text("Oh, ok… I’ll see you then...", 30, 460);
	} else if (sceneCount == 35) { //scene 35
		background(afterHall);
		textBox(0);
		textAlign(LEFT);
		text("*As you leave, you find Augustin*", 30, 460);
	} else if (sceneCount == 36) { //scene 36
		background(afterHall);
		textBox(0);
		textAlign(LEFT);
		text("Hey Augustin, you wanted to catch up?", 30, 460);
	} else if (sceneCount == 37) { //scene 37
		background(afterHall);
		textBox(2);
		textAlign(LEFT);
		text("Yeah, but first I just wanted to say… I’ve been thinking", 30, 460);
		text("of you ever since we last saw each other as kids. I’ve", 30, 490);
		text("never forgotten my best friend.", 30, 520);
	} else if (sceneCount == 38) { //scene 38
		background(afterHall);
		textBox(2);
		textAlign(LEFT);
		text("Will you accept these flowers to mark our new", 30, 460);
		text("beginnings?", 30, 490);
		optButtons();
	} else if (sceneCount == 39) { //scene 39
		background(afterHall);
		textBox(0);
		textAlign(LEFT);
		text("Aww of course! Wow, these are beautiful! Are they roses?", 30, 460);
		text("*You sniff them. They’re so fragrant! But you notice", 30, 490);
		text("something pricking your skin…*", 30, 520);
	} else if (sceneCount == 40) { //scene 40
		background(afterHall);
		textBox(0);
		textAlign(LEFT);
		text("*You suddenly notice the thorns of the roses have torn", 30, 460);
		text("cuts on your hand, and each thorn has been coated ", 30, 490);
		text("in some strange substance. As you collapse, you", 30, 520);
		text("hear a faint “I’m sorry”*", 30, 550);
	} else if (sceneCount == 41) { //scene 41
		roseDeath();
	} else if (sceneCount == 42) { //scene 42
		background(afterHall);
		textBox(2);
		textAlign(LEFT);
		text("It’s alright… maybe it’s too soon. I’m sorry, I need a minute.", 30, 460);
	} else if (sceneCount == 43) { //scene 43
		background(afterHall);
		textBox(0);
		textAlign(LEFT);
		text("*You shake off what just happened and head to the", 30, 460);
		text(" courtyard. You’re suddenly hit with deja vu as you bump", 30, 490);
		text("into something again*", 30, 520);
	} else if (sceneCount == 44) { //scene 44
		background(afterHall);
		textBox(0);
		textAlign(LEFT);
		text("*You’re face to face with Sumin*", 30, 460);
		text("Oh, hello…", 30, 490);
	} else if (sceneCount == 45) { //scene 45
		background(afterHall);
		textBox(4);
		textAlign(LEFT);
		text("Hey… sorry about earlier. I got flustered because that", 30, 460);
		text("was the first time someone wasn't scared of me. I know", 30, 490);
		text("there are rumors about me but I’m really not a bad guy.", 30, 490);
	} else if (sceneCount == 46) { //scene 46
		background(afterHall);
		textBox(4);
		textAlign(LEFT);
		text("If you go out with me, I’ll do whatever you ask. My gang", 30, 460);
		text("and I will always protect you.", 30, 490);
		text("Will you let me take you on one date?", 30, 520);
		optButtons();
	} else if (sceneCount == 47) { //scene 47
		background(afterHall);
		textBox(4);
		textAlign(LEFT);
		text("Really? Oh, you have no idea how happy that makes me.", 30, 460);
		text("*Sumin hugs you*", 30, 490);
	} else if (sceneCount == 48) { //scene 48
		goodEnding();
	} else if (sceneCount == 49) { //scene 49
		background(afterHall);
		textBox(4);
		textAlign(LEFT);
		text("Oh, that’s alright. You did just meet me, afterall. Maybe", 30, 460);
		text(" one day. I can win you over. *He waves goodbye and you", 30, 490);
		text(" think about how strange that interaction was*", 30, 520);
	} else if (sceneCount == 50) { //scene 50
		background(afterHall);
		image(cpNeutral,0,0);
		textBox(0);
		textAlign(LEFT);
		text("*You head to the school gates and see the class president", 30, 460);
		text("waiting for you. You realize she would have waited for ", 30, 490);
		text("you no matter what you said*", 30, 520);
	} else if (sceneCount == 51) { //scene 51
		background(afterHall);
		image(cpHappy,0,0);
		textBox(1);
		textAlign(LEFT);
		text("Hey there Y/N! Heading home?", 30, 460);
	} else if (sceneCount == 52) { //scene 52
		background(afterHall);
		image(cpEmb,0,0);
		textBox(0);
		textAlign(LEFT);
		text("Yeah, but did you want to explore the town together? I", 30, 460);
		text("feel like it would be fun.", 30, 490);
	} else if (sceneCount == 53) { //scene 53
		background(afterHall);
		image(cpHappy,0,0);
		textBox(1);
		textAlign(LEFT);
		text("I thought you would never ask.", 30, 460);
	} else if (sceneCount == 54) { //scene 50
		background(dayHall);
		image(cpNeutral,475,0);
		textBox(2);
		textAlign(LEFT);
		text("Really? Wow, that's such a relief! I was scared you had", 30, 460);
		text("forgotten me.", 30, 490);
	} else if (sceneCount == 55) { //scene 55
		background(dayHall);
		image(cpNeutral,475,0);
		textBox(0);
		textAlign(LEFT);
		text("What? I could never forget my childhood best friend.", 30, 460);
	} else if (sceneCount == 56) { //scene 56
		background(dayHall);
		image(cpNeutral,475,0);
		textBox(2);
		textAlign(LEFT);
		text("You have no idea how happy I am to hear that. You know", 30, 460);
		text(" what, meet up with me after school, we should catch up!", 30, 490);
		text(" *Augustin leaves and you continue with the tour*", 30, 520);
	} else if (sceneCount == 57) { //scene 57
		background(dayClass);
		image(cpAnnoy,475,0);
		textBox(3);
		textAlign(LEFT);
		text("Oh, alright. I see where I’m not wanted. I’ll hit the waves.", 30, 460);
	} else if (sceneCount == 58) { //scene 58
		background(dayClass);
		image(cpHappy,0,0);
		textBox(1);
		textAlign(LEFT);
		text("Smart decision. Pari’s just a distraction, nothing more.", 30, 460);
	  text(" Let’s continue the tour. Let’s continue the tour.", 30, 490);
	} else if (sceneCount == 59) { //scene 59
		background(dayNurse);
		image(cpAnnoy,475,0);
		textBox(5);
		textAlign(LEFT);
		text("*The guy frowns harder. He did not seem to like that you", 30, 460);
		text(" flinched*", 30, 490);
		text("What is wrong with you??", 30, 520);
	}else if (sceneCount == 60) { //scene 59
		background(dayHall);
		image(cpSad,0,0);
		textBox(1);
		textAlign(LEFT);
		text("Ahh, ok, well… just let me know!", 30, 460);
	}
}

function textBox(chara) { //method for the different character textboxes
	rectMode(CORNER);
	fill(255, 214, 174);
	stroke(178, 58, 30);
	strokeWeight(3);
	rect(22.5, 425.5, 748, 156, 5); //bigger rectangle dimensions
	if (chara == 1) { //christina text box
		fill(253, 187, 199);
		stroke(178, 58, 30);
		rect(53, 396, 233, 39, 5); //smaller rectangle
		fill(0);
		textSize(20);
		noStroke();
		textAlign(CENTER, CENTER);
		text("Christina", 53 + 233 / 2, 396 + 39 / 2);
		stroke(253, 187, 199);
		image(nextArrow, 730, 550);
	} else if (chara == 2) { //augustin text box
		fill(71, 163, 255);
		stroke(178, 58, 30);
		rect(53, 396, 233, 39, 5); //smaller rectangle
		fill(0);
		textSize(20);
		noStroke();
		textAlign(CENTER, CENTER);
		text("Augustin", 53 + 233 / 2, 396 + 39 / 2);
		stroke(71, 163, 255);
		image(nextArrow, 730, 550);
	} else if (chara == 3) { //pari text box
		fill(245, 135, 51);
		stroke(178, 58, 30);
		rect(53, 396, 233, 39, 5); //smaller rectangle
		fill(0);
		textSize(20);
		noStroke();
		textAlign(CENTER, CENTER);
		text("Pari", 53 + 233 / 2, 396 + 39 / 2);
		stroke(245, 135, 51);
		image(nextArrow, 730, 550);
	} else if (chara == 4) { //sumin text box
		fill(164, 134, 194);
		stroke(178, 58, 30);
		rect(53, 396, 233, 39, 5); //smaller rectangle
		fill(0);
		textSize(20);
		noStroke();
		textAlign(CENTER, CENTER);
		text("Sumin", 53 + 233 / 2, 396 + 39 / 2);
		stroke(164, 134, 194);
		image(nextArrow, 730, 550);
	} else if (chara == 5) { //sumin mystery text box
		fill(164, 134, 194);
		stroke(178, 58, 30);
		rect(53, 396, 233, 39, 5); //smaller rectangle
		fill(0);
		textSize(20);
		noStroke();
		textAlign(CENTER, CENTER);
		text("?!?", 53 + 233 / 2, 396 + 39 / 2);
		stroke(164, 134, 194);
		image(nextArrow, 730, 550);
	} else if (chara == 0) { //y/n text box
		fill(255);
		stroke(178, 58, 30);
		rect(53, 396, 233, 39, 5); //smaller rectangle
		fill(0);
		textSize(20);
		noStroke();
		textAlign(CENTER, CENTER);
		text("Y/N", 53 + 233 / 2, 396 + 39 / 2);
		stroke(255);
		image(nextArrow, 730, 550);
	}
}

function optButtons() { //method for the option buttons that pop up
	fill(102, 232, 95);
	square(width / 2 - 50, 100, 100, 5); //yes
	textFont(normalF, 15);
	textAlign(CENTER, CENTER);

	fill(255, 51, 68);
	square(width / 2 - 50, 220, 100, 5); //no
	textFont(normalF, 15);
	textAlign(CENTER, CENTER);

	if (sceneCount == 7) { //text for scene 7 buttons
		stroke(0);
		fill(102, 232, 95);
		text("Augustin...?", width / 2, 100 + 100 / 2);
		fill(255, 51, 68);
		text("Uh...no?", width / 2, 220 + 100 / 2);
	} else if (sceneCount == 17) { //text for scene 7 buttons
		stroke(0);
		fill(102, 232, 95);
		text("Sure, why not!", width / 2, 100 + 100 / 2);
		fill(255, 51, 68);
		text("I'm good, thanks.", width / 2, 220 + 100 / 2);
	} else if (sceneCount == 21) { //text for scene 7 buttons
		stroke(0);
		fill(102, 232, 95);
		text("Flinch.", width / 2, 100 + 100 / 2);
		fill(255, 51, 68);
		text("Glare back.", width / 2, 220 + 100 / 2);
	} else if (sceneCount == 24) { //text for scene 7 buttons
		stroke(0);
		fill(102, 232, 95);
		text("Of course.", width / 2, 100 + 100 / 2);
		fill(255, 51, 68);
		text("Maybe another day?", width / 2, 220 + 100 / 2);
	} else if (sceneCount == 30) { //text for scene 7 buttons
		stroke(0);
		fill(102, 232, 95);
		text("Sure, why not.", width / 2, 100 + 100 / 2);
		fill(255, 51, 68);
		text("I'm not in the mood", width / 2, 220 + 100 / 2);
	} else if (sceneCount == 38) { //text for scene 7 buttons
		stroke(0);
		fill(102, 232, 95);
		text("Aww, thank you!", width / 2, 100 + 100 / 2);
		fill(255, 51, 68);
		text("It's too soon...", width / 2, 220 + 100 / 2);
	} else if (sceneCount == 46) { //text for scene 7 buttons
		stroke(0);
		fill(102, 232, 95);
		text("Oh, sure...", width / 2, 100 + 100 / 2);
		fill(255, 51, 68);
		text("Who even are you...", width / 2, 220 + 100 / 2);
	}
}

function mouseReleased() //method that registers changes between scenes when either an arrow/option button is pressed
{
	if (sceneCount == 1) {
		if (mouseX > 350 && mouseX < 450 &&
			mouseY > 250 && mouseY < 350) {
			sceneCount = 2;
		}
	} else if (sceneCount == 2) {
		if (mouseX > 670 && mouseX < 730 &&
			mouseY > 470 && mouseY < 530) {
			sceneCount = 3;
		}
	} else if (sceneCount == 3) {
		if (mouseX > 670 && mouseX < 730 &&
			mouseY > 470 && mouseY < 530) {
			sceneCount = 5;
		}
	} else if (sceneCount == 5) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 6;
		}
	} else if (sceneCount == 6) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 7;
		}
	} else if (sceneCount == 7) {
		if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
			mouseY > 100 && mouseY < 200) { //yes
			sceneCount = 54;
			cfMeet = true;
		} else if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
			mouseY > 220 && mouseY < 320) { //no
			sceneCount = 8;
		}
	} else if (sceneCount == 8) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 9;
		}
	} else if (sceneCount == 9) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 10;
		}
	} else if (sceneCount == 10) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 11;
		}
	} else if (sceneCount == 11) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 12;
		}
	} else if (sceneCount == 12) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 13;
		}
	} else if (sceneCount == 13) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 14;
		}
	} else if (sceneCount == 14) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 15;
		}
	} else if (sceneCount == 15) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 16;
		}
	} else if (sceneCount == 16) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 17;
		}
	} else if (sceneCount == 17) {
		if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
			mouseY > 100 && mouseY < 200) { //yes
			sceneCount = 18;
			ccMeet = true;
		} else if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
			mouseY > 220 && mouseY < 320) { //no
			sceneCount = 57;
		}
	} else if (sceneCount == 18) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 19;
		}
	} else if (sceneCount == 19) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 20;
		}
	} else if (sceneCount == 20) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 21;
		}
	} else if (sceneCount == 21) {
		if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
			mouseY > 100 && mouseY < 200) { //flinch
			sceneCount = 59;
		} else if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
			mouseY > 220 && mouseY < 320) { //glare back
			sceneCount = 22;
			sbMeet = true;
		}
	} else if (sceneCount == 22) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 23;
		}
	} else if (sceneCount == 23) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 24;
		}
	} else if (sceneCount == 24) {
		if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
			mouseY > 100 && mouseY < 200) { //yes
			sceneCount = 25;
		} else if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
			mouseY > 220 && mouseY < 320) { //rejection :((
			sceneCount = 60;
		}
	} else if (sceneCount == 25) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 26;
		}
	} else if (sceneCount == 26) {
		if (mouseX > 670 && mouseX < 730 &&
			mouseY > 470 && mouseY < 530) {
			if(ccMeet == true){
				sceneCount = 27;
			} else if (cfMeet == true){
				sceneCount = 35;
			} else if(sbMeet == true){
				sceneCount = 43;
			} else{
				sceneCount = 50;
			}
		}
	} else if (sceneCount == 27) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 28;
		}
	} else if (sceneCount == 28) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 29;
		}
	} else if (sceneCount == 29) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 30;
		}
	} else if (sceneCount == 30) {
		if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
			mouseY > 100 && mouseY < 200) { //yes
			sceneCount = 31;
		} else if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
			mouseY > 220 && mouseY < 320) { //rejection :((
			sceneCount = 34;
		}
	} else if (sceneCount == 31) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 32;
		}
	} else if (sceneCount == 32) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 33;
		}
	} else if (sceneCount == 34) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			if (cfMeet == true){
				sceneCount = 35;
			} else if(sbMeet == true){
				sceneCount = 43;
			} else{
				sceneCount = 50;
			}
		}
	} else if (sceneCount == 35) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 36;
		}
	} else if (sceneCount == 36) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 37;
		}
	} else if (sceneCount == 37) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 38;
		}
	} else if (sceneCount == 38) {
		if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
			mouseY > 100 && mouseY < 200) { //yes
			sceneCount = 39;
		} else if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
			mouseY > 220 && mouseY < 320) { //rejection :((
			sceneCount = 42;
		}
	} else if (sceneCount == 39) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 40;
		}
	} else if (sceneCount == 40) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 41;
		}
	} else if (sceneCount == 42) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			if(sbMeet == true){
				sceneCount = 43;
			} else{
				sceneCount = 50;
			}
		}
	} else if (sceneCount == 43) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 44;
		}
	} else if (sceneCount == 44) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 45;
		}
	} else if (sceneCount == 45) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 46;
		}
	} else if (sceneCount == 46) {
		if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
			mouseY > 100 && mouseY < 200) { //yes
			sceneCount = 47;
		} else if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
			mouseY > 220 && mouseY < 320) { //rejection :((
			sceneCount = 49;
		}
	} else if (sceneCount == 47) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 48;
		}
	} else if (sceneCount == 49) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 50;
		}
	} else if (sceneCount == 50) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 51;
		}
	} else if (sceneCount == 51) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 52;
		}
	} else if (sceneCount == 52) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 53;
		}
	} else if (sceneCount == 53) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 48;
		}
	}else if (sceneCount == 54) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 55;
		}
	}else if (sceneCount == 55) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 56;
		}
	}else if (sceneCount == 56) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 9;
		}
	}else if (sceneCount == 57) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 58;
		}
	}else if (sceneCount == 58) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 20;
		}
	}else if (sceneCount == 59) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 23;
		}
	}else if (sceneCount == 60) {
		if (mouseX > 730 && mouseX < 757 &&
			mouseY > 550 && mouseY < 572) {
			sceneCount = 26;
		}
	}
}




function sodaDeath() {
	tint(173, 108, 143);
	background(200);

	tint(108, 173, 118);
	image(video, 0, 0);
	for (let i = 0; i < bubbles.length; i++) {
		bubbles[i].drawBubble(bubbleimg);
		bubbles[i].bubbleMove();
	}
}

function roseDeath() {
	background(200);
	tint(200, 0, 0);
	image(video, 0, 0);
	//image(thorn1, 0, 0);
	noTint();
	for (let i = 0; i < thorny.length; i++) {
		translate(random(1, 5), random(1, 5));
		thorny[i].drawThorn(thorn1);
		//thorny[i].thornPlace();
	}
	for (let i = 0; i < roses.length; i++) {
		translate(0, 0);
		roses[i].drawRose(loneRose);
		//thorny[i].thornPlace();
	}
}