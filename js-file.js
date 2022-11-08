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