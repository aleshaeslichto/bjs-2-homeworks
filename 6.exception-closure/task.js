// Задача 1

function parseCount(num) {
    let parsedNum = Number.parseFloat(num);

    if (Number.isNaN(parsedNum)) {
        throw new Error("Невалидное значение");
    }

    return parsedNum;
}

function validateCount(num) {
    try {
        return parseCount(num);
    } catch (error) {
        return error;
    }
}

// Задача 2

class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        let p = 0.5 * this.perimeter,
            s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

        return Number.parseFloat(s.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return new Object({
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            },
        });
    }
}
