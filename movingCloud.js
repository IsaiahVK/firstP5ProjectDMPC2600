let x = window.innerWidth
let y = window.innerHeight
let cloudObj = new Cloud(x/2, y/10)
let alien = new Alien()
let laserExists = false
let score = 0


function preload()
{
	cloud = loadImage('cloud.png')
	laserImg = loadImage('laser.png')
	alienImg = loadImage('alien.png')

}



function setup()
{
	createCanvas(x, y)
	generateAlien()
	textSize(x/20)
}

function draw()
{
	let prevX = x
	let prevY = y
	x = window.innerWidth
	y = window.innerHeight
	if(prevX != x || prevY != y)
	{
		setup()
	}
	background(200, 28, 20)
	checkCollisions()
	text("Score: " + score.toString(), x/50, y/10)
	image(alienImg, alien.x, alien.y)
	if(laserExists)
	{
		image(laserImg, laser.x, laser.y)
		moveLaser()
	}
	image(cloud, cloudObj.x, cloudObj.y)
	if(keyIsDown(87) === true)
  	{
  		cloudUp()
  	}
  	else if(keyIsDown(65) === true)
  	{
    	cloudLeft()
  	}
	else if(keyIsDown(83) === true)
	{
	    cloudDown()
	}
	else if(keyIsDown(68) === true)
	{
	    cloudRight()
	}

	
}

function checkCollisions()
{
	if(laserExists)
	{
		if((laser.x >= alien.x && laser.x <= alien.x + alienImg.width) && (laser.y >= alien.y && laser.y <= alien.y + alienImg.height))
		{
			alienShot()
			console.log('alien down')
		}
	}
	
}

function alienShot()
{
	score += 1
	generateAlien()
}

function generateAlien()
{
	alien.x = getRandom(0, x-alienImg.width) //0, x-alienImg.width
	alien.y = getRandom(cloudObj.y+cloud.height, y-alienImg.height) //cloudObj.y+cloud.height, y-alienImg.height
	console.log(alien.x)
	console.log(alien.y)
}

function keyPressed()
{
	if(key === 'f')
	{
		shoot()
	}
}

function Cloud(x, y)
{
	this.x = x
	this.y = y
}

function Laser(x, y)
{
	this.x = x 
	this.y = y 
}

function Alien()
{
	this.x = 0 //0, x-alienImg.width
	this.y = 0 //cloud.y+cloud.height, y-alienImg.height
}

function shoot()
{
	laser = new Laser(cloudObj.x + (cloud.width/2), cloudObj.y + (cloud.height/2))
	laserExists = true
}

function moveLaser()
{
	if(laser.y < y)
	{
		laser.y += 10
	}
	else
	{
		laserExists = false
	}
}

function cloudUp()
{
	if(cloudObj.y > -cloud.height)
	{
		cloudObj.y -= 10
	}
}

function cloudDown()
{
	if(cloudObj.y < y)
	{
		cloudObj.y += 10
	}
}

function cloudLeft()
{
	if(cloudObj.x > -cloud.width)
	{
		cloudObj.x -= 10
	}
}

function cloudRight()
{
	if(cloudObj.x < x)
	{
		cloudObj.x += 10
	}
}

function getRandom(min, max) 
{
  return Math.random() * (max - min) + min;
}