#Projects related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project1

```Javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click',function(e){
    //console.log(e);    
    //console.log(e.target.id);
    
    /*
    switch(e.target.id){
      case "grey":
        body.style.backgroundColor = "grey";
        break;

      case "white":
        body.style.backgroundColor = e.target.id;
        break;        
      
      case "blue":
        body.style.backgroundColor = e.target.id;
        break;

      case "yellow":
        body.style.backgroundColor = e.target.id;
        break;

      default:
        body.style.backgroundColor = e.target.id;
        break;
    }
    */
    body.style.backgroundColor = e.target.id;    
  })
});
```
