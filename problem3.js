// input
let nama = "Faisal";
let hello = "Hello";
let pesan = "saya Javascript bahasa yang sangat menyenangkan"

console.log(hello + " " + nama + "! " + pesan)
// Your code here
let v1 = 400;
let v2 = 700;
function chek (a,b){
    if (a===v1){
        if(b==v2){
            return "value of v1 is 400 and v2 is 700";
            }
            else{
                return "value B valid"
            }
            else {
                return "value a invalid";
            }
    }
}
console.log(chek(300,v2));c