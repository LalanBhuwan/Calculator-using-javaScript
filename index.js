let string = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '%'){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})

var number = 500;
var percentX = 12.2;
var result;

function percentCalculation(a, b){
  var c = (parseFloat(a)*parseFloat(b))/100;
  return parseFloat(c);
}

result = percentCalculation(number, percentX); //calculate percentX% of number
console.log(result);