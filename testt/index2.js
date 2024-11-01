// 1.Verilmiş arraydə cüt ədədlərin ən böyüynü tapan alqoritm yazin.
// 2.Verilmiş arraydə tək indexdə duran ən böyük tək ədədi tapan alqoritm yazin.
// 3.Verilmiş arraydə ən böyük və ən kiçik ədədlərini hasili ilə cəmini müqasiyə edin.
// 4.Verilmis ədədin reqemlerinin cemini tapan alqoritm yazin.
// 5.Verilmiş arraydə ən böyük ədədlə ən kiçik ədədin yerini dəyişin.
// 6.Verilmiş arraydə təkrərlanan elementi tapin.
// 7.Verilmiş arraydə ən böyük və ən kiçik ədədin hasilini arrayin ədədi ortasi ilə müqasiyə edin.
// 7.
// Bu array-dəki insanların orta yaşını hesablayın.
// let people = [
//     { name: "Aysel", age: 25 },
//     { name: "Rəşad", age: 30 },
//     { name: "Leyla", age: 18 },
//     { name: "Kamal", age: 40 }
// ];

// 8.city dəyəri Bakı olan və yaşı 20-dən böyük olan insanları tapıb adlarını çıxarın.
// let people = [
//     { name: "Aysel", age: 25, city: "Bakı" },
//     { name: "Rəşad", age: 30, city: "Gəncə" },
//     { name: "Leyla", age: 18, city: "Bakı" },
//     { name: "Kamal", age: 40, city: "Sumqayıt" }
// ];

// 10. İki Array-də Eyni Elementlərin Tapılması
// let array1 = [1, 3, 5, 7];
// let array2 = [2, 3, 6, 7, 8];


//Task1
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let largest = array[0];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         if (array[i] > largest) {
//             largest = array[i]
//         }
//     }

// }
// console.log(largest);

//Task2

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let largest = array[0];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 1) {
//         if (array[i] > largest) {
//             largest = array[i]
//         }
//     }

// }
// console.log(smallest);

//Task3
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let largest = array[0];
// let smallest = array[0]

// for (let i = 0; i < array.length; i++) {
//     if (array[i] > largest) {
//         largest = array[i]
//     } else if (array[i] < smallest) {
//         smallest = array[i];
//     }
// }


// console.log(largest * smallest === largest + smallest);

// Task 4

// let number = 145;
// let str = String(number);
// let arr = [];
// for (let i = 0; i < str.length; i++) {
//     arr[i] = str[i];
// }

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += +(arr[i]);
// }
// console.log(sum);

// Task 5

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let largest = array[0];
// let smallest = array[0];
// let maxindex;
// let minindex;

// for (let i = 0; i < array.length; i++) {
//     if (array[i] > largest) {
//         largest = array[i]
//         maxindex = i;
//     } else if (array[i] < smallest) {
//         smallest = array[i];
//         minindex = i;
//     }
// }

// for (let i = 0; i < array.length; i++) {
//     if (array[i] === smallest) {
//         array[i] = largest;
//     } else if (array[i] === largest) {
//         array[i] = smallest;
//     }
// }

// console.log(array);

// Task 6

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 8];
// let yoxlanilmali;

// for (let i = 0; i < array.length; i++) {
//     yoxlanilmali = array[i];
//     for (let j = i + 1; j < array.length; j++) {
//         if (array[j] === yoxlanilmali) {
//             console.log(array[j]);
//         }

//     }
// }

// Task 7

// let people = [
//     { name: "Aysel", age: 25 },
//     { name: "Rəşad", age: 30 },
//     { name: "Leyla", age: 18 },
//     { name: "Kamal", age: 40 }
// ];

// let sum = 0;

// for (let i = 0; i < people.length; i++) {
//     sum += people[i].age;
// }
// console.log(sum / people.length);

// Task 8

// let people = [
//     { name: "Aysel", age: 25, city: "Baki" },
//     { name: "Rəşad", age: 30, city: "Gəncə" },
//     { name: "Leyla", age: 18, city: "Baki" },
//     { name: "Kamal", age: 40, city: "Sumqayıt" }
// ];

// for (let i = 0; i < people.length; i++) {
//     if (people[i].city.toLowerCase === 'baki' && people[i].age === 20) {
//         console.log(people[i].name);
//     }
// }

// let array1 = [1, 3, 5, 7];
// let array2 = [2, 3, 6, 7, 8];
// let check;

// for (let i = 0; i < array1.length; i++) {
//     check = array1[i];
//     for (let j = 0; j < array2.length; j++) {
//         if (check === array2[j]) {
//             console.log(check);
//         }
//     }
// }

// Task son

let array = [11, 12, 14, 56];
let arr = [];

for (let i = array.length - 1; i < array.length; i--) {
    
}