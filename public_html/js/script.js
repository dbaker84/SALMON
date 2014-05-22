/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){

    
    $('#healmo').click(function(){        
        if (mhp < 50){
            mhp +=10;    
        }
        hpupdate();
        $("#monsterstatus").html("Your monster rested and regained 10 hit points.");
    });
  
    
    $('#saveg').click(function(){
       localStorage.mhp = mhp;
       localStorage.mstr = mstr; 
       $("#monsterstatus").html("Your monster has been saved locally."); 
    });
    
    $('#loadg').click(function(){
       mhp = localStorage.getItem("mhp");
       mstr = localStorage.getItem("mstr");
       hpupdate();
       strupdate();
       $("#monsterstatus").html("Your monster has been loaded."); 
    });
    
    
    $( "#inputboxform" ).submit(function( event ) {
        var value = $('#inputbox').val();
        $("#mainbody").append('<p>'+value+'</p>');
        $("#inputboxform").reset();
        console.log(value);
    });
});


