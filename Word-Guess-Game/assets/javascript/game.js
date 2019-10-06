$(document).ready(function(){
        var blackEagles = ["edelgard", "hubert", "linhardt", "caspar", "ferdinand", "bernadetta", "dorothea", "petra"] 
        var gameStart = false;
        var guessedLetters= [];
        var keyVal;
        var guessesLeft= 12;
        var isLetter;
        var solutionChar;
        var userGuess;

    $(document).keyup(function(event){
        var keyVal= event.key.toLowerCase();
        function checkIfLetter(char){
            return typeof char === "string" && (char >= "a" && char <= "z");
        }
        
        console.log(keyVal);
        
        isLetter= checkIfLetter(keyVal);
        console.log(isLetter);

        if(!gameStart){
            guessesLeft= 12;
            gameStart = true;
            function randN(n){
                return(Math.floor(Math.random()*n)); 
                }
            solutionChar = blackEagles[randN(blackEagles.length)]
            console.log (solutionChar);
            console.log(solutionChar.length);
            
            function yourGuess(p){
                userGuess = "";
                for(var i=0; i<p; i++){
                    userGuess += "_";
                    }
                    return userGuess;
                    }
            userGuess = yourGuess(solutionChar.length);
            console.log(userGuess);
            
            var solutionBlanks= "" ;
            function CharBlanks(p){
                for(var i=0; i<p; i++){
                    solutionBlanks += "_ ";
                    }
                    return solutionBlanks;
                    }
        $("#beginGame").text(CharBlanks(solutionChar.length));    
        }

        else{
            function containsLetter(str, keyVal) {
                var n = str.includes(keyVal);
                return n;
            }
            if(isLetter){ 
                if(containsLetter(solutionChar, keyVal)) {
                    for(var i=0; i < solutionChar.length; i++){
                        if(solutionChar.charAt(i) === keyVal){
                            function replaceAt(string, index, replace) {
                                return string.substring(0, index) + replace + string.substring(index + 1);
                            }
                            userGuess = replaceAt(userGuess, i, keyVal);
                            $("#beginGame").text(userGuess);
                        }
                }              
            
                }
                if(!containsLetter(solutionChar, keyVal)){
                    guessesLeft -= 1;
                    console.log(guessesLeft);
                    guessedLetters.push(keyVal);
                    //finish conditional for when letter not contained in the solution is pressed multiple times

                }
                
            }
        // finish win/loss conditions and their counters

        }
});
    

});