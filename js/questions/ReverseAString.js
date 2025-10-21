let num=123456789
let reverse=0;

while(num>0){

     rem=num%10;
    reverse=reverse * 10 + rem;
    num=Math.floor(num/10)
}
console.log(reverse);
