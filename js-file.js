let add = (x,y) => {
    return parseInt(x) + parseInt(y);
}

let sub = (x,y) => {
    return x - y;
}

let mult = (x,y) => {
    return x * y;
}

let divi = (x,y) => {
    if(y==0) {
        console.log("Div by 0!!!")
    } else {
        return x / y;
    }
}

let operate = (operator, x, y) => {
    switch(operator) {
        case "+":
            return add(x,y);
            break;
        case "-":
            return sub(x,y);
            break;
        case "*":
            return mult(x,y);
            break;
        case "/":
            return div(x,y);
            break;
        default:
            console.log("Invalid");
            break;
    }
}
//Global Vars
let decimal = 0;
let currentNum;
let currentOp;

//----------------updating display------------------
let display = document.querySelector('#display');
display.value = 0; //reset display back to 0 when refreshing

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('.num');

// we use the .forEach method to iterate through each button
buttons.forEach((num) => {

  // and for each one we add a 'click' listener
  num.addEventListener('click', () => {
    //alert(button.id);
    if(display.value == 0) {
        display.value = num.id;
    } else {
        display.value += num.id;
    }
    
    
  });
});
//--------------------------------------------------

//--------------clear display-----------------------
let clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    display.value = 0;
    currentNum = 0;
});
//--------------------------------------------------

//-------------operators----------------
let operators = document.querySelectorAll('.op');

operators.forEach((op) => {
    op.addEventListener('click', () => {
        currentNum = display.value;
        currentOp = op.id;
        display.value = 0;
    });
});
//---------------------------------------


//-------------------equals----------------
let equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    display.value = operate(currentOp,currentNum,display.value);
});
//------------------------------------------