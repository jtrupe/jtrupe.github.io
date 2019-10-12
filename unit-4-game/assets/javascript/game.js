$(document).ready(function() {
    var cpuScore;
    var gemArray= [];
    var userScore = 0;
    var wins=0;
    var losses=0;
    var isWinner = false;

function setCPUscore(){
    cpuScore = Math.floor(Math.random()*101) + 19 ;
    return cpuScore;
}

setCPUscore();
setGemArray();
$("#cpuContainer").text(cpuScore);
$("#yourScore").text(userScore);


function setGemVal(){
    var gemVal = Math.ceil(Math.random()*12)
    return gemVal;
}
    
function setGemArray(){
    for(var i=0; i < 4; i++){
        gemArray.push(setGemVal());  
    }
    for(var j=0; j < 4; j++){
        if(gemArray[i]===gemArray[j] && i != j){
            gemArray[j] = setGemVal();
        }
    }
}

function clickGem(i){
    userScore += gemArray[i];
    
    if(userScore >= cpuScore){    
        if(userScore === cpuScore){
            wins++;
            isWinner= true;
            $("#WINS").text("Wins: " + wins);
        }
        else if(userScore > cpuScore){
            losses++;
            $("#LOSSES").text("Losses: " + losses);
        }
        setCPUscore();
        userScore=0;
        setGemArray();
        $("#cpuContainer").text(cpuScore);
        $("#yourScore").text(userScore);
    }
}

$("#gem1").click(function(){
    clickGem(0);
    $("#yourScore").text(userScore);
});

$("#gem2").click(function(){
    clickGem(1);
        $("#yourScore").text(userScore);
});

$("#gem3").click(function(){
    clickGem(2);
    $("#yourScore").text(userScore);
});

$("#gem4").click(function(){
    clickGem(3);
    $("#yourScore").text(userScore);
});

//tried to get the below functions to work calling clickGem() but could figure it out
// $("#gem1").click(clickGem(0));
// $("#gem2").click(clickGem(1));
// $("#gem3").click(clickGem(2));
// $("#gem4").click(clickGem(3));

});