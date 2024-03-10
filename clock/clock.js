const clock= document.querySelector('#clock'); //selecting the clock div where time is displayed
setInterval(function(){ //sets interval jiska baad value update hoti rhe
    let date=new Date(); //date object
    clock.innerHTML=date.toLocaleTimeString(); //clock div ka andar display this date obj as time string
},1000); //interval of 1000ms i.e. update every 1s