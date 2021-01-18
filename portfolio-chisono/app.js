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
    setTimeout(function(){
      $( ".biografia" ).fadeTo( 1000, 1 );
    }, 1700);
    setTimeout(function(){
      $( ".skills" ).fadeTo( 1000, 1 );
    }, 4000);
    setTimeout(function(){
      $( ".hobbylist" ).fadeTo( 1000, 1 );
    }, 4800);
  }, 900);

  // APPARIZIONE ESAGONI
  setTimeout(function(){
    $( ".uno" ).fadeTo( 1000, 1 );
    setTimeout(function(){
      $( ".quattro" ).fadeTo( 1000, 1 );
    }, 500);
    // setTimeout(function(){
    //   $( "." ).fadeTo( 1000, 1 );
    // }, 1000);
    setTimeout(function(){
      $( ".cinque" ).fadeTo( 1000, 1 );
    }, 1500);
  }, 700);

});
