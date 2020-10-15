$(document).ready(function(){
    $(".header_mobile").hide();
$(".header_mobile").addClass("show");
$(".header_menu").click(function(){ 
       $(".header_mobile").animate({
           width: "toggle"
       },"slow");
   
   });
   
});