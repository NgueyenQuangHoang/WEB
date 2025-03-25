let arr = [5,3,6,8,5,6,4,2,3,8,9,6,7,];


let maxDuplicate = 0;
let maxDuplicateNumber = 0;

for (let i = 0; i < arr.length; i++) {
    let countNumber = 1;
    for (let j = 0; j < arr.length; j++) {
        if (i !== j && arr[i] == arr[j]) {
            countNumber++;
        }
    }
    if (countNumber > maxDuplicate) {
        maxDuplicate = countNumber;
        maxDuplicateNumber = arr[i];
    }
}
console.log(`The number ${maxDuplicateNumber} appears ${maxDuplicate} times`);