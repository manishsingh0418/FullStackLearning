//filtering 
// given an input array give me back all the evn values from it

const arr=[1,2,3,4,5,6,7,8,9,10];

function filterlogic(n){
    if(n%2==0){
        return true; // keep this value
    }
    else {
        return false;
    }
}

const ans =arr.filter(filterlogic);
console.log(ans);