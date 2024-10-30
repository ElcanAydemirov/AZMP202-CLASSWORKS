// let a = +window.prompt("balivi yaz");

// if (a >= 80 && a <= 100) {
//     console.log("A");
// } else if (a >= 70 && a <= 79) {
//     console.log("B");
// } else if (a >= 60 && a <= 69) {
//     console.log("C");
// } else if (a >= 51 && a <= 59) {
//     console.log("D");
// } else if (a <= 50 && a >= 0) {
//     console.log("kesildin");
// }
// else {
//     console.log("Bal sehvdir");
// }

// let emek_haqqi = +window.prompt("emek haqqi");
// let mebleg = +window.prompt("mebleg");
// let muddet = +window.prompt("muddet");
// let ayliq_odenis = +window.prompt("ayliq odenis");

// if (muddet <= 36 && muddet >= 0) {
//     if (mebleg < emek_haqqi * 10) {
//         if (ayliq_odenis < emek_haqqi * 0.45) {
//             if (muddet >= 0 && muddet <= 12) {
//                 qaytarilmali_mebleg = mebleg * 1.13;
//                 console.log("size bu", mebleg, "bu", muddet, "ay erzinde", qaytarilmali_mebleg, "qaytamaginiz serti ile verildi");

//             } else if (muddet > 12 && muddet <= 24) {
//                 qaytarilmali_mebleg = mebleg * 1.15;
//                 console.log("size bu", mebleg, "bu", muddet, "erzinde", qaytarilmali_mebleg, "qaytamaginiz serti ile verildi");
//             } else if (muddet > 24 && muddet <= 36) {
//                 qaytarilmali_mebleg = mebleg * 1.17;
//                 console.log("size bu", mebleg, "bu", muddet, "erzinde", qaytarilmali_mebleg, "qaytamaginiz serti ile verildi");
//             }
//         }
//         else {
//             console.log("dusmur");
//         }
//     } else {
//         console.log("kredit dusmur");
//     }
// }

// else {
//     alert("Size bu sertler ile kredit dusmur");
// }

// let a = 1;
// let b = 2;
// let c = 3;

// let sumAB = a + b;
// let sumAC = a + c;
// let sumBC = b + c;

// if (sumAB >= sumAC && sumAB >= sumBC) {
//     console.log("Big sum result " + a + " and " + b);
// } else if (sumAC >= sumAB && sumAC >= sumBC) {
//     console.log("Big sum result " + a + " and " + c);
// } else {
//     console.log("Big sum result " + b + " and " + c);
// }

// let a = 4;
// let b = 5;
// let c = 6;

// let bigNumber, littleNumber;

// // Ən böyük ədədi tapmaq
// if (a >= b && a >= c) {
//     bigNumber = a * 100 + Math.max(b, c) * 10 + Math.min(b, c);
// } else if (b >= a && b >= c) {
//     bigNumber = b * 100 + Math.max(a, c) * 10 + Math.min(a, c);
// } else {
//     bigNumber = c * 100 + Math.max(a, b) * 10 + Math.min(a, b);
// }

// // Ən kiçik ədədi tapmaq
// if (a <= b && a <= c) {
//     littleNumber = a * 100 + Math.min(b, c) * 10 + Math.max(b, c);
// } else if (b <= a && b <= c) {
//     littleNumber = b * 100 + Math.min(a, c) * 10 + Math.max(a, c);
// } else {
//     littleNumber = c * 100 + Math.min(a, b) * 10 + Math.max(a, b);
// }
// //question1
// console.log("Big number: " + bigNumber);
// console.log("Little number: " + littleNumber);

// let katet1 = 3;
// let katet2 = 4;
// let hipotenus = 5;

// if (Math.pow(katet1, 2) + Math.pow(katet2, 2) === Math.pow(hipotenus, 2)) {
//     console.log("Result: düzbucaqlı üçbucaqdır");
// } else {
//     console.log("Result: düzbucaqlı üçbucaq deyil");
// }
// //question2
// let number = 652;

// let yüzlər = Math.floor(number / 100);
// let onluqlar = Math.floor((number % 100) / 10);
// let birliklər = number % 10;

// console.log("Result:", yüzlər, onluqlar, birliklər);
// //question3
// let month = "january";

