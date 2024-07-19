var timer = 60;
var score = 0;
var randHit = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").innerHTML = score;
}

document.querySelector("#pbtm").addEventListener("click", function(details){
    // console.log(details.target);        // to find the target box
    // console.log(details.target.textContent);            // to get only text content and it will be in string form not in integer
    // console.log(Number(details.target.textContent));

    var clickedNumber = Number(details.target.textContent);
    if(clickedNumber === randHit){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

function getNewHit(){
    randHit = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").innerHTML = randHit;
}

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 160; i++) {
    var ran = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${ran}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over<br>Your Score: ${score}</h1>`;
        }
    }, 1000);
}

runTimer();
makeBubble();
getNewHit();
// increaseScore();