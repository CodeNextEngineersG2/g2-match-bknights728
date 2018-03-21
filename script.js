// image variables
var imageArray;
var backImage, sunImage, moonImage;
var transitionImage1, transitionImage2, transitionImage3;

// animation variables
var sunAnimation, moonAnimation;

// sprites variables
var spriteArray;
var sunSprite1, sunSprite2;
var moonSprite1, moonSprite2;
var spriteWidth, spriteHeight;
var spriteX, spriteY;

// game variables
var spritesActive;
var lives, matches;
var spriteOne, spriteTwo;

// UI variables
var gameScreen;

/*
 * function loadImages()
 * Called in the preload() function. Loads all images needed for your game
 * with the loadImage() function. When testing on your machine, be sure to
 * setup a local test server or the images will not load! Your coach will show
 * you how to do this.
 * Example:
   function loadImages() {
     myImage = loadImage("assets/img/image.png");
   }
 */


/*
 * function loadAnimations()
 * Called in the preload() function. Loads all animations using the built-in
 * p5.play function "loadAnimation()". Therefore, this function is called after
 * loadImages(). The loadAnimation() function takes image input in the order
 * you'd like the animation to be played, from the first frame to the last.
 * Example:
   function loadAnimations() {
     myAnimation = loadAnimation(img1, img2, img3, img4);
   }
 */



/*
 * function preload()
 * Called automatically by p5.play. Loads all assets for your game (e.g.,
 * images, sounds) before p5 calls setup(), to ensure that the game does not
 * begin running until the assets are loaded and ready. Therefore, this function
 * is essentially a "pre-setup" function. It should only call loadImages() and
 * loadAnimations(), in that order.
 */


/*
 * function setup()
 * Called automatically by p5.js when the game begins, but after preload().
 * Therefore, assets are assumed to have been loaded and ready before this
 * function is called.
 */


/*
 * function draw()
 */


/*
 * function resizeImages()
 * Resizes all images in imageArray such that each image has a width of
 * spriteWidth and a height of spriteHeight. To resize an image use the
 * resize(width, height) method on the image itself.
 * Example of resizing one image:
   image.resize(40, 50);
 */


/*
 * function createSprites()
 * Initializes each sprite variable (e.g., sunSprite1) as a sprite object
 * through the createSprite(x, y, width, height) p5.play method. For all sprites,
 * x and y parameters should be passed values 0 and 0 (sprites are actually placed
 * in a separate function), while width and height correspond to spriteWidth and
 * spriteHeight.
 * Example:
   function createSprites() {
     mySprite = createSprite(0, 0, spriteWidth, spriteHeight);
   }
 */


/*
 * function addAnimations()
 * Adds an animation to each sprite in spriteArray (that is, each sprite).
 * The animations have already been loaded using loadAnimations(), so this
 * function is responsible for actually adding them to the sprites.
 * Additionally, this function initializes each animation's frameDelay, loop,
 * and playing properties. Finally, this function calls activateSprite(s) with
 * each sprite as input.
 */


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