const number = [2, 4, 9, 10, 45, 67, 8, 90];
const  user= []; 

for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 !== 0) continue; 
    user.push(number[i]); 
}

console.log(number);
console.log( user); 