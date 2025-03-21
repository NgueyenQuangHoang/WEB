let result = "javascript" + 5; 
// Kết quả: "javascript5"
// Giải thích: Toán tử `+` khi sử dụng với chuỗi sẽ thực hiện phép nối chuỗi (concatenation). 
// Chuỗi "javascript" được nối với số 5, và kết quả là "javascript5".

let result = "javascript" - 1; 
// Kết quả: NaN
// Giải thích: Toán tử `-` không hỗ trợ chuỗi, nên JavaScript cố gắng chuyển chuỗi "javascript" thành số. 
// Vì "javascript" không thể chuyển thành số, kết quả là NaN (Not-a-Number).

let result = "3" + 2; 
// Kết quả: "32"
// Giải thích: Toán tử `+` khi gặp chuỗi sẽ thực hiện phép nối chuỗi. 
// Chuỗi "3" được nối với số 2, và kết quả là "32".

let result = "5" - 4; 
// Kết quả: 1
// Giải thích: Toán tử `-` buộc JavaScript chuyển chuỗi "5" thành số 5. 
// Sau đó thực hiện phép trừ 5 - 4, kết quả là 1.

let result = isNaN("123"); 
// Kết quả: false
// Giải thích: Hàm `isNaN` kiểm tra xem giá trị có phải là NaN hay không. 
// Chuỗi "123" có thể chuyển thành số 123, nên kết quả là `false`.

let result = isNaN("hello"); 
// Kết quả: true
// Giải thích: Chuỗi "hello" không thể chuyển thành số, nên `isNaN` trả về `true`.

let result = Number.isNaN("123"); 
// Kết quả: false
// Giải thích: Hàm `Number.isNaN` kiểm tra xem giá trị có phải là NaN hay không, nhưng không thực hiện ép kiểu. 
// Chuỗi "123" không phải là NaN, nên kết quả là `false`.

let result = Number.isNaN(NaN); 
// Kết quả: true
// Giải thích: `Number.isNaN` kiểm tra chính xác giá trị có phải là NaN hay không. 
// Vì giá trị là NaN, nên kết quả là `true`.