$(document).ready(function(){
  $('#testBtn').click(function() {
     alert('Welcome!');
  });
  $('.box').mouseenter(function() {
     $(this).css("background-color", "red");
  });
  $('.box').mouseleave(function() {
     $(this).css("background-color","blue");
  });
  $('#name').blur(function() {
    var userInput = $(this).val();
    if(userInput < 4){
        console.log(userInput);
        alert('Please enter minimum 4 letters')
    }
  });
});

