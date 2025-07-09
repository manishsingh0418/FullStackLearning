//map function

// given an array , give me back a new array in which every value is multiplied by 2

//[1,2,3,4,5]
//[2,4,6,8,10]

// solution 1

// const input =[1,2,3,4,5]
// const newArray =[]
// for(let i=0; i<input.length;i++){
//     newArray.push(input[i]*2);
// }

// console.log(newArray);


// solution 2

const input =[1,2,3,4,5];
function transform(i){
    return i * 2;
}

const ans =input.map(transform);
console.log(ans);
