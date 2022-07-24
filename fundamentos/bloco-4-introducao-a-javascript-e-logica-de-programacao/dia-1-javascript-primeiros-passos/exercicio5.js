const ladoA = 60;
const ladoB = 60;
const ladoC = -2;

let somaDosLados = ladoA + ladoB + ladoC;

if (somaDosLados === 180) {
    console.log("true");
} 
else if (somaDosLados != 180) {
    console.log("false");
} 

if (ladoA || ladoB || ladoC <= 0) {
    console.log("error")
}