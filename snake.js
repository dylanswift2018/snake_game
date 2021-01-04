const cvs = document.getElementById("snake");
const ctx= cvs.getContext("2d");

//creating the unit of the game 
const box =32;

//loading the images 
const ground = new Image();
ground.src= "img/ground.png";

const foodImg = new Image();
foodImg.src= "img/food.png";

//create the snake  
let snake = [];
snake[0] = {
    x:9*box,
    y:10*box
}

//creating food 
let food = {
    x: Math.floor(Math.random()*7+1)*box,
    y: Math.floor(Math.random()*15+3)*box
}

//create the score 
let score =0;

// draw function 
function draw()
{
    ctx.drawImage(ground,0,0);

     for(let i=0;i< snake.length; i++)
     {
         ctx.fillStyle= (i==0)? "green":"white";
         ctx.fillRect(snake[i].x,snake[i].y,box,box);

         ctx.strokeStyle= "red";
         ctx.strokeRect(snake[i].x,snake[i].y,box,box);
     }

     ctx.drawImage(foodImg, food.x, food.y);

}

//calling the draw function 

let game = setInterval(draw,100);