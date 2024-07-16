const Gborder=document.getElementById("Gborder");
const Gcontext=Gborder.getContext("2d");
const Gscore=document.getElementById("Gscore");
const restG=document.getElementById("restG");
const Gtext=document.getElementById("Gtext");
const Gover=document.getElementById("Gover");
const scoreo=document.getElementById("score");
const hscore=document.getElementById("hscore");
const newGame=document.getElementById("newGame");
const Gwidth=Gborder.width;
const Gheight=Gborder.height;
let borderC="rgb(6, 28, 100)";
Gtext.style.display="none";
let unitSize=15;
let hiscore=55;
let foodX;
let foodY;
let score=0;
let snakeColor="darkgreen";
let foodColor="orange";
let GoX=unitSize;
let GoY=0;
let timer=100;
let pause=1;
let snake=[
    {X:unitSize*4 , Y:0},
    {X:unitSize*3 , Y:0},
    {X:unitSize*2 , Y:0},
    {X:unitSize , Y:0},
    {X:0 , Y:0}
];
var run=false;
restG.textContent="PAUSE";
window.addEventListener("keydown",changeDir);
restG.addEventListener("click",pauseGame);
menu.addEventListener("click",()=>{
   location.assign("starter.html")
});
 
startGame();
function startGame(){
    Gtext.style.display="none";
    run=true;
    Gscore.textContent=score;
    creatFood();
    dropFood();
    
    Gnext();


}
function creatFood(){
    function rand(min,max){
        let ranf=Math.round((Math.random() * (max - min)+min)/unitSize)*unitSize;
             if(ranf<25){
                ranf+25;
             }
             if(ranf==Gheight){
                ranf-25;
             }
        return ranf;
    }
    foodX=rand(0,Gwidth-unitSize);
    foodY=rand(0,Gheight-unitSize);
}
function dropFood(){
    Gcontext.fillStyle=foodColor;
   Gcontext.fillRect(foodX,foodY,unitSize, unitSize);
    //Gcontext.arc(foodX,foodY,unitSize,unitSize,2*Math.PI);
    Gcontext.fill();
}


function Gnext(){
    if(run){
        setTimeout(()=>{
           
            clearAll();
            dropFood();
            moveSnake();
            dropSnake();

            chackGameEnd();
            Gnext();
           
        },timer);
    }
    else{
        gameOver();
    }
}
function  chackGameEnd(){
    switch(true){
        case (snake[0].X < 0):
        run=false;
        
        break;
        case (snake[0].X >= Gwidth):
        run=false;
        
        break;
        case (snake[0].Y < 0):
        run=false;
       
        break;
        case (snake[0].Y >=Gheight):
        run=false;
        
       
        break;
        
        
    }
    for(let i = 1;i<snake.length; i++){
        if(snake[i].X==snake[0].X && snake[i].Y==snake[0].Y){
            run=false;
           
        }
    }

}
function dropSnake(){
    Gcontext.fillStyle=snakeColor;
    Gcontext.strokeStyle=snakeColor;
    snake.forEach(snakes=>{
        Gcontext.fillRect(snakes.X,snakes.Y,unitSize, unitSize);
        
        Gcontext.strokeRect(snakes.X,snakes.Y,unitSize, unitSize);
        
    });
   
    
}

function moveSnake(){
    
    if(pause==1){
    let head={X: snake[0].X + GoX,
              Y: snake[0].Y + GoY};
                     snake.unshift(head);
                     
            if(snake[0].X==foodX&&snake[0].Y==foodY){
                score+=1;
                if(score<=20){
                    timer-=2;
                    
                }
                else if(score>20){
                    timer-=1;
                }
               
                else if(score>30){
                    timer-=0;
                }
                Gscore.textContent=score;
                creatFood();
            }
            else{
                snake.pop();
            }
        }
    else{
        
        

            Gcontext.font="50px MV Boli";
            Gcontext.fillStyle="yellow";
            Gcontext.textAlign="center";
            Gcontext.fillText("GAME PAUSED!!!" ,Gwidth/2 , Gheight/2);
        }
}
function changeDir(event){
    const keyC=event.keyCode;
     
      const LEFT=37;
      const UP=38;
      const RIGHT=39;
      const DOWN=40;
       const breakG=32;
      const goUP=(GoY == -unitSize);
      const goDOWN=(GoY == unitSize);
      const goLEFT=(GoX == -unitSize);
      const goRIGHT=(GoX == unitSize);
    if(pause==1){
        switch(true){
            case(keyC==UP&&!goDOWN):
            GoY=-unitSize;
            GoX=0;
            break;
            case(keyC==DOWN&&!goUP):
            GoY=unitSize;
            GoX=0;
            break;
            case(keyC==RIGHT&&!goLEFT):
            GoX=unitSize;
            GoY=0;
            break;
            case(keyC==LEFT&&!goRIGHT):
            GoX=-unitSize;
            GoY=0;
            break;
      }
    }
      
      
      if(keyC==breakG){
       
        if(pause==1){
            pause=0;
            restG.textContent="START";
            restG.style.backgroundColor="rgb(76, 17, 116)";
        }
       
        else if(pause==0){
            pause=1;
            restG.textContent="PAUSE";
            restG.style.backgroundColor="rgb(117, 69, 6)";
        }
        else{
            console.log("some thing is wrong");
        }
        
        if(run==false){
            Gnew();
            pause=1;
            
        }
      }
}

function  gameOver(){
    
    Gtext.style.display="block";
    Gover.textContent="GAME OVER!!!!";
    scoreo.textContent="SCORE : "+score;
    
    newGame.addEventListener("click" ,Gnew);
    run=false;
    if(score>hiscore){
        hiscore=score;
    }
    hscore.textContent="HIGH SCORE : "+hiscore;
    
     
}
function clearAll(){
    
    Gcontext.fillStyle="gray";
    Gcontext.strokeStyle="rgb(120, 28, 100)";
    Gcontext.fillRect(0,0,Gwidth, Gheight);
    Gcontext.strokeRect(0,0,Gwidth, Gheight);
    
}

function Gnew(){
      score=0;
      GoX=unitSize;
      GoY=0;
      borderC="rgb(6, 28, 100)";
      Gborder.style.borderColor=borderC;
      Gtext.style.display="none";
      timer=100;
      snake=[
        {X:unitSize*4 , Y:0},
        {X:unitSize*3 , Y:0},
        {X:unitSize*2 , Y:0},
        {X:unitSize , Y:0},
        {X:0 , Y:0}
    ];
    
   startGame();
      
}
function pauseGame(){
    if(pause==1){
        
        pause=0;
        moveSnake();
        restG.textContent="START";
         
    }
    else if(pause==0){
        pause=1;
        moveSnake();
        restG.textContent="PAUSE";
    }
}
console.log(navigator.cookieEnabled);
document.cookie = "solo : hayla";
console.log(document.cookie);