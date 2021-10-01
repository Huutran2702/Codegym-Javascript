let str = prompt('Nhập chuỗi cần kiểm tra');
function isPalindrome(string) {
    let size = string.length;
    let mid = size/2;
    for (let i = 0; i < mid; i++) {
        if (string[i] !== string[size-1-i]) {
            return false;
        }
        
        
    }
    return true;
}
if (isPalindrome(str) == true) {
    alert(`${str} là chuỗi đối xứng`);
} else {
    alert(`${str} không phải là chuỗi đối xứng`);
}
