async function createChart(){var t=document.getElementById("chart").getContext("2d"),a={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",fillColor:"rgba(255, 99, 132, 0.2)",strokeColor:"rgba(220,220,220,1)",pointColor:"rgba(220,220,220,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(220,220,220,1)",data:[65,59,80,81,56,55,40]},{label:"My Second dataset",fillColor:"rgba(151,187,205,0.2)",strokeColor:"rgba(151,187,205,1)",pointColor:"rgba(151,187,205,1)",pointStrokeColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(151,187,205,1)",data:[28,48,40,19,86,27,90]}]},e={animation:!1,scaleOverride:!0,scaleSteps:10,scaleStepWidth:10,scaleStartValue:0};new Chart(t,{type:"line",data:a,options:e});function r(t){t.push(Math.floor(100*Math.random())+1),t.shift()}setInterval((function(){var l,i,n;r(a.datasets[0].data),r(a.datasets[1].data),l=a.labels,i=o.indexOf(l[l.length-1])+1,n=null!=o[i]?o[i]:"January",l.push(n),l.shift();new Chart(t,{type:"line",data:a,options:e})}),2e3);var o=["January","February","March","April","May","June","July","August","September","October","November","December"]}