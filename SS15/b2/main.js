function classifyStudent(math, literature, english) {
    const average = (math + literature + english) / 3;
    let classification;

    if (average >= 8.0) {
        classification = 'Giỏi';
    } else if (average >= 6.5) {
        classification = 'Khá';
    } else if (average >= 5.0) {
        classification = 'Trung bình';
    } else {
        classification = 'Yếu';
    }

    return {
        average: average.toFixed(2),
        classification: classification
    };
}

// Example usage:
let math = parseFloat(prompt("nhap diem mon toan"));
let literature = parseFloat(prompt("nhap diem mon van"));
let english = parseFloat(prompt("nhap diem mon tieng anh"));

const result = classifyStudent(math, literature, english);
console.log(`Điểm trung bình: ${result.average}`);
console.log(`Xếp loại học lực: ${result.classification}`);