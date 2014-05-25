/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var testvar = 150,
    play = true,  
    gamestate = 'login',
    previousstate = null,
    playername = '',
    modulename = null,
    input = null,
    curEvent = null,
    bravery = null,
    fitness = null,
    intelligence = null;


function PickEvent(){
    var found = false;
    while (found === false){
        choice = Math.floor((Math.random() * Events.length));
        found = true;
    }
    return Events[choice];
    
}

function setStats(){
    
}

var Events = [
    {name:"knock at the door", qual:{s1:"fitness", v1:50},
            body:"You hear a knock at the door."}
//    {name:"a crashing sound", qv1:50,body:"You hear a loud crash in the distance."},
//    {name:"Event 3", qv1:0,body:"Event 3 body"},
//    {name:"Event 4", qv1:-50,body:"Event 4 body"},
//    {name:"Event 5", qv1:50,body:"Event 5 body"},
//    {name:"Event 6", qv1:0,body:"Event 6 body"}
];
