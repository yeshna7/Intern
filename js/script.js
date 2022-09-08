
$(document).ready(function(){
    $('.toggle-button').on('click', function(){
        $('nav ul').toggleClass('showing');
    });
    $('nav').on('mouseleave', function(){
        $('nav ul').toggleClass('showing');
  });
});