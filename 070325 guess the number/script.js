document.addEventListener("DOMContentLoaded", function() {

    btn = document.querySelector(".check")
    no = document.querySelector(".guess");
    crcNo = document.querySelector(".number");
    msg = document.querySelector(".message");
    score = document.querySelector(".score");
    highScore = document.querySelector(".highscore");
    body = document.querySelector("body");
    again = document.querySelector(".again");
    
    // used Math.random() to generate numbers between 0 and 1 
    // then multiplied it with 20 adn added 1 to make it between 1 and 20
    var randInt = Math.floor(Math.random() * 20 + 1)

    // Stored the actual values to another variable to use it in again button 
    var actualMsg = msg.textContent;
    var actualScore = score.innerHTML;
    var actualHighScore = highScore.innerHTML;
    var actualCrcNo = crcNo.innerHTML;

    btn.addEventListener("click", ()=>{
        // first condition to check whether the the input number is same as the random number
        // If yes then the message is updated as correct number! 
        // highScore is updated as the current score value and bgColor updated
        if(no.value == randInt){
            crcNo.innerHTML = no.value;
            msg.innerHTML = "Correct Number!"
            highScore.innerHTML = score.innerHTML;
            body.style.backgroundColor = "green";
            no.value = "";
        }
        // second condtion to check whether the number is high
        // If yes then message is updated as too high and score value reduced by 1
        else if(no.value > randInt){
            msg.innerHTML = "Too high";
            score.innerHTML = score.innerHTML - 1;
            no.value = "";
        }
        // else condition where the number is lower
        // If yes then message is updated as too low and score value reduced by 1
        else{
            msg.innerHTML = "Too low";
            score.innerHTML = score.innerHTML - 1;
            no.value = "";
        }
    } )

    // again button resets everything so replaced all the values witht the initial variables
    again.addEventListener("click", () => {
        msg.textContent = actualMsg;
        score.innerHTML = actualScore;
        highScore.innerHTML = actualHighScore;
        crcNo.innerHTML = actualCrcNo;
        body.style.backgroundColor = "#222";
    })
})