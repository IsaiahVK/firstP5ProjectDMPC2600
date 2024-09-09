let x = window.innerWidth
let y = window.innerHeight
let counter = 0
let array = createArray()
let arrayB = createArrayB()

function preload()
{

}

function setup()
{
	frameRate(60)
	createCanvas(x, y)
	for(let i = 25; i <= x; i += 50)
	{
		line(i, 0, i, y)
	}
	for(let i = 25; i <= y; i += 50)
	{
		line(0, i, x, i)
	}
	for(let i = 0; i <= y; i += 50)
	{
		line(0, i, x, y)
	}
	for(let i = 0; i <= y; i += 50)
	{
		line(x, i, 0, y)
	}
	for(let i = y; i >= 0; i -= 50)
	{
		line(0, i, x, 0)
	}
	for(let i = y; i >= 0; i -= 50)
	{
		line(x, i, 0, 0)
	}
	
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
	//background(255)
	if(counter > 10)
	{
		counter = 0
	}
	for(let a = 0; a <= x; a += 50)
	{
		for(let b = 0; b <= y; b += 50)
		{
			if((a/10) % 10 != 0) 
			{
				if(array[a][b] > 255)
				{
					arrayB[a][b] = true
				}
				else if(array[a][b] <= 0)
				{
					arrayB[a][b] = false
				}
				if(arrayB[a][b])
				{
					array[a][b] -= counter
				}
				else{
					array[a][b] += counter
				}
				fill(0, 0, array[a][b])
				//fill(random(0,20), random(0,20), random(0,255))
			}
			else
			{
				if(array[a][b] > 255)
				{
					arrayB[a][b] = true
				}
				else if(array[a][b] <= 0)
				{
					arrayB[a][b] = false
				}
				if(arrayB[a][b])
				{
					array[a][b] -= counter
				}
				else{
					array[a][b] += counter
				}
				fill(array[a][b],0, 0)
			}
			
			ellipse(a, b, 50, 50)
		}
		

	}
	counter+=1
}

function createArray()
{
	let array = []
	for(let xl = 0; xl <= x; xl+=50)
	{
		array[xl] = []
		for(let yl = 0; yl <= y; yl+=50)
		{
			array[xl][yl] = yl/10
		}
	}
	return array
}

function createArrayB()
{
	let array = []
	for(let xl = 0; xl <= x; xl+=50)
	{
		array[xl] = []
		for(let yl = 0; yl <= y; yl+=50)
		{
			array[xl][yl] = false
		}
	}
	return array
}