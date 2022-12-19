let startB;
let directionBtn;
let name;
let enterName;
let bg;
let nameBoxLength = 200;
let option;
let scene;

function preload(){
  schoolFrontBg = loadImage("images/school_front_bg.png")
  dayHall = loadImage("images/dayHall.png");
  nextArrow = loadImage("images/nextArrow.png")
  fancy = loadFont("images/font3.otf")
  normalF = loadFont("images/font0.otf")
}

function setup(){
  createCanvas(800,600);
  //bg = new Backgrounds();
  //bg.setting(1);
  option = 0;
  scene = 1;
  textFont(fancy,70);
  background(schoolFrontBg);
  text("DROPS IN THE WIND", 10,200);
  startB = createButton('START');
  startB.position(width/2,height/2);
  startB.mousePressed(information);
  
}


function draw(){
  storyTime();
}

function information(){
  startB.hide();
  background(0);
  fill(255);
  textFont(normalF,20);
  text("You're a new student at Tandon High School.",10,50);
  text("Everyone wants to get to know you.",10,100);
  text("People keep coming up to talk to you… who will you be closest ",10,200);
  text("with by the end of the day?",10,230);
  directionBtn = createButton("I'm Ready!");
  directionBtn.position(700,550);
  directionBtn.mousePressed(warning);
  //when the name is eventually entered
  // bgOpt becomes 2 and in the draw function, if bgOpt is 2, then scene change runs
  //scene change has its own if statements that change based on mouse pressed
}

function warning(){
  background(0);
  fill(255,0,0);
  text("Remember, your choices matter!",10,300)
  directionBtn.mousePressed(inputName);
}

function inputName(){
  directionBtn.hide();
  background(schoolFrontBg);
  fill(0);
  textSize(50);
  text("Welcome to Tandon High!",(width - textWidth("Welcome to Tandon High!"))/2,200);
  textSize(40);
  text("Your name is: ",(width - textWidth("Your name is:"))/2,275);
  name = createInput("What is your name?"); //creating the textbox
  enterName = createButton('enter'); //creating the button
  name.position(width/2 - nameBoxLength/2,height/2);
  enterName.position(width/2,height/2 + 50);
  name.size(nameBoxLength);
  enterName.mousePressed(name.changed(storyTime)); //when the button is clicked, run the greeting function on the name
  name.changed(storyTime); //when the name is entered (changed), run the greeting function
}

// function startStory(){
//   scene = 1;
// }

// function greeting(){
//   text("Hello there " + name.value() + "! Welcome to Tandon High School!")
//   storyTime();
// }

function textBox(chara){
  fill(255,214,174);
  stroke(178,58,30);
  strokeWeight(3);
  rect(22.5,425.5,748,156,5); //bigger rectangle dimensions
  if (chara = 1){ //christina text box
    fill(253,187,199);
    stroke(178,58,30);
    rect(53,396,233,39,5);
    fill(0);
    textSize(20);
    noStroke();
    text("Christina",(233 - textWidth("Christina"))/2,423);
    stroke(253,187,199);
  }
}

// function nextScene(){
//   image(nextArrow,730,550);
//   if(mouseIsPressed == true){
//     //if(mouseX >= 730 && mouseX <= 760 && mouseY >= 550 && mouseY <= 575){
//       scene = scene + 1;
//     //}
//   }
// }

function storyTime(){
  if (scene = 1){
    enterName.hide();
    name.hide();
    background(dayHall);
    textBox(1);
    text("Hi " + name.value() + "! Welcome to Tandon High!", 30,460);
    text("I’m Christina, the class president. I’ll show you around.", 30,490);
    //nextScene();
  } else if (scene == 2){
    print("please run this");
    textBox(1);
    text("Here, we have the-", 30,460);
  }
}

function mouseClicked(){
  if (scene >= 1){
  scene = scene +1;
  print(scene);
}
}