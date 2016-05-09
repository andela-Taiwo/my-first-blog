$(document).ready(function(){
  $("#hideshow").toggle(function (){
    $("#hideshow").text("Show Staff Profile");
    $("#profile").hide('slow','linear');

  },function(){
    $("#hideshow").text("Hide Staff Profile");
    $("#profile").show('slow','linear');
  });
})