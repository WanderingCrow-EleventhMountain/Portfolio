$(document).ready(function() {

  // APPARIZIONE HEADER
  setTimeout(function(){
    $( ".headername" ).fadeTo( 1300, 1 );
    setTimeout(function(){
      $( ".headerhome").fadeTo( 1300, 1 );
    },);
    setTimeout(function(){
      $( ".headerhome a" ).fadeTo( 1300, 1 );
    },);
  }, 900);

  // APPARIZIONE FORM
  setTimeout(function(){
    $( "input" ).fadeTo( 1300, 1 );
    setTimeout(function(){
      $( "textarea").fadeTo( 1300, 1 );
    },500);
    setTimeout(function(){
      $( "button" ).fadeTo( 1300, 1 );
    },1000);
  }, 1500);

});
