
const buttons = document.querySelectorAll('.button');//(select by classname)to select all buttons and loop through them
const body = document.querySelector('body'); //select by tagname

buttons.forEach(function (button) { //selecting buttons(to loop through nodelist(buttons)use for each)
  console.log(button);
  button.addEventListener('click', function (e) { //click event ho to do fun e(callback fun)
    
   body.style.backgroundColor=button.id; //jis button pr click kre background color usi button ki id(color)ka krdo
  });
});

/*  OR
if (e.target.id === 'grey') { //agr button id grey ho
      body.style.backgroundColor ='grey'; //bg color grey krdo
    }
    if (e.target.id === 'pink') {
      body.style.backgroundColor ='pink';
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow';
    }*/
    