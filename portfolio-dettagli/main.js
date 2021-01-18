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
      $( ".bordo" ).fadeTo( 1000, 1 );
    }, 1000);
    setTimeout(function(){
      $( ".graphcontainer" ).fadeTo( 1200, 1 );
    }, 4000);
  }, 900);

  // GRAFICO
  let myChart = document.getElementById('myChart').getContext('2d');

  // Global Options
  Chart.defaults.global.defaultFontFamily = 'Orbitron';
  Chart.defaults.global.defaultFontSize = 18;
  Chart.defaults.global.defaultFontColor = 'rgb(139, 132, 126)';

  let massPopChart = new Chart(myChart, {
    type:'pie', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data:{
      labels:['HTML5', 'CSS3', 'Javascript'],
      datasets:[{
        label:'Population',
        data:[
          25,
          35,
          15
        ],
        //backgroundColor:'green',
        backgroundColor:[
          'rgb(176, 90, 48)',
          'rgba(52, 101, 230, 0.6)',
          'rgba(255, 206, 86, 0.6)'
        ],
        borderWidth:3,
        borderColor:'rgb(139, 132, 126)',
        hoverBorderWidth:5,
        hoverBorderColor:'rgb(230, 110, 13)'
      }]
    },
    options:{
      title:{
        display:true,
        text:'', //titolo grafico
        fontSize:11
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
          left:0,
          right:30,
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
