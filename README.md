# "JavaScript Pro: Mastering Advanced Concepts and Techniques" Materials

This repository contains the materials as I learn **JavaScript Pro: Mastering Advanced Concepts and Techniques**. This course is taught by Colt Steele and is available on [Udemy](https://www.udemy.com/course/pro-javascript/).

## Table of Contents

1. [Object Oriented JavaScript](#topic-1-object-oriented-javascript)
1. [Newer OOP Features in JavaScript](#topic-2-newer-oop-features-in-javascript)

## Topic 1: Object Oriented JavaScript

SOLID design principles, prototypes, private class fields, etc.

### Key Notes

-   Properties that don't exist evaluate to `undefined`
-   All keys get "stringified":

    ```javascript
    const obj = {
        1: "one",
        2: "two",
        3: "three",
    };
    /* obj[1] and obj["1"] are the same */
    console.log(obj[1]); // one
    console.log(obj["1"]); // one
    ```

-   Use `super()` to call the constructor of the parent class

    ```javascript
    class Triangle {
        constructor(a, b) {
            this.a = a;
            this.b = b;
        }
    }
    class ColorTriangle extends Triangle {
        constructor(a, b, color) {
            super(a, b);
            this.color = color;
        }
    }
    ```

-   Use `super.methodName()` to call a method of the parent class

    ```javascript
    class Triangle {
        constructor(a, b) {
            this.a = a;
            this.b = b;
        }
        describe() {
            return `Area is ${this.getArea()}.`;
        }
    }
    class ColorTriangle extends Triangle {
        describe() {
            return super.describe() + ` Color is ${this.color}!`;
        }
    }
    ```

### Exercise

[Connect 4 OO](https://rithm-students-assets.s3.us-west-1.amazonaws.com/udemy/exercises/connect-four-oo/handout/index.html)

### [Code](/01_OOP/)

### [Slides](https://rithm-students-assets.s3.us-west-1.amazonaws.com/udemy/lectures/js-oo/slides/index.html)

### [Handout](https://rithm-students-assets.s3.us-west-1.amazonaws.com/udemy/lectures/js-oo/handout/index.html)

## Topic 2: Newer OOP Features in JavaScript
