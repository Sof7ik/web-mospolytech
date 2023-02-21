function speedConvert(speed, type = "toMS") {
    let converted = null;
    let measure = "м/c";

    if (type === "toMS") {
        converted = Math.round(speed / 3.6);
    }
    else if (type === "toKMH") {
        converted = Math.round(speed * 3.6);
        measure = "км/ч";
    }
    else {
        measure = null;
        return false;
    }

    if (converted && measure) {
        return `${converted} ${measure}`;
    }
}

function getAbsValue(x) {
    console.log(x);
    return x < 0 ? x*(-1) : x;
}

function getObjectFields () {
    const student = {
        group: "211-324",
        last_name: "Бычков",
        first_name: "Леонид"
    };

    const props = [];
    for (const studentKey in student) {
        props.push(studentKey);
    }
    console.log("Список свойств:", props.join(", "));

    console.log(`Студент ${student.first_name} ${student.last_name} учится в ${student.group} группе`);
}

function randomNumber(min = 0, max = 64) {
    if (isNaN(Number(min)) || isNaN(Number(max)))
        return false;

    const rand = Math.random() * (max - min) + min;
    return Number(rand.toFixed())
}

function sampleArray(incomeArray = [1,2,3,4], count = 2) {
    const resultArray = [];

    console.log("входной массив", incomeArray, "кол-во:", count)

    for (let i=0; i<count; i++) {
        const number = randomNumber(0, incomeArray.length-1);
        resultArray.push(incomeArray[number]);
    }

    return resultArray;
}


document.addEventListener("DOMContentLoaded", () => {
    console.log("1. Конвертер скоростей")
    console.log(speedConvert(36, "toMS"));
    console.log(speedConvert(36, "toKMH"));

    console.log("____________");
    console.log("2. Абсолютные значения");
    console.log(getAbsValue(-5));

    console.log("")
    console.log(getAbsValue(25));

    console.log("____________");
    console.log("3. Работа с объектом студента");
    getObjectFields();

    console.log("____________");
    console.log("4. Случайные числа");
    console.log(randomNumber(5, 25));

    console.log("_____________");
    console.log("5. Массив");
    console.log(sampleArray());
})