// switch (month.toLowerCase()) {
//     case "january":
//     case "march":
//     case "may":
//     case "july":
//     case "august":
//     case "october":
//     case "december":
//         console.log(month + " has 31 days");
//         break;
//     case "april":
//     case "june":
//     case "september":
//     case "november":
//         console.log(month + " has 30 days");
//         break;
//     case "february":
//         console.log(month + " has 28 days");
//         break;
//     default:
//         console.log("Invalid month");
// }

// let count = 0;

// for (let index = 0; index < 101; index++) {
//     if (index % 2 === 0) {
//         count++
//     }

// }

// console.log(count);

// let count1 = 0;

// for (let index = 0; index < 101; index++) {
//     if (index % 2 === 1) {
//         count1++
//     }

// }

// console.log(count1);

// let sum = 0;

// for (let index = 0; index < 101; index++) {
//     if (index % 5 === 0) {
//         sum += index;
//     }

// }

// console.log(sum);

// array = [12, 14, 15, 16, 17]
// let sum = 0;

// for (let index = 0; index < array.length; index++) {
//     sum += array[index];

// }
// console.log(sum);



// for (let index = 0; index < array.length; index++) {
//     if (index % 2 === 1) {
//         console.log(array[index]);
//     }
// }

// for (let index = 0; index < array.length; index++) {
//     if (index % 2 === 0) {
//         console.log(array[index]);
//     }
// }

// let largest = array[0];
// let smallest = array[0]

// for (let i = 0; i < array.length; i++) {

//     if (array[i] > largest) {
//         largest = array[i];
//     }

// }

// console.log(largest);

// for (let i = 0; i < array.length; i++) {

//     if (array[i] > largest) {
//         largest = array[i];
//     }
//     if (array[i] < largest) {
//         smallest = array[i];
//     }

// }
// console.log(smallest * largest);

// let verilmis_eded = 17;

// for (let index = 0; index < array.length; index++) {
//     if (verilmis_eded === array[index]) {
//         console.log("var");
//         break
//     }
// }


// const employees = [
//     { name: "Jamil", salary: 50000, department: "IT" },
//     { name: "Jale", salary: 60000, department: "HR" },
//     { name: "Bayram", salary: 55000, department: "IT" },
//     { name: "Sahil", salary: 75000, department: "HR" },
//     { name: "Maryam", salary: 65000, department: "IT" },
//     { name: "Elnara", salary: 80000, department: "HR" },
//     { name: "Davud", salary: 70000, department: "IT" },
// ];

// for (let index = 0; index < employees.length; index++) {
//     if (employees[index].salary > 60000) {
//         console.log(employees[index].name);
//     }
// }


// let eded = 100;

// vurma = 1;

// for (let i = 1; i <= eded; i++) {

//     vurma *= i;
// }
// console.log(vurma);

// function faktorial(eded) {
//     if (eded == 1 || eded == 0) {
//         return 1;
//     }
//     return eded * faktorial(eded - 1);
// }

// console.log(faktorial(5));

// let soz = "salam o neceseno";

// let  count = 0;

// for (let i = 0; i < soz.length; i++) {
//     if(soz[i] === "o")
//     {
//         count++
//     }

// }
// console.log(count);

// const countries = ["azerbaijan", "germany", "norway"];

// for (let i = 0; i < countries.length; i++) {
//     if (countries[i][0] === "a" && countries[i][countries[i].length - 1] === "n") {
//         console.log(countries[i]);
//     }
// }

// let eded = 456;

// for (let i = 0; i < String(eded).length; i++) {
//     console.log(String(eded)[i]);

// }

// let number = "5678";
// let iterator = 0;


// console.log(number[0]);

// while (number > 0) {


// }

const scores = [78, 89, 78, 56, 73];

// let sum = 0;

// let avg = 0;

// for (let i = 0; i < scores.length; i++) {

//     sum += scores[i];

//     avg = sum / scores.length;

// }

// console.log(avg);

// let largest = scores[0];
// let smallest = scores[0];


// //largest
// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > largest) {
//         largest = scores[i];
//     }
// }
// console.log(largest);


// //smallest
// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] < smallest) {
//         smallest = scores[i];
//     }
// }

// console.log(smallest);