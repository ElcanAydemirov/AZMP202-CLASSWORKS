// 1) Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    personDetail() {
        return "detail"
    }
}

const human1 = new Person("Eljan", 19, "Azerbaijan");
const human2 = new Person("Jamil", 19, "Azerbaijan");
console.log(human1);
console.log(human2);
console.log(human1.personDetail());
console.log(human2.personDetail());

//2)
// Bir class yaradirsiz ve o classin icerisinde plus, minus, multiply, divide functionlari olur.
// var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2) resultin neticesi bu yazilisa gore 50+6-30*3/2 mentiqi ile (riyazi prinsibi unudun,vurma bolme onceliyine ehtiyac yoxdu) 39 olmalidi.

class operations {
    constructor(eded) {
        this.eded = eded;

    }

    plus(num) {
        this.eded += num;
        return this;
    }

    minus(num) {
        this.eded -= num;
        return this;
    }

    multiply(num) {
        this.eded *= num;
        return this;
    }

    divide(num) {
        this.eded /= num;
        return this;
    }
}

const operation1 = new operations(50).plus(6).minus(30).multiply(3).divide(2)
console.log(operation1);
