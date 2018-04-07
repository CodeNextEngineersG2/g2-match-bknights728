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

// UI variables
var gameScreen;
var messageDisplay, livesDisplay;
var resetButton, musicButton;

function loadImages(){
  backImage = loadImage("assests/img/back.png");
  transitionImage1 = loadImage("assests/img/transition1.png");
  transitionImage2 = loadImage("assests/img/transition2.png");
  transitionImage3 = loadImage("assests/img/transition3.png");
  sunImage = loadImage("assests/img/sun.png");
  moonImage = loadImage("assests/img/moon.png");
  boltImage = loadImage("assests/img/bolt.png");
  heartImage = loadImage("assests/img/heart.png");
  smileyImage = loadImage("assests/img/smiley.png");
  cloudImage = loadImage("assests/img/cloud.png");
}


function loadAnimations(){
  sunAnimation = loadAnimation(backImage, transitionImage1, transitionImage2, transitionImage3, sunImage);
  moonImage = loadAnimation(backImage, transitionImage1, transitionImage2, transitionImage3, moonImage);
  boltImage = loadAnimation(backImage, transitionImage1, transitionImage2, transitionImage3, boltImage);
  heartImage = loadAnimation(backImage, transitionImage1, transitionImage2, transitionImage3, heartImage);
  smileyImage = loadAnimation(backImage, transitionImage1, transitionImage2, transitionImage3, smileyImage);
  cloudImage = loadAnimation(backImage, transitionImage1, transitionImage2, transitionImage3, cloudImage);
}


/*
 * function loadSounds()
 * Works very similarly to loadImages(), only for music and sound effects.
 * Example:
   function loadSounds() {
     soundFormats("mp3", "wav");
     mySound = loadSound("assets/sound/sound.wav");
     myOtherSound = loadSound("assets/sound/otherSound.mp3");
   }
 */


function preload(){
  loadImages();
  loadAnimations();
}


function setup(){
  gameScreen = createCanvas(790,370);
  gameScreen.parent("#game-screen");
  spriteWidth = 120;
  spriteHeight = 168;
  spriteX = 70;
  spriteY = 95;
  imageArray = [backImage, sunImage, moonImage, boltImage, heartImage, smileyImage, cloudImage];
  resizeImages();
  createSprites();
  spriteArray = [sunSprite1, sunSprite2, moonSprite1, moonSprite2, boltSprite1, boltSprite2, heartSprite1, heartSprite2, smileySprite1, smileySprite2, cloudSprite1, cloudSprite2];
}


/*
 * function draw()
 */

/*
 * function init()
 * Initializes various elements of the game. Called in both setup() and
 * resetGame(). Helps reduce some of the bloat and redundancy in both of those
 * functions (DRY principle = "don't repeat yourself")
 */


/*
 * function resetGame()
 * Resets the game by calling init(), resetAllSprites(), then after a 1000
 * millisecond delay, calls shuffle(spriteArray, true), placeSprites(), and
 * sets spritesActive to true.
 */


/*
 * function toggleMusic()
 * Toggles the background music on and off.
 */


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
    //activateSprite(spriteArray[i]);
  }
}


/*
 * function placeSprites()
 * Places all sprites in spriteArray on the game screen, according to any
 * pattern you like. For starters, try arranging the sprites in a simple
 * grid-like pattern (e.g., 2x2 if you only have four sprites).
 */


/*
 * function activateSprite(s)
 * Activates a sprite by initializing its onMousePressed property to a function.
 * This will essentially cause the sprite to "come alive" and behave like a
 * real playing card when it is clicked.
 * To initialize the onMousePressed property as a function, use a function
 * expression.
 * The onMousePressed function itself plays sprite animations and assigns
 * spriteOne and spriteTwo to sprites in the order tht they are clicked. When
 * two sprites have been clicked, the function calls checkMatch().
 */



/*
 * function checkMatch()
 * Checks if spriteOne and spriteTwo match. If they do, the player is notified
 * in some way and those sprites remain "flipped". If they do not, the player is
 * notified in some way and, after a short delay, the sprites are returned to
 * face-down position. If the player has matched all sprites, they are notified
 * that they have won. IF the player has matched incorrectly too many times
 * (as indicated by the "lives" variable), they are notified that they have
 * lost and all sprites are simultaneously flipped face-up, revealing their
 * locations to the player. Win or lose, the player is given the option to
 * reset and try again with a fresh shuffle.
 */

/*
 * function flipAllSprites()
 * Flips all sprites in spriteArray to their last animation frame (i.e.,
 * "face-up").
 */

 /*
  * function resetAllSprites()
  * Does exactly the opposite of the above function!
  */
