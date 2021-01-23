$(document).ready(function() {

  // APPARIZIONE ESAGONI
  setTimeout(function(){
    $( ".uno" ).fadeTo( 500, 1 );
    setTimeout(function(){
      $( ".quattro" ).fadeTo( 500, 1 );
    }, 200);
    setTimeout(function(){
      $( ".due" ).fadeTo( 500, 1 );
    }, 400);
    setTimeout(function(){
      $( ".cinque" ).fadeTo( 500, 1 );
    }, 600);
    setTimeout(function(){
      $( ".tre" ).fadeTo( 500, 1 );
    }, 800);
  }, 700);

  // APPARIZIONE NOMI ESAGONI
  setTimeout(function(){
    $( ".uno a" ).fadeTo( 500, 1 );
    setTimeout(function(){
      $( ".quattro a" ).fadeTo( 500, 1 );
    }, 200);
    setTimeout(function(){
      $( ".due a" ).fadeTo( 500, 1 );
    }, 400);
    setTimeout(function(){
      $( ".cinque a" ).fadeTo( 500, 1 );
    }, 600);
    setTimeout(function(){
      $( ".tre a" ).fadeTo( 500, 1 );
    }, 800);
  }, 2000);

});
