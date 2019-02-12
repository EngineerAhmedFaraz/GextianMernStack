// Binary_Searching with user input.
let data = [1,3,5,8,12,35,2,3,78,1,90,5,8];
let num = prompt("Enter the Number for Binary_Searching");

function binary_search(arr , num){
    for(let i =0; i<data.length; i++){
        if(arr[i] == num){
            return i;
        }
    }
    return -1;
}
console.log(binary_search(data,num));

// Linear_Searching with user input .
var arr = [];
arr.push(1,2,3,4,5,6,7,8,9,10,12,56,78);
let value = prompt("Enter the Number for Linear_Searching");

function linear_search(arr , value){
    for(let i =0; i<arr.length; i++){
        if(arr[i] == value){
            return i;
        }
    }
    return -1;
}
console.log(linear_search(arr,value));



