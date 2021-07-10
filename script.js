var character = document.getElementById('character');
var block = document.getElementById('block');
var gameover = document.getElementById('game-over');
let score = 0;

function jump(){
    if(character.classList != "animate"){
        character.classList.add('animate');

    }
    
    setTimeout(function(){ 
        character.classList.remove('animate');
        
    },500); 
}


// myScore = new component("30px", "Consolas", "black", 6000, 40, "text");

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<40 && blockLeft>0 && characterTop >= 130 ){
        block.style.animation = "none";
        gameover.style.display = "inline";
        block.style.display = "none";
        character.style.display = "none";
        // alert("You Lose !!!");
    }
    else if(blockLeft<0){
        score +=1;
        if(score%15 == 0){
            // console.log(score/15);
            // myScore.text="SCORE: " + myGameArea.frameNo;
            // myScore.update();
        }
    }
},10);

