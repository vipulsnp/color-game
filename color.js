                
// variable to store number of tiles
var tiles=6;

                        // get heading
var h1=document.querySelector("h1");
                        // generate random colors
var colors=generate(tiles);
                        // pick correct color
var select=pickcolor();
                        // picked color by user
var choice;
                        // VARIABLE TO STORE result
var result=document.querySelector("#result");
                        // function to generate random colors
    
function generaterandom()
{
    
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}

                    // function called by colors 
function generate(num)
{  
        var arr=[];
    
    for(var i=0;i<num;i++)
    arr.push(generaterandom());    
    return arr;
}

                    // SHOW THE COLORS ON THE SQUARES AND ADD CLICK FUNCTION

var square=document.querySelectorAll(".square");
show();
function show()
{
    
    // SHOW THE CODE OF COLOR ON THE HEADING
    
    var heading=document.getElementById("heading");
heading.textContent=select;
                    
    //display colors on the tiles            
    
    for(var i=0;i<square.length;i++)
                 {   
                     square[i].style.backgroundColor=colors[i];   
                     square[i].addEventListener("click",choicefnc);                
                 
                 }
}

                // PICKING THE CORRECT color FROM THE SHOWN COLORS
function pickcolor()
{
    
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

                



                // CHECK IF USER CHOSEN COLOR IS CORRECT OR NOT
function choicefnc()
  {
      choice=this.style.backgroundColor;
      if(choice===select)
      {
          result.textContent="! CORRECT !";
          changecolor();
          reset.textContent="PLAY AGAIN";
        h1.style.backgroundColor=choice;
      }
      
      else
      {
          this.style.backgroundColor="#232323";
        result.textContent="! TRY AGAIN !";
      }
  }
        
                // function to change color of all tiles to correct color if correct answer
function changecolor()
{
    for(var i=0;i<square.length;i++)
        square[i].style.background=choice;
}

            // FUNCTION FOR RESETTING AND NEW COLORS 

var reset=document.getElementById("new");
reset.addEventListener("click",newcolor);

function newcolor()

{
    colors=generate(tiles);
    select=pickcolor();
    show();
    reset.textContent="NEW COLORS";
    result.textContent="";
    h1.style.backgroundColor="#232323";
}
    
                // BUTTONS FOR HARD AND EASY MODE
var easy=document.getElementById("easy");
var hard=document.getElementById("hard");
hard.style.backgroundColor="#ff00ff";

                    // easy button event listener
easy.addEventListener("click",function(){
    easy.style.backgroundColor="#ff00ff";
    hard.style.backgroundColor="#f0ffff";
    tiles=3;
    for(var i=3;i<6;i++)
    {
    square[i].style.display="none";    
    } 
    newcolor();});

            // hard button event listener
hard.addEventListener("click",function(){
                                            tiles=6;
    for(var i=3;i<6;i++)
    square[i].style.display="block";
    hard.style.backgroundColor="#ff00ff";
    easy.style.backgroundColor="#f0ffff";
    newcolor();});

       