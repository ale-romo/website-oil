function agregaryquitar(){
    // jQuery(".slide-out-widget-area-toggle a > span").remove();
    // jQuery(".slide-out-widget-area-toggle a").append('<div class="menu-runwild"><img src="/wp-content/uploads/menu2.gif"><div class="text-menu">Menu</div></div>');
    // jQuery(".off-canvas-menu-container").append('<div class="menu-socials-down"><img src="http://towerhouse.local/wp-content/uploads/2023/07/instagram-01.svg"><img src="http://towerhouse.local/wp-content/uploads/2023/07/facebook-01.svg"></div>');
    // jQuery(".off-canvas-menu-container").prepend('<div class="logo-menu"><img src="http://towerhouse.local/wp-content/uploads/2023/07/TH-Menu_Logo.png"></div>');
   
   
    // jQuery('.slider-prev .fa-minus-circle').addClass('fa-angle-left').removeClass('fa-minus-circle');
   // jQuery('.slider-next .fa-minus-circle').addClass('fa-angle-right').removeClass('fa-minus-circle');
}


function menuthings(){
   
   /* jQuery('.menu-socials-down').hide();
    jQuery(".closed").click(function() { 
        var res = jQuery(".text-menu").text();
        console.log(res);
        if (jQuery(".text-menu").text() == "MenuMenu"){
            jQuery(".text-menu").text("Close");
        }
        else{
            jQuery(".text-menu").text("Menu");
        }    
        jQuery(".menu-socials-down").fadeToggle("fast");
      });  */

}

function offsetCalculate(){
  /*  var parentLeft = jQuery('.inner-toggle-wrap').offset();
    var widthdelcontainer = jQuery('.inner-toggle-wrap').width();
    jQuery('.nectar-inherit-h2').css({
        'left': parentLeft.left
    });
    jQuery('.nectar-inherit-h2 > i').css({
        'left': widthdelcontainer - 40 + 'px'
    })*/
}


function removeLoader(){
    setTimeout(()=>{
       let loader = document.getElementById('loader');
       jQuery(loader).fadeOut(300);
    },
               1200);  
  }


function popups(){
  
    // Talent 1 // 
   /* jQuery('.talent1').on('click', function () {
        PUM.open(71)   
        jQuery("body:not(.nectar-no-flex-height)").attr('style', 'overflow: visible');     
    });
    jQuery('#pum-71').on('pumBeforeClose', function () {
        jQuery("body:not(.nectar-no-flex-height)").attr('style', 'overflow: hidden');
      }); */    

}


function hidelogoscroll(){
   
   /* jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop()>100)
         {
            jQuery('.logoprincipal').fadeOut(50);
            jQuery('.logoprincipal').hide(0);
         }
        else
         { 
            jQuery('.logoprincipal').show(0);
            jQuery('.logoprincipal').fadeIn(0);
                      
         }
     });  */
}
      

jQuery(document).ready(function () {
    agregaryquitar();
   //  menuthings();
   //  popups();
   //  hidelogoscroll();
    
   /* if(window.outerWidth < 480) {
        jQuery(".privacy_terms").text("Privacy");
    }
        var width = jQuery(window).width();
        if (width < 480){
        jQuery(".privacy_terms").text("Privacy");
        }
    
  */
   /* offsetCalculate();
    setTimeout(function() {
        quitarclase1();  
    }, 1000); 
});
jQuery(window).resize(function(){
    offsetCalculate();*/
  
   
});