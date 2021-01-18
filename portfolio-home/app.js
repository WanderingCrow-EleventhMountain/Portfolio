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


  let myChart = document.getElementById('myChart').getContext('2d');

  // Global Options
  Chart.defaults.global.defaultFontFamily = 'Orbitron';
  Chart.defaults.global.defaultFontSize = 18;
  Chart.defaults.global.defaultFontColor = 'rgb(230, 110, 13)';

  let massPopChart = new Chart(myChart, {
    type:'pie', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
      labels:['HTML5', 'CSS3', 'JavaScript', 'PHP'],
      datasets:[{
        label:'Population',
        data:[
          25,
          35,
          15,
          20
        ],
        //backgroundColor:'green',
        backgroundColor:[
          'rgb(176, 90, 48)',
          'rgba(52, 101, 230, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgb(112, 51, 212)'
        ],
        borderWidth:1,
        borderColor:'#777',
        hoverBorderWidth:3,
        hoverBorderColor:'#000'
      }]
    },
    options:{
      title:{
        display:true,
        text:'Linguaggi usati in questo progetto',
        fontSize:25
      },
      legend:{
        display:true,
        position:'right',
        labels:{
          fontColor:'rgb(230, 110, 13)'
        }
      },
      layout:{
        padding:{
          left:50,
          right:0,
          bottom:0,
          top:0
        }
      },
      tooltips:{
        enabled:true
      }
    }
  });


});