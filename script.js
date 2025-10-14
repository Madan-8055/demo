//map
function double(num){
    return num*2;
}
let arr=[2,3,4,5,6]
let doubledArray = arr.map(double);
console.log(doubledArray)


//map
const tripledArr = arr.map(n=>n*2);
console.log(tripledArr)


//map
function odd(num){
    if( num %2===0){
        console.log("False");
    }
    else {
        console.log("True");
    }
}
let num =[2,3,5,6,9];
let result = num.map(odd);


//filter
function isodd(num){
    return num%2!==0;
}
let oddNumber = arr.filter(isodd);
console.log(oddNumber);


//filter
let arr1=[5,10,56,43,40,20];
let multiple = arr1.filter(n=>(n%5===0));
console.log(multiple);


//reduce
let array1=[1,2,3,4,5,6];
let sum=array1.reduce((product,current)=>{
    return product*current
},1);
console.log(sum);


//reduce
let arr2=[1,3,5,7,6,4,2,8,10];
let even=arr2.filter(n=>n%2===0);
let sum1=even.reduce((sum,current)=>{
    return sum+current
},1)
console.log(sum1);



let b =[1,2,3,4,5];
const [one, two]=b;
console.log(two);


//fetch
//fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response=>{
//return response.json();
    
// })
// .then(cur=>{
//    console.log(cur);
// })


//asyn await
 async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    
        const data = await response.json();

        const filtered = data.filter(post => post.userId === 1);

        console.log(filtered);

    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}

fetchPosts();



//string
let name = "viswa";
let age = "23"
console.log(`My name is ${name} and age is ${age}`);


//micro and macro tasks
console.log("first");
Promise.resolve().then(console.log("from promises"));
setTimeout(()=>{
    console.log("inside timeout");
},2000);
console.log("last");
