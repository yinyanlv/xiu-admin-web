//  "1 + 2 * 3 + 3 / 3 + 2"
function mockCompute(str) {
    const list = str.split(' ');
    let temp: any = [];

    for (let i = 0; i< list.length; i++) {
        if (temp.length <= 3) {
            temp.push(list[i]);
        } else {
            temp = rebuild(temp);
            temp.push(list[i]);
        }
    }

    temp = rebuild(temp);
    return compute(temp[0], temp[1], temp[2]);
}

function getPriority(op) {
    if (op === '-' || op === '+') {
        return 1;
    } else {
        return 2;
    }
}

function rebuild(list) {
    const op1 = list[1];
    const op2 = list[3];

    if (list.length === 4) {
        if (getPriority(op1) < getPriority(op2)) {
            return list;
        } else {
            return [compute(list[0], list[1], list[2]), op2];
        }
    } else if (list.length === 5) {
        return [list[0], list[1], compute(list[2], list[3], list[4])];
    } else {
        return list;
    }
}

function compute(num1, op, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (isNum(op)) {
        throw new Error('unbelievable!');
    }

    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}

function isNum(item) {
    const operators = ['+', '-', '*', '/'];
    return operators.indexOf(item) > -1 ? false : true;
}

export default mockCompute;
