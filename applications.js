$(document).ready(function() {
  
  $('button').click(function() {
        $('article').slideToggle();
  }); 
  $('span').mouseover(function() {
    $('img').slideDown();
    // body...
  })
});