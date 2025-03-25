let arr = [5,3,6,8,5,6,4,2,3,8,9,6,7,];

for (let i = 0; i < arr.length; i++) {
    let countNumber = 1;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            countNumber++;
        }
    }
    console.log(`The number ${arr[i]} appears ${countNumber} times`);
}