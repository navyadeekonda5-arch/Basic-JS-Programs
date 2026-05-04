let num= 1234
let reversed=0;

for (let i=num;i>0;i=Math.floor(i/10)){
    let lastDigit=i%10;
    reversed=reversed*10+lastDigit;
}
console.log(reversed);