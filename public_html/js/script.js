/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){

    

    
//    $('#saveg').click(function(){
//       localStorage.mhp = mhp;
//       localStorage.mstr = mstr; 
//       $("#status").html("You have been saved locally."); 
//    });
    
    
    
    $( "#inputboxform" ).submit(function( event ) {
        event.preventDefault();
        var value = $('#inputbox').val();
        $("#mainbody").append('<div>>  '+value+'<div>');
        $("#inputboxform").reset();
        console.log(value);
    });
});


