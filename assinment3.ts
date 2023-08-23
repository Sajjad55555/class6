//Assignment for the week is:
 // Create a function that takes an array, an index, and a value as parameters. Inside the function,
 // use the splice method to insert the value at the specified index in the array.
 // Return the modified array.
 
function splicers(anIndex:number, addRmove:number, addValue:string){
    let arry:any[]=["heloo","world"]
    arry.splice(anIndex,addRmove,addValue)
    return arry}
    var result = splicers(2,0,"sajjad")
    console.log(result);
 //2-Implement a simple shopping cart program using an array. Create functions to add items,
 // remove items, and update quantities using the splice method. Print the cart's contents
 // after each operation
 var shopingcart:string[] = ["sugar", "cocke"];
 function additem(index:number, addRmove:number, addValue:string){
    shopingcart.splice(index,addRmove,addValue);
    console.log(shopingcart);}
function remove(index:number, addRmove:number){
    shopingcart.splice(index,addRmove);
    console.log(shopingcart);}
function quantities(){
    console.log(shopingcart.length);}
    //additem(1,0,"water")
    //additem(1,0,"water")
   //remove(1,1)       
    //quantities()
 //3- Write a program that uses a while loop to print the first 25 integers.
 var a:number=0;
 while(a<26){
    console.log(a)
    a=a+1}
 //4- Write a program that uses a while loop to print the first 10 even numbers.
 while(a<21){
    if(a%2==0){
    console.log(a)};
    a=a+1;}
//5- Create a function that takes a positive integer as parameter and uses a while loop
// to calculate and return the factorial of that number.
// factorial = jo b vlue ho us ko utni dfa multiply;; for example value 5 = 1*2*3*4*5
function factorial(value:number){
    let b:number=1;
    let c:number=1;
    if(value>0){
    while(b<=value){
        c=c*b;
        b=b+1;
    }
}
console.log(c);
}
factorial(10)

//6 Write a program having an array of numbers if the number is negative it should
// remove the negative number from the array.
var arrys:number[]=[1,-2,3,4,-5,-6,7,9,];
var positiveNum:number[]=[];
var a:number=0;
while(a<arrys.length){
    if (arrys[a] > 0){
        positiveNum.push(arrys[a])}
    a=a+1
}
console.log(positiveNum);

 //7 Create a function that takes an array of numbers as parameter. Use a while loop to
 // calculate and return the sum of all the numbers in the arry
 function sumArry(value:number[]){
    let sum:number=0;
    var a:number=0;
    while(a<value.length){
        sum=sum+(value[a]);
        a=a+1
    }
    console.log(sum);
    }
    sumArry([1,2,3,4,5])
 //8 Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.