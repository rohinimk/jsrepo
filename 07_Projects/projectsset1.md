#Projects related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project1 Solution
## Project2 Solution

```Javascript
const form = document.querySelector('form');

//this use case will give you empty value. The value will be filled up as soon as the page loads. We want values whenwe submit / click the button
//const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML = "Please enter a valid height\n";
  } else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML += "Please enter a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);
    let bodyweight = 'Overweight';
    if(bmi < 18.6) bodyweight = "Under Weight";
    else if(bmi <= 24.9) bodyweight = 'Normal Range';
    result.innerHTML = `<span>BMIS is : ${bmi} and you are ${bodyweight}</span>`;
  }
});
```
