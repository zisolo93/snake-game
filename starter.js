const playg = document.getElementById("play");
const newgame = document.getElementById("newgame");
const option = document.getElementById("option");
const exit = document.getElementById("exit");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const menu = document.getElementById("menu");
const exitback = document.getElementById("exitback");
const starter = document.getElementById("starter");
const optionm = document.getElementById("optionm");
let x = 0;
const home = document.getElementById("home");

const nine = document.getElementById("nine");
const three = document.getElementById("three");
const eng9 = document.getElementById("eng9");
const eng3 = document.getElementById("eng3");
const geez9 = document.getElementById("geez9");
const geez3 = document.getElementById("geez3");

const nine2 = document.getElementById("nine2");
const three2 = document.getElementById("three2");
const eng92 = document.getElementById("eng92");
const eng32 = document.getElementById("eng32");
const geez92 = document.getElementById("geez92");
const geez32 = document.getElementById("geez32");


newgame.addEventListener("click",()=>{
    location.assign("snake.html")
});
playg.addEventListener("click",()=>{
    location.assign("snake.html")
});

home.addEventListener("click",()=>{
    location.assign("E:\\this me\\java script docs\\project93.html")
 });

nine.addEventListener("click",nineFun);
nine.addEventListener("mouseover",nineFun);

three.addEventListener("click",threeFun);

nine2.addEventListener("click",nineFun);
nine2.addEventListener("mouseover",sampleFun);


three2.addEventListener("click",threeFun);



exit.addEventListener("click",exitgfun);
yes.addEventListener("click",()=>{
    window.close();
});
no.addEventListener("click",()=>{
    exitback.style.display="none";
});
option.addEventListener("click",()=>{
    optionm.style.display="block";
});

optionm.addEventListener("dblclick",()=>{
    optionm.style.display="none";
});
function exitgfun(){
    exitback.style.display="block";
    
}

function threeFun(){
    eng3.style.visibility = "visible";
    geez3.style.visibility = "hidden";
    eng32.style.visibility = "visible";
    geez32.style.visibility = "hidden";
    setTimeout(()=>{
        eng3.style.visibility = "hidden";
        geez3.style.visibility = "visible";
        eng32.style.visibility = "hidden";
        geez32.style.visibility = "visible"
    },800)
}

function nineFun(){
    eng9.style.visibility = "visible";
    geez9.style.visibility = "hidden";
    eng92.style.visibility = "visible";
    geez92.style.visibility = "hidden";
    setTimeout(()=>{
        eng9.style.visibility = "hidden";
        geez9.style.visibility = "visible";
        eng92.style.visibility = "hidden";
        geez92.style.visibility = "visible";
    },1000)
  
}



function sampleFun(){
    let f =setInterval(()=>{
        nine.style.backgroundColor="coral";
        eng9.style.visibility = "visible";
        geez9.style.visibility = "hidden";
        if(x<150){
            x++;
            nine.style.left=x+"px";
     
         
        }
        if(x==150){
            setTimeout(samplebFun,500);
            clearInterval(f);
        }
        function samplebFun(){
   
            let b=setInterval(()=>{
                nine.style.backgroundColor="transparent";
                eng9.style.visibility = "visible";
                geez9.style.visibility = "hidden";
                if(x!=0){
                    x--;
                    nine.style.left=x+"px";
                    console.log("called",x)
                    eng9.style.visibility = "hidden";
                geez9.style.visibility = "visible";
                    
                }
                if(x==0){
                    clearInterval(b);
                    eng9.style.visibility = "hidden";
                }
            },30)
           
        }
    },30)
   
  
    
   
}

