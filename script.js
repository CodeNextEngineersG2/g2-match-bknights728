// image variables
var imageArray;
var backImage, boltImage, cloudImage, sunImage, moonImage, smileyImage, heartImage;
var transitionImage1, transitionImage2, transitionImage3;

// animation variables
var boltAnimation, cloudAnimation, sunAnimation, moonAnimation, smileyAnimation,
heartAnimation;

// sprite variables
var spriteArray;
var boltSprite1, boltSprite2;
var cloudSprite1, cloudSprite2;
var sunSprite1, sunSprite2;
var moonSprite1, moonSprite2;
var smileySprite1, smileySprite2;
var heartSprite1, heartSprite2;
var spriteWidth, spriteHeight;
var spriteX, spriteY;

// sound variables
var flipSound, matchSound, nopeSound, winSound, loseSound, bgMusic;

// game variables
var firstsprite, secondsprite;
var lives, matches;
var spritesActive;
var firstChoice, secondChoice;

// UI variables
var gameScreen;
var messageDisplay, livesDisplay;
var resetButton, musicButton;

function loadImages(){
  backImage = loadImage("assets/img/back.png");
  transitionImage1 = loadImage("assets/img/transition1.png");
  transitionImage2 = loadImage("assets/img/transition2.png");
  transitionImage3 = loadImage("assets/img/transition3.png");
  sunImage = loadImage("assets/img/Yeezy.png");
  moonImage = loadImage("assets/img/Sneaker-PNG-Transparent-Image.png");
  boltImage = loadImage("assets/img/Running .png");
  heartImage = loadImage("assets/img/Weird.png");
  smileyImage = loadImage("assets/img/Air Force.png");
  cloudImage = loadImage("assets/img/Jordan 1.png");
}


function loadAnimations(){
  sunAnimation = loadAnimation(backImage, transitionImage1, transitionImage2, transitionImage3, sunImage);
  moonAnimation = loadAnimation(backImage, transitionImage1, transitionImage2, transitionImage3, moonImage);
  boltAnimation = loadAnimation(backImage, transitionImage1, transitionImage2, transitionImage3, boltImage);
  heartAnimation = loadAnimation(backImage, transitionImage1, transitionImage2, transitionImage3, heartImage);
  smileyAnimation = loadAnimation(backImage, transitionImage1, transitionImage2, transitionImage3, smileyImage);
  cloudAnimation = loadAnimation(backImage, transitionImage1, transitionImage2, transitionImage3, cloudImage);
}

function loadSounds(){
   soundFormats("mp3", "wav");
   flipSound = loadSound("assets/sound/flip.wav");
   matchSound = loadSound("assets/sound/match.wav");
   nopeSound = loadSound("assets/sound/nope.wav");
   winSound = loadSound("assets/sound/win.wav");
   loseSound = loadSound("assets/sound/lose.wav");
   bgMusic = loadSound("assets/sound/bgm.mp3");
   }


function preload(){
  loadImages();
  loadAnimations();
  loadSounds();
}


function setup(){
  bgMusic.setVolume(.01);
  bgMusic.loop();
  gameScreen = createCanvas(1200,450);
  gameScreen.parent("#game-screen");
  messageDisplay = select("#message-display");
  livesDisplay = select("#lives-display");
  resetButton = select("#Reset");
  musicButton = select("#Music");
  resetButton.mousePressed(resetGame);
  musicButton.mousePressed(toggleMusic);
  init();
  spriteWidth = 160;
  spriteHeight = 210;
  imageArray = [backImage, sunImage, moonImage, boltImage, heartImage, smileyImage, cloudImage, transitionImage1, transitionImage2, transitionImage3];
  resizeImages();
  createSprites();
  spriteArray = [sunSprite1, sunSprite2, moonSprite1, moonSprite2, boltSprite1, boltSprite2, heartSprite1, heartSprite2, smileySprite1, smileySprite2, cloudSprite1, cloudSprite2];
  addAnimations();
  shuffle(spriteArray, true);
  placeSprites();
  spritesActive = true;
}



 function draw(){
  background(135, 206, 235);
  drawSprites();
 }
 

function init(){
  resetButton.hide();
  musicButton.show();
  messageDisplay.html("Lives: ");
  lives = 5;
  livesDisplay.html(lives);
  matches = 0;
  firstChoice = undefined;
  secondChoice = undefined;
  spriteX = 140;
  spriteY = 115;
}


function resetGame(){
  init();
  livesDisplay.show();
  livesDisplay.html(lives);
  resetAllSprites();setTimeout(function(){shuffle(spriteArray,true); placeSprites(); spritesActive=true;1000});
}


function toggleMusic(){
  if(bgMusic.isPlaying()){
    bgMusic.pause();
  }
  else{
    bgMusic.loop();
  }
}


function resizeImages(){
  for(var i=0;i<imageArray.length;i++){
    imageArray[i].resize(spriteWidth,spriteHeight);
  }
}


function createSprites(){
   sunSprite1 = createSprite(0, 0, spriteWidth, spriteHeight);
   sunSprite2 = createSprite(0, 0, spriteWidth, spriteHeight);
   moonSprite1 = createSprite(0, 0, spriteWidth, spriteHeight);
   moonSprite2 = createSprite(0, 0, spriteWidth, spriteHeight);
   boltSprite1 = createSprite(0, 0, spriteWidth, spriteHeight);
   boltSprite2 = createSprite(0, 0, spriteWidth, spriteHeight);
   heartSprite1 = createSprite(0, 0, spriteWidth, spriteHeight);
   heartSprite2 = createSprite(0, 0, spriteWidth, spriteHeight);
   smileySprite1 = createSprite(0, 0, spriteWidth, spriteHeight);
   smileySprite2 = createSprite(0, 0, spriteWidth, spriteHeight);
   cloudSprite1 = createSprite(0, 0, spriteWidth, spriteHeight);
   cloudSprite2 = createSprite(0, 0, spriteWidth, spriteHeight);
}


function addAnimations(){
  var animations = [sunAnimation, sunAnimation, moonAnimation, moonAnimation, boltAnimation, boltAnimation, heartAnimation, heartAnimation, smileyAnimation, smileyAnimation, cloudAnimation, cloudAnimation]; 
  for(var i=0;i<spriteArray.length; i++){
    spriteArray[i].addAnimation("flip", animations[i]);
    spriteArray[i].animation.frameDelay = 10;
    spriteArray[i].animation.looping = false;
    spriteArray[i].animation.playing = false;
    activateSprites(spriteArray[i]);
  }
}


function placeSprites(){
  for(var i=0;i<spriteArray.length;i++){
    spriteArray[i].position.x = spriteX;
    spriteArray[i].position.y = spriteY;
    if((i+1)%6 === 0){
      spriteX = 140;
      spriteY += spriteHeight + 11; 
    }
    else{
      spriteX += spriteWidth + 25;
    }
  }
}


function activateSprites(s){
  s.onMousePressed = function(){
    if(spritesActive && s.animation.getFrame() !== s.animation.getLastFrame()){
      if(firstChoice === undefined){
        firstChoice = s;
        flipSound.play();
        s.animation.goToFrame(s.animation.getLastFrame());
      }
      else if(s != firstChoice){
        secondChoice = s;
        flipSound.play();
        s.animation.goToFrame(s.animation.getLastFrame());
        checkMatch();
      }
    }
  }
}



function checkMatch(){
  var sunMatch = (firstChoice === sunSprite1 && secondChoice === sunSprite2 || firstChoice === sunSprite2 && secondChoice === sunSprite1);
  var moonMatch = (firstChoice === moonSprite1 && secondChoice === moonSprite2 || firstChoice === moonSprite2 && secondChoice === moonSprite1);
  var boltMatch = (firstChoice === boltSprite1 && secondChoice === boltSprite2 || firstChoice === boltSprite2 && secondChoice === boltSprite1);
  var heartMatch = (firstChoice === heartSprite1 && secondChoice === heartSprite2 || firstChoice === heartSprite2 && secondChoice === heartSprite1);
  var smileyMatch = (firstChoice === smileySprite1 && secondChoice === smileySprite2 || firstChoice === smileySprite2 && secondChoice === smileySprite1);
  var cloudMatch = (firstChoice === cloudSprite1 && secondChoice === cloudSprite2 || firstChoice === cloudSprite2 && secondChoice === cloudSprite1);
  if(sunMatch||moonMatch||boltMatch||heartMatch||smileyMatch||cloudMatch){
    matches++;
    matchSound.play();
    if(matches == spriteArray.length/2){
      musicButton.hide();
      resetButton.show();
      livesDisplay.hide();
      messageDisplay.html("You Win");
      //setTimeout(function(){alert("You win!");},500);
      spritesActive = false;
      winSound.play();
    }
    else{
      firstChoice = undefined;
      secondChoice = undefined;
    }
  }
  else{
    lives--;
    livesDisplay.html(lives);
    spritesActive = false;
    nopeSound.play();
    if(lives === 0){
      //setTimeout(function(){flipAllSprites(); alert("You lose!");},2000);
      flipAllSprites();
      musicButton.hide();
      resetButton.show();
      livesDisplay.hide();
      messageDisplay.html("You Lose");
    }
    else{
      setTimeout(function(){firstChoice.animation.goToFrame(0);secondChoice.animation.goToFrame(0);firstChoice = undefined; secondChoice = undefined; spritesActive = true;}, 1000);
    }
  }
}

function flipAllSprites(){
  for(var i=0;i<spriteArray.length;i++){
    spriteArray[i].animation.goToFrame(spriteArray[i].animation.getLastFrame());
  }
}

function resetAllSprites(){
   for(var i=0;i<spriteArray.length;i++){
    spriteArray[i].animation.goToFrame(0);
  }
}
