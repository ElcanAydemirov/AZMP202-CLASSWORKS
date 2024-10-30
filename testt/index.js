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