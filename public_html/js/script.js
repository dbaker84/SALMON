/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){

    var gamestate = 'login';
    var playername = '';
    var modulename = 'none';

    function Intro(){
            $("#mainbody").append('<br class="introscreen">');
            $("#mainbody").append('<br class="introscreen">');
            $("#mainbody").append('<div class="introscreen">......</div>');
            $("#mainbody").append('<div class="introscreen">System Initialized.</div>');
            $("#mainbody").append('<div class="introscreen">Beginning Simulation.</div>');
            $("#mainbody").append('<div class="introscreen">......</div>');
            $("#mainbody").append('<br class="introscreen">');
            $("#mainbody").append('<br class="introscreen">');
            $("#mainbody").append('<div class="introscreen">Welcome, Colonist.</div>');
            $("#mainbody").append('<div class="introscreen">What is your name?</div>');
            $("#mainbody").append('<br class="introscreen">');
    }
    
    Intro();
    
//    $('#saveg').click(function(){
//       localStorage.mhp = mhp;
//       localStorage.mstr = mstr; 
//       $("#status").html("You have been saved locally."); 
//    });

    function printToMain(phrase){
        $("#mainbody").append('<div class="maintext">'+phrase+'<div>');
    };
    
    function responseToMain(phrase){
        $("#mainbody").append('<div class="maintext">>  '+phrase+'<div>');
    };
    
    function brToMain(){
        $("#mainbody").append('<br>');
    };
    
    function clearMain(){
        $(".maintext").remove();
    }
    
    
    
    $( "#inputboxform" ).submit(function( event ) {
        
        var value = $('#inputbox').val();
        responseToMain(value);
        event.preventDefault();
        switch(gamestate){
            case 'login':
                parseLogin(value);
                break;
            case 'logged in':
                parseLoggedIn(value);
                break;
            case 'confirm module':
                parseConfirmModule(value);
                break;
            default:
                parseDefault(value);
                break;
        }
        $('#inputbox').val('');
    });
    
    function parseLogin(unicorn){
            brToMain();
            playername = unicorn;
            printToMain("Welcome to SALMON, "+playername+".");
            brToMain();
            brToMain();
            brToMain();
            printToMain("Please choose a module:");
            printToMain("[A] Alice");
            printToMain("[B] Benjamin");
            printToMain("[C] Conrad");
            printToMain("[D] Danielle");
            brToMain();
            gamestate = 'logged in';
            $(".introscreen").remove();
    };
    
    function parseLoggedIn(unicorn){
        $("body").css( "background-color", "blue" );
            switch(unicorn){
                case 'a' || 'A':
                    modulename = "Alice";
                    break;
                case 'b' || 'B':
                    modulename = "Benjamin";
                    break;
                case 'c' || 'C':
                    modulename = "Conrad";
                    break;
                case 'd' || 'D':
                    modulename = "Danielle";
                    break;
                default:
                    break;
            };

            if (modulename === 'none'){
                printToMain("That is not an option.  Please select your module.");             
            }
            else{
                console.log("ask if correct");
                $("body").css( "background-color", "red" );
                printToMain('You chose '+modulename+'. Is this correct? [Y/N]');
                gamestate = 'confirm module';
            };

    };
 
    function parseConfirmModule(unicorn){
        console.log("unicorn equals "+unicorn);
        switch(unicorn){
            case 'n' | 'N':
                printToMain("Please select your module.");
                gamestate = 'logged in';
                console.log("made it to N");
                clearMain();
                break;
            case 'y' | 'Y':
                printToMain('Opening Module "'+modulename+'" ...');
                gamestate = 'confirmed';
                console.log("made it to Y");
                break;
            default:
                break;
        };        
    };
    
    function parseDefault(unicorn){
        switch(unicorn){
            case 'clear':
                clearMain();
                break;
            default:
                responseToMain(unicorn);
                break;
        };        
    };
    

    
    
});


