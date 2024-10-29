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

let emek_haqqi = +window.prompt("emek haqqi");
let mebleg = +window.prompt("mebleg");
let muddet = +window.prompt("muddet");
let ayliq_odenis = +window.prompt("ayliq odenis");

if (muddet <= 36 && muddet >= 0) {
    if (mebleg < emek_haqqi * 10) {
        if (ayliq_odenis < emek_haqqi * 0.45) {
            if (muddet >= 0 && muddet <= 12) {
                qaytarilmali_mebleg = mebleg * 1.13;
                console.log("size bu", mebleg, "bu", muddet, "ay erzinde", qaytarilmali_mebleg, "qaytamaginiz serti ile verildi");

            } else if (muddet > 12 && muddet <= 24) {
                qaytarilmali_mebleg = mebleg * 1.15;
                console.log("size bu", mebleg, "bu", muddet, "erzinde", qaytarilmali_mebleg, "qaytamaginiz serti ile verildi");
            } else if (muddet > 24 && muddet <= 36) {
                qaytarilmali_mebleg = mebleg * 1.17;
                console.log("size bu", mebleg, "bu", muddet, "erzinde", qaytarilmali_mebleg, "qaytamaginiz serti ile verildi");
            }
        }
        else {
            console.log("dusmur");
        }
    } else {
        console.log("kredit dusmur");
    }
}

else {
    alert("Size bu sertler ile kredit dusmur");
}
