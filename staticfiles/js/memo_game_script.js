/*Steps:
1. Create and assign variables & retrieve the necessary HTML elements.
2. Make the flipping work.
3. Basic Game - no randomization, no timer, just flipping, comparing, and
aler box for result.
4. Make new game button work.
5. Randomize the game boxes on loading - also create images.js file here.
6. Create the timer work.
7. Make the fancy result box display.
 */

 //Step 1:
var record = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; //kip tracking the flipped image
var imgRec = [];
var rand;
var flipIndex = 0; //stands for # of cards flipped
var cardTextRec = []; //stores the source of the images that will be used to compare
var cardRec = [];  //stores the id of the images
var cardNum;       //store the extracted id of the image 
var front;
var back;
var cardChk = 0; //keep track how many images are able to flip at a time , either 0 or 1
var correct = 0;  //keep track and update the score

var memory = document.getElementById("game");
var timer = document.getElementById("timer");
var scoreEl = document.getElementById("score");
var newGame;
var result = document.getElementById("result");
var opacity = document.getElementById("opacity");
var h1Res = document.getElementById("h1Res");
var pRes = document.getElementById("pRes");

var status = 0;
var countDown;  //for counting the timer
var secsInput = 60;
var seconds = secsInput;
var gameOver = false;

//2.Make the flipping work
memory.addEventListener("click", function(eventObj){
    //eventObj: event object - information about the event, which exact element was clicked,
    //id of the element, when the event happened.
    var el = eventObj.target.parentElement;
    var numId = el.id;
    if(Number.isInteger(parseInt(numId.replace("back",""), 10))){//"back2" -> "2" -> 2
        cardClick(el.parentElement.id);
    }  else{
        cardClick(numId);
    }
});

function cardClick(cardId){
   cardNum = cardId.replace("card", ""); //"1", "2"
   cardNum = parseInt(cardNum, 10); //1,2 
    //if conditions - game is over, record value of the card is 0, see if the card is checked
    if(record[cardNum -1] == 0 && cardChk == 0 && gameOver == false)
        {//do the actual flipping 
            front = document.getElementById("front" + cardNum);
            //"front" + 1 -> "front1"
            back = document.getElementById("back" + cardNum);
            front.style.transform = "rotateY(-180deg)";
            back.style.transform = "rotateY(0deg)";
            cardTextRec.push(back.innerHTML);//[<img src="images/img9.png",<img src="images/img2.png",...]
            cardRec.push(cardNum); //[1]
            flipIndex++;
            record[cardNum-1] = 1; //this particular is flipped
            if(flipIndex == 2)
            {
                //comparison
                if(cardTextRec[0] == cardTextRec[1])
                {
                    correct++;
                    scoreEl.innerHTML = "Score: " + correct; //Score: 1
                    cardTextRec = [];
                    cardRec = [];
                    flipIndex = 0;

                    if(correct == 10)//display result and stop game
                    { 
                        setTimeout(function(){displayResult();}, 600); //delay the display of result by 600 ms
                    }
                    return;
                }
                else
                {
                    //flip back because they'r not the same
                    cardChk = 1;
                    //call the flipBack function after a time delay of 600ms
                    setTimeout(function(){flipBack();}, 600);
                    return;
                }
            }
        }
        if(gameOver == true){
            alert("Game is over. Click on the New Game button to start a new game");
        }
}

function flipBack(){
    front = document.getElementById("front" + cardRec[0]);
    back = document.getElementById("back" +  cardRec[0]);
    front.style.transform = "rotateY(0deg)";
    back.style.transform = "rotateY(180deg)";

    front = document.getElementById("front" + cardRec[1]);
    back = document.getElementById("back" +  cardRec[1]);
    front.style.transform = "rotateY(0deg)";
    back.style.transform = "rotateY(180deg)";

    record[cardRec[0]-1]=0;
    record[cardRec[1]-1]=0;
    cardTextRec = [];
    cardRec = [];
    flipIndex = 0;
    cardChk = 0;
 }

function displayResult(){
    gameOver = true;
    if(correct == 10){
        alert("Congrats! You've won! Your score is " + correct);
    }else{
        alert("Your score is " + correct);
    }
}

//4. Make a new game button work
newGame = document.getElementById("new");
newGame.addEventListener("click", newClick);

function newClick(){
    window.location.reload();
}

//5. Randomize the game boxes on loading - also create images.js file here.
