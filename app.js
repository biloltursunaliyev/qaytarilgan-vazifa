// 01
let daftarNarxi = 5000;
let ruchkaNarxi = 3000;
let daftarSoni = 4;
let ruchkaSoni = 2;

let daftarJami = daftarNarxi * daftarSoni;
let ruchkaJami = ruchkaNarxi * ruchkaSoni;
let jamiSumma = daftarJami + ruchkaJami;

console.log("Daftarlar narxi:", daftarJami);
console.log("Ruchkalar narxi:", ruchkaJami);
console.log("Jami summa:", jamiSumma);

// 02
let yosh = 17;

if (yosh >= 18) {
  console.log("Kirish mumkin");
} else {
  console.log("Kirish mumkin emas");
}

// 03
console.log(Boolean(0));
console.log(Boolean("JavaScript"));
console.log(Boolean(""));
console.log(Boolean(25));
console.log(Boolean(null));
console.log(Boolean(undefined));

// 04
let ball = 76;
let davomat = 85;

if (ball >= 60 && davomat >= 80) {
  console.log("Imtihondan o‘tdi");
} else {
  console.log("Imtihondan o‘tmadi");
}

// 05
let buyurtmaSummasi = 120000;
let premium = false;

if (buyurtmaSummasi >= 100000 || premium) {
  console.log("Bepul yetkazib berish");
} else {
  console.log("Yetkazib berish pullik");
}

// 06
let login = "student";
let password = "js12345";

if (login === "student" && password === "js12345") {
  console.log("Tizimga xush kelibsiz");
} else {
  console.log("Login yoki parol xato");
}

// 07
let mahsulotNarxi = 200000;
let kupon = true;
let yakuniySumma;

if (kupon) {
  yakuniySumma = mahsulotNarxi - mahsulotNarxi * 0.15;
} else {
  yakuniySumma = mahsulotNarxi;
}

console.log("To‘lanadigan summa:", yakuniySumma);

// 08
let username = "";
let age = 20;

if (!username) {
  console.log("Ismingizni kiriting");
} else {
  console.log("Xush kelibsiz");
}

console.log("Age mavjudmi:", Boolean(age));

// 09
let number = 14;

if (number % 2 === 0) {
  console.log("Juft son");
} else {
  console.log("Toq son");
}

// 10
let kinoYosh = 16;
let ruxsat = false;
let chipta = true;

if ((kinoYosh >= 18 || ruxsat) && chipta) {
  console.log("Kino zaliga kirish mumkin");
} else {
  console.log("Kirish mumkin emas");
}
