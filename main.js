
// Create canvas variable
var canvas = new fabric.Canvas("a")
//Set initial positions for hole and hole images.
hole_x=0;
hole_y=0;
ball_y=400;
ball_x=800;

block_image_width = 500;
block_image_height = 500;

hole_obj="golf-h.jpg";
ball_obj="ball.png";

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png", function(img){
		hole_obj=img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj)
	});
	}
	new_image();


function new_image()
{
	// write code to Upload hole image on canvas
	fabric.Image.fromURL("ball.png", function(img){
		ball_obj=img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj)
	});
	}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the hole and hole images to finish the game. 
	And id coordinates matches them remove hole image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if(hole_x==hole_x&&hole_y==hole_y){
		canvas.remove(hole_obj);
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move hole upward.
		if(hole_y <=450){
			hole_y=hole_y+block_image_height;
			canvas.remove(hole_obj);
			new_image();
		}
	}

	function down()
	{
		 // Write a code to move hole downward.
		 if(hole_y <=0){
			hole_y=hole_y-block_image_height;
			canvas.remove(hole_obj);
			new_image();
		}
	}

	function left()
	{
		if(hole_x >5)
		{
			// Write a code to move hole left side.
			hole_x=hole_x-block_image_width;
			canvas.remove(hole_obj);
			new_image();
		}
	}

	function right()
	{
		if(hole_x <=1050)
		{
			// Write a code to move hole right side.
			hole_x=hole_x-block_image_width;
			canvas.remove(hole_obj);
			new_image();
		}
	}
	
}

