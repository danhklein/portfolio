$(document).ready(function() {
  
  $('button').click(function() {
        $('div').slideToggle();
  }); 
  $('div').mouseover(function() {
    $('img').slideToggle();
    // body...
  })
});