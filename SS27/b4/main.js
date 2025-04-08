function splitArrayIntoChunks(array, n) {
    if (n <= 0) {
        throw new Error("Kích thước mảng con phải lớn hơn 0.");
    }

    const result = [];
    for (let i = 0; i < array.length; i += n) {
        result.push(array.slice(i, i + n));
    }
    return result;
}

// Ví dụ sử dụng
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkSize = 3;
const chunks = splitArrayIntoChunks(array, chunkSize);
console.log(chunks);
