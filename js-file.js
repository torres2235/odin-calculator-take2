let add = (x,y) => {
    return x + y;
}

let sub = (x,y) => {
    return x - y;
}

let mult = (x,y) => {
    return x * y;
}

let divi = (x,y) => {
    return x / y;
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
});
//--------------------------------------------------