Chart.defaults.font.family="'Inter',sans-serif";
Chart.defaults.plugins.legend.display=false;

const DOUGH_OPTS = {
  responsive:true, maintainAspectRatio:false,
  cutout:'72%',
  plugins:{
    legend:{display:false},
    tooltip:{callbacks:{label:ctx=>{
      const t=ctx.dataset.data.reduce((a,b)=>a+b,0);
      return ` ${ctx.parsed} (${((ctx.parsed/t)*100).toFixed(1)}%)`;
    }}}
  }
};

/* Q5 */
new Chart(document.getElementById('c1'),{
  type:'doughnut',
  data:{labels:['Sim','Talvez'],datasets:[{
    data:[46,1],
    backgroundColor:['#4DC3EF','#DEDEDE'],
    borderWidth:0,hoverOffset:6
  }]},
  options:DOUGH_OPTS
});

/* Q6 */
new Chart(document.getElementById('c2'),{
  type:'doughnut',
  data:{labels:['Sim','Talvez'],datasets:[{
    data:[44,3],
    backgroundColor:['#2DD9A4','#DEDEDE'],
    borderWidth:0,hoverOffset:6
  }]},
  options:DOUGH_OPTS
});


new Chart(document.getElementById('c_idade'),{
  type:'doughnut',
  data:{
    labels:['19–25 anos','26–30 anos','31–40 anos','Acima de 40'],
    datasets:[{
      data:[6,14,14,13],
      backgroundColor:['#4DC3EF','#2DD9A4','#22b88a','#F5A623'],
      borderWidth:3,
      borderColor:'#fff',
      hoverOffset:8
    }]
  },
  options:{
    responsive:true,maintainAspectRatio:false,
    cutout:'60%',
    plugins:{
      legend:{display:false},
      tooltip:{callbacks:{label:ctx=>{
        const t=ctx.dataset.data.reduce((a,b)=>a+b,0);
        return ` ${ctx.parsed} pessoas (${((ctx.parsed/t)*100).toFixed(1)}%)`;
      }}}
    }
  }
});


new Chart(document.getElementById('c_radar'),{
  type:'radar',
  data:{
    labels:['Interesse','Compraria','Qualidade','Viável','Outros usos'],
    datasets:[{
      data:[97.9,93.6,89.4,70.2,85.1],
      backgroundColor:'rgba(77,195,239,0.15)',
      borderColor:'#4DC3EF',
      borderWidth:2,
      pointBackgroundColor:'#4DC3EF',
      pointRadius:4,
      pointHoverRadius:6
    }]
  },
  options:{
    responsive:true,maintainAspectRatio:false,
    plugins:{legend:{display:false}},
    scales:{r:{
      min:60,max:100,
      grid:{color:'rgba(46,61,73,0.08)'},
      angleLines:{color:'rgba(46,61,73,0.08)'},
      ticks:{display:false,stepSize:10},
      pointLabels:{font:{size:9,weight:'500'},color:'#888'}
    }}
  }
});
