/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    
    cleanUp();
    
    function cleanUp(){
        switch(gamestate){
//            case 'login':
//                Login(input);
//                break;
//            case 'logged in':
//                LoggedIn(input);
//                break;
//            case 'confirm module':
//                ConfirmModule(input);
//                break;
            case 'making choice':
                PresentChoice(curEvent);
                break;
            default:
                break;
        };
    }
    
    function changeState(newstate){
        previousstate = gamestate;
        gamestate = newstate;
    }
    
    function revertState(){
        gamestate = previousstate;
    }

    Intro();
    
    $( "#inputboxform" ).submit(function( event ) {
        
        var value = $('#inputbox').val();
        if (value !== null && value !== ''){
            value = value.toUpperCase();
            responseToMain(value);
            event.preventDefault();
            $('#inputbox').val('');
            parseInput(value);
            console.log(gamestate);
        }        

    });
    
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
        $("#mainbody").append('<br class="maintext">');
    };
    
    function clearMain(){
        $(".maintext").remove();
    }
    
    function parseInput(input){
        switch(gamestate){
            case 'login':
                Login(input);
                break;
            case 'logged in':
                LoggedIn(input);
                break;
            case 'confirm module':
                ConfirmModule(input);
                break;
            case 'making choice':
                ProcessChoice(input);
                break;
            default:
                break;
        }       
    }
    
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
    
    
    function Login(unicorn){
            $(".introscreen").remove();
            clearMain();
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
            changeState('logged in');
            
    };
    
    function LoggedIn(unicorn){
//        $("body").css( "background-color", "blue" );
            switch(unicorn){
                case 'A':
                    modulename = "Alice";
                    break;
                case 'B':
                    modulename = "Benjamin";
                    break;
                case 'C':
                    modulename = "Conrad";
                    break;
                case 'D':
                    modulename = "Danielle";
                    break;
                default:
                    break;
            };

            if (modulename === null){
                printToMain("That is not an option.  Please select your module.");             
            }
            else{
                printToMain('You chose '+modulename+'. Is this correct? [Y/N]');
                changeState('confirm module');
            };        
    };
    
    function ConfirmModule(unicorn){
        switch(unicorn){
            case 'Y':
                printToMain('You have confirmed '+modulename+".");
                setStats();
                changeState('begin game');
                BeginGame();
                break;
            case 'N':
                clearMain();
//                printToMain('You have rejected your module');
                changeState('logged in');
                Login(playername);
                break;
            default:
                printToMain('not a valid choice.');
                break;
        }
    }
    
    function presentChoice(event){
        printToMain(event.name);
        printToMain(event.body);
        printToMain("This event requires a "+event.qual.q1+" stat of at least "+event.qual.v1);
        printToMain('What do you do?');
        brToMain();
    }
    
    function BeginGame(){
        clearMain();
        brToMain();
        switch(modulename){
            case 'Alice':
                printToMain('this module is not yet complete');
                break;
            case 'Benjamin':
                printToMain('this module is not yet complete');
                break;
            case 'Conrad':
                printToMain('You wake up in a Mars Hovel.  You are alone.');
                brToMain();
                presentChoice(PickNewEvent());
                changeState("making choice"); 
                break;
            case 'Danielle':
                printToMain('this module is not yet complete');
                break;
            default:
        }
    }
    
    function ProcessChoice(input){
        switch(input){
            case 'A':
                printToMain("You chose A");
                break;
            case 'B':
                printToMain("You chose B");
                break;
            case 'C':
                printToMain("You chose C");
                break;
            default:
                printToMain("You didn't choose correctly");
                break;
        }
    };
   

});
