var main = function () {
    
    //Animate blurring
    $('#blur').click( function() {
       
        $({blurRadius: 0}).animate({blurRadius: 10},  {
            
            duration: 200,
            step: function() {
             
                //console.log(this.blurRadius);
                $('.bg').css({
                   
                    "-webkit-filter": "blur("+this.blurRadius+"px)",
                    "filter": "blur("+this.blurRadius+"px)"
                    
                });
                
            }
            
        });
        
    });
    
    //Animate blurring
    $('#unblur').click( function() {
       
        $({blurRadius: 10}).animate({blurRadius: 0},  {
            
            duration: 200,
            step: function() {
             
                //console.log(this.blurRadius);
                $('.bg').css({
                   
                    "-webkit-filter": "blur("+this.blurRadius+"px)",
                    "filter": "blur("+this.blurRadius+"px)"
                    
                });
                
            }
            
        });
        
    });
    
    //Down button to move it down
    $('#down').click( function() {
    
        $('.mover').animate({
          
            top: "150px"
            
        }, 200);
        
    });
    
    //Up button to move it up
    $('#up').click( function() {
    
        $('.mover').animate({
          
            top: "0px"
            
        }, 200);
        
    });
    
    //Activate button to "activate" aka. turn it blue!
    $('#active').click( function() {
       
        $('.mover').toggleClass('active');
        
    });
    
};

$(document).ready(main);