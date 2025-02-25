//Array in javascript

let number = []; //empty array
let num = [1,2,3,4,]//array with numric value
let arr = ['mannu','sonu']//araay with string value

//accessing array element
console.log(arr[0]);
console.log(num[3]);

// you can use array like object and nested object and use object in array
let array = [
    firstname = 'mannu',
    lastname = 'yadav',
    address = {
        home:'mahur'
    },
    city ={
       ara: 'ara city'
    },
    name = [
        country = 'india'
    ]
    
]
//add mor element in array
let arr1 =[1,3,4,6,7,];
 arr1.push(8);

//remove the last element in array
let arr2 = [1,2,7,8,4,5,'yadav'];
 arr2.pop();

// remove the first element in array
let arr3 =[1,4,5,6,7,8,];
 arr3.shift();


//add one more element in beging of array
let arr4 = [1,3,4,5,6,7];
 arr4.unshift(0);

//add two array without modifiying
let arr5 = [1,2,3,4,5,6,7,];
let arr6 = [5,6,3,2,5,6,8];
let result = arr5.concat(arr6);

//indexof retuen of path 
let arry = [1, 2, 3];
let index = arry.indexOf(2);  // 1 (index of the first occurrence of 2)

//check is specified element present in array
let animal = ['cat','dog','elephent','tiger'];
let presentcat = animal.includes('cat');

// reversr of array element
let student = [0,1,2,3,4,5,6,7,8,9,];
let arrayreverse = student.reverse();

// sorting of array
let numricvalue = [8,7,3,6,7,9,4,5,];
let sort = numricvalue.sort();

//pick a silce of array without modefiying array
let arr7 = [1,6,4,37,,8,88];
let slice = arr7.slice(1,3);

//splice who modefied array
let splice = arr7.splice(1,3);