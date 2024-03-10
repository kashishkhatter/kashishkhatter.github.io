const form=document.querySelector('form'); //select the form to apply js
form.addEventListener('submit',function(e){ //on event of clicking submit
e.preventDefault(); //prevent the default action(form gets submitted and goes to backend but we need to show output)

const height=parseInt(document.querySelector('#height').value); //select the inputted value of height and weight(parse to int as by default it is string)
const weight=parseInt(document.querySelector('#weight').value); //selected inside the event coz we want values aftyer taking inputs
const res=document.querySelector('#results'); //select calculated res

if (height === '' || height < 0 || isNaN(height)) { //not valid inputs
    results.innerHTML = `Please give a valid height ${height}`; //inner html is used to display msgs(res div ma add this msg)
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else { //valid inputs
    const bmi = (weight / ((height * height) / 10000)).toFixed(2); //when valid inputs calculate bmi and display until 2 places

    
    if(bmi < 18.6 || bmi < 0){ //if calculated bmi less than 18.6
        results.innerHTML = `Your BMI is ${bmi}, you're Under Weight`; //add this text to inner html of res div
    }
    
    else if(bmi === 18.6 || bmi > 18.6 || bmi < 24.9 || bmi === 24.9){ //if calculated bmi between 18.6 and 24.9
        results.innerHTML =`Your BMI is ${bmi}, you've normal Weight`;
    }
    else {
    results.innerHTML = `Your BMI is ${bmi}, you're Over Weight`;
    }} //else end

    });//callback fun end

