function speedConvert() {
    const speed_kmH = 36;
    const speed_ms = 20;

    const kmH_to_ms = Math.round(speed_kmH / 3.6);
    const ms_to_kmH = Math.round(speed_ms * 3.6);

    console.log(`${speed_kmH} км/ч соответствует ${kmH_to_ms} м/c`);
    console.log(`${speed_ms} м/c соответствует ${ms_to_kmH} км/ч`);

    console.log("_________________________");
}

function checkTriangle() {
    const a = Number(prompt("Введите сторону a (число)..."));
    const b = Number(prompt("Введите сторону b (число)..."));
    const c = Number(prompt("Введите сторону c (число)..."));

    if (isNaN(a) ||
        isNaN(b) ||
        isNaN(c)) {
        console.error("Введено минимум одно не число");
        return false;
    }

    if (a+b<c || a+c < b || b+c < a) {
        console.log("Треугольник не существует");
        return false;
    }
    else {
        console.log("Треугольник существует");
    }

    // count perimeter
    const perimeter = a + b + c;

    // count square
    const p = perimeter / 2;
    const square = Math.sqrt(p * (p-a) * (p-b) * (p-c));

    console.log("Периметр = ", perimeter);
    console.log("Площадь = ", square);
    console.log("Соотношение", perimeter / square);
}

function fizzBuzz() {
    const number = Number(prompt("Введите число...", "5"));

    if (isNaN(number)) {
        console.error("Введено не число");
        return false;
    }

    for (let i=0; i<number+1; i++) {
        if (i % 2 === 0) {
            console.log(i, "buzz");
        }
        // число нечетное
        else {
            if (i % 5 === 0) {
                console.log(i, "fizz buzz");
            }
            else {
                console.log(i, "fizz");
            }
        }
    }
}

function xMasTree() {
    const xMasTreeHeight = Number(prompt("Введите высоту ёлки", "13"));

    if (isNaN(xMasTreeHeight) || xMasTreeHeight === 0) {
        console.error("Введена пустая строка или не число");
        return false;
    }

    let xMasTreeString = "";
    for(let i = 0; i<xMasTreeHeight + 1; i++) {
        let tempStr = null;

        if (i % 2 === 0) {
            tempStr = "#".repeat(i) + "\n";
        }
        else {
            tempStr = "*".repeat(i) + "\n";
        }

        xMasTreeString += tempStr;
    }

    xMasTreeString += "||";

    console.log(xMasTreeString);
}

function guessNumber() {
    const myNumber = 213;
    let userNumber = null;

    do {
        userNumber = prompt("Введите число, которое, как вы вы думаете, загадано...");

        if (userNumber === null) {
            return false;
        }

        userNumber = Number(userNumber);

        if (isNaN(userNumber)) {
            console.error("Введено не число");
            return false;
        }

        if (myNumber > userNumber) {
            console.log("Ваше число меньше");
        }
        else if (myNumber < userNumber) {
            console.log("Ваше число больше");
        }
        else {
            // console.log("Угадано!");
            alert("Угадано!!!");
            break;
        }

    } while(myNumber !== userNumber);
}

function dividing() {
    let n = prompt("Введите число, КОТОРОЕ будем делить...");
    if (n === null) return;

    let x = prompt("Введите первое число, НА КОТОРОЕ будем делить...");
    if (x === null) return;

    let y = prompt("Введите второе число, НА КОТОРОЕ будем делить...");
    if (y === null) return;

    n = Number(n);
    x = Number(x);
    y = Number(y);

    if (isNaN(n) || isNaN(x) || isNaN(y)) return;

    let isDividing = false;

    if (n % x === 0 && n % y === 0) isDividing = true;

    console.log("n =", n, "x =", x, "y =", y, "=>", isDividing);
}

function getQuarterByMonth() {
    let allMonth = 12;
    let monthN = prompt("Введите номер месяца по порядку...");
    if (monthN === null) return;

    if (isNaN(Number(monthN)) || Number(monthN) > allMonth || Number(monthN) === 0) return;

    monthN = Number(monthN);

    const kvartal = Math.floor((monthN + 2) / 3);

    console.log("Месяц", monthN, "=>", kvartal, "квартал");
}