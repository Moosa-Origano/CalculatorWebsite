let currentCalc = document.getElementById("current-calc")
let output = document.getElementById("output")

const clear = document.getElementById("C")
const brackets = document.getElementById("brackets")
const mod = document.getElementById("mod")
const divide = document.getElementById("divide")

const seven = document.getElementById("7")
const eight = document.getElementById("8")
const nine = document.getElementById("9")
const times = document.getElementById("times")

const four = document.getElementById("4")
const five= document.getElementById("5")
const six = document.getElementById("6")
const minus= document.getElementById("minus")


const one = document.getElementById("1")
const two = document.getElementById("2")
const three = document.getElementById("3")
const plus = document.getElementById("plus")


const del = document.getElementById("DEL")
const zero = document.getElementById("0")
const decimal = document.getElementById(".")
const equals = document.getElementById("equals")


const clearAll = () => {
  output.innerHTML = ""; 
  currentCalc.innerHTML = ""
} // function that clears the screen





clear.onclick = () => {output.innerHTML = ""; currentCalc.innerHTML = ""}


del.onclick = () => { // deletes last character input
  if (currentCalc.innerHTML.length > 0) {
    currentCalc.innerHTML = currentCalc.innerHTML.substring(0, currentCalc.innerHTML.length - 1);
  }
}



equals.onclick = () => {
  answer = eval(currentCalc.innerText)
  console.log(typeof answer)

  if (answer > 99999999999999 || answer < -9999999999999) {
    output.innerHTML = "Overflow"
  } else {

    try {
      output.innerHTML = answer
    }

    catch {
      output.innerHTML = "Error"
    } 
  }


};



const generalAdding = (element) => {
  switch (element.id) {
    case "divide": 
      currentCalc.innerHTML += "/"; 
      break;
      
    case "times":  
      currentCalc.innerHTML += "*";
      break;

    case "minus":
      currentCalc.innerHTML += "-"
      break;

    default:
      currentCalc.innerHTML += element.innerText;
      break;
  }

  
};


const inputButtons = [zero, decimal, one, two, three, plus, four, five, six, minus, seven, eight, nine, times, brackets, mod, divide];

inputButtons.forEach(button => {button.onclick = () => generalAdding(button)});