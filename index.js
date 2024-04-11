let x = 5;
let y = 10;

if (x > y) {
    console.log("Didesnis skaičius yra 'x'");
} else {
    console.log("Didesnis skaičius yra 'y'");
}
let x = 5;
let y = 10;
let z = -12;

let sandauga = x * y * z;

if (sandauga < 0) {
    console.log("Sandaugos ženklas yra '-'");
} else {
    console.log("Sandaugos ženklas yra '+'");
}
let x = 2;
let y = -2;
let z = 4;

let surikiuoti = [x, y, z].sort((a, b) => a - b);

console.log("Rezultatas: " + surikiuoti.join(", "));
let a = 172;
let b = -6;
let c = 13;

let diskriminantas = b ** 2 - 4 * a * c;

if (diskriminantas > 0) {
    console.log("Lygtis turi du skirtingus sprendinius.");
} else if (diskriminantas === 0) {
    console.log("Abu sprendiniai sutampa.");
} else {
    console.log("Lygtis neturi realiųjų skaičių sprendinių aibėje.");
}
