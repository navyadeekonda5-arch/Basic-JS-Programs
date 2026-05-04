var a= 345;
var sum=0;
for (let i=a;i>0;i=Math.floor(i/10)){
    let lastDigit=i%10;
    sum=sum+lastDigit;
}
console.log(sum);