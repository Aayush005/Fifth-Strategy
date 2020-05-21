async function graphfetch(){const t=[],a=[],e=[],s=[],o=[],i=await fetch("../static/state_data2.csv"),l=await i.text(),r=await fetch("../static/close.csv"),n=await r.text(),c=l.split("\n").slice(1),d=n.split("\n").slice(1);return c.forEach(o=>{const i=o.split(","),l="Day "+i[0];t.push(l);const r=i[1];a.push(r);const n=i[5];e.push(n);const c=i[3];s.push(c)}),d.forEach(t=>{const a=t.split(",")[0];o.push(a)}),console.log(s),{xlabels:t,ypurchased:a,ymoney:e,ysell:s,close:o}}async function createChart(){const t=await graphfetch(),a=document.getElementById("chart").getContext("2d");var e={labels:t.xlabels,datasets:[{label:"Purchased Units",data:t.ypurchased,fill:!0,backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgba(255, 99, 132, 1)",borderWidth:2,pointStyle:"triangle",pointRadius:5,pointHoverBorderWidth:5,pointHoverRadius:8,showLine:!1},{label:"Sell Units",data:t.ysell,fill:!0,backgroundColor:"rgba(44, 130,201, 0.2)",borderColor:"rgba(44, 130, 201, 1)",borderWidth:2,pointRadius:5,pointHoverBorderWidth:5,pointHoverRadius:8},{label:"Close Data",data:t.close,fill:!1,backgroundColor:"rgba(247, 202, 24, 0.2)",borderColor:"rgba(247, 202, 24, 1)",borderWidth:1,pointStyle:"circle"}]};new Chart(a,{type:"line",data:e,options:{responsive:!0,maintainAspectRatio:!1,animation:{easing:"easeInElastic",duration:1e3},tooltips:{},scales:{xAxes:[{gridLines:{display:!1}}],yAxes:[{ticks:{max:2200,min:1,stepSize:100},gridLines:{display:!1},scaleLabel:{display:!0,labelString:"Amount (₹)"}}]}}})}