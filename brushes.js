let x = window.innerWidth
let y = window.innerHeight

let ebb = false
let rbb = false

function setup()
{
	createCanvas(x, y)
	rectMode(CENTER)
}

function draw()
{
	if(ebb)
	{
		ellipseBrush()
	}
	else if(rbb)
	{
		rectBrush()
	}
}

function ellipseBrush()
{
	fill(random(255), random(255), random(255))
	ellipse(mouseX, mouseY, 30, 30)
}

function rectBrush()
{
	fill(random(255), random(255), random(255))
	rect(mouseX, mouseY, 40, 40)
}

function keyPressed()
{
	if(key === 'e')
	{
		ebb = true
		rbb = false
	}
	else if(key === 'r')
	{
		ebb = false
		rbb = true
	}
	else if(key === 'o')
	{
		ebb = false
		rbb = false
	}
	else if(key === 'c')
	{
		background(255)
	}
}