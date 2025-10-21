let even=0;
let odd=0;

for(i=1;i<=50;i++)
{
    if(i%2==0)
    {
        even=even+i
    }
    else{
        odd=odd+i
    }
}
console.log("EvenSum:"+even);
console.log("OddSum:"+odd);

