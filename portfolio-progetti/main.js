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

  // APPARIZIONE PROGETTI
  setTimeout(function(){
    $( ".progetto" ).fadeTo( 1400, 1 );
    setTimeout(function(){
      $( "h2").fadeTo( 1100, 1 );
    }, 1000);
  }, 1600);

});
