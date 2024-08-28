resposta 1

let quad = function (num){
    return num*num;
}
console.log(quad(4));

resposta 2

let mudar = function(nome){
    return `ola, ${nome}!`;
}
console.log(mudar("daniel"));

resposta 3

let mat = function(a,b){
    return a + b; 
}

console.log(mat(5,7));

resposta 4
let ver = function(num){
     return num % 2 === 0;
}

console.log(ver(7));

resposta 5

let cal = function(n){
       if (n === 0) return 1;
    return n * calculaFatorial(n - 1);
}

console.log(cal(8));

resposta 6
let dob = function(array){
    return array.map(num => num * 2); 
}
console.log(dob([2, 4, 6]));

resposta 7
let junt = function(str1, str2){
     return str1 + str2;
}

console.log(junt('ola', 'conhecimento'));
