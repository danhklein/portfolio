$(document).ready(function() {
  
  $('button').click(function() {
        $('article').slideToggle();
  }); 
  $('strong').mouseover(function() {
    $('img').slideDown();
    // body...
  })
});