/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var testvar = 150,
    start = true,
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


function PickNewEvent(){
    var found = false;
    while (found === false){
        choice = Math.floor((Math.random() * Events.length));
        found = true;
    }
    curEvent = Events[choice];
    return curEvent;
    
}

function setStats(){
    
}

var Events = [
    {name:"knock at the door", qual:{q1:"fitness", v1:50},
        body:"You hear a knock at the door."},
//        choice:{},    
    {name:"a crashing sound", qual:{q1:"bravery", v1:50},
        body:"You hear a loud crash in the distance."},
    {name:"Event 3", qual:{q1:"intelligence", v1:50},
        body:"Event 3 body"},
    {name:"Event 4", qual:{q1:"none", v1:0},
        body:"Event 4 body"},
    {name:"Event 5", qual:{q1:"none", v1:0},
        body:"Event 5 body"},
    {name:"Event 6", qual:{q1:"none", v1:0},
        body:"Event 6 body"}
];
