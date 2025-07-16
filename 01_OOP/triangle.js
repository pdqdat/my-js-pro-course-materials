class Triangle {
    constructor(a, b) {
        if (!Number.isFinite(a) || a <= 0) throw new Error(`Invalid a: ${a}`);

        if (!Number.isFinite(b) || b <= 0) throw new Error(`Invalid b: ${b}`);

        this.a = a;
        this.b = b;
    }

    getArea() {
        return (this.a * this.b) / 2;
    }

    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }

    sayHi() {
        return "HELLO FROM A TRIANGLE!!";
    }

    describe() {
        return `I'm a triangle with area of ${this.getArea()}.`;
    }
}

const tri=new Triangle(3, 4);
console.log(tri.describe());

class ShyTriangle extends Triangle {
    describe() {
        return "(runs and hides)";
    }

    beShy() {
        return "I AM SHY!!!";
    }
}

const shyTri=new ShyTriangle(3, 4);
console.log(shyTri.describe());