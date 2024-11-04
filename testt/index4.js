// Bir funksiya yazın. İki parametr qəbul etsin. Biri cümlə digəri isə o cümlə içərisindəki söz olsun. Sizin funksiyanız həmin sözün indeksini tapsın
//  Daxil edilən cümlədə ən uzun sözü tapın.
// sentenceCapitalization("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, dolores.")

// Expected Output:

// consectetur.

// function include(arr, word) {
//     let newarray = arr.split(" ");

//     for (let i = 0; i < newarray.length; i++) {
//         if (newarray[i] === word) {

//         }
//     }
// }

// function longest(sentence) {
//     let arr = sentence.split(" ");
//     let longest = arr[0].length;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > longest) {
//             longest = arr[i];
//         }
//     }
//     return longest;
// }


// console.log(checkinganogram("salam", ''));

// function checkinganogram(word1, word2) {

//     word1 = word1.toLowerCase();
//     word2 = word2.toLowerCase();


//     let sortedWord1 = word1.split("").sort().join("");
//     let sortedWord2 = word2.split("").sort().join("");
//     console.log(sortedWord1);
//     console.log(sortedWord1);

//     if (sortedWord1 === sortedWord2) {
//         return "duzdur";

//     } else {
//         return "sehvdir";

//     }
// }

// console.log(checkinganogram("salam", "malas"));
// console.log(checkinganogram("salam", "b"));

// function reverse(soz) {
//     return soz.split(" ").reverse().join(" ");
// }

// console.log(reverse("salam necesen"));

const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b });

console.log(points);

