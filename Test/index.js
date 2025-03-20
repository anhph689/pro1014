
/**
 * bài 7
 */
/**
 * 
 * 
 */

var arr = 'tran van sang';


console.log(arr.indexOf('van'));

console.log(arr.replace(/sang/g, 'Sang rất đẹp trai'));


function index(message,message2){

    if (message) {
        console.log(message);
    }
    if (message2) {
        console.log(message2);
    }

}

index(1,2);


function User(firstname, lastname, address) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.address = address;
    this.getname = function() {
        return  `${lastname} ${firstname}`;
    }
}

var author = new User('Sang', 'tran', 'thai nguyen');
author.title = "hoc tai f8";
console.log(author);

console.log(author.getname());

//thêm thuộc tính áp dụng object prototype

User.prototype.class = "f8";


// Bài tập 1: Hàm callback - Chuyển đổi mảng số thành mảng chuỗi
function convertNumbersToStrings(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

// Callback function: chuyển đổi số thành chuỗi
function numberToString(num) {
    return num.toString();
}

let numbers = [1, 2, 3, 4, 5];
let result = convertNumbersToStrings(numbers, numberToString);
console.log(result);  // ['1', '2', '3', '4', '5']
