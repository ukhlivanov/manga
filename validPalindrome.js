

var validPalindrome = function(s, left = 0, right = s.length - 1, err = 0) {
    if(err > 1) return false;
    if(left === right) return true;
    while(left <= right){
        if(s[left] !== s[right]){
            return  validPalindrome(s, left, right - 1, err + 1) || 
                    validPalindrome(s, left + 1, right, err + 1)
        }
        left += 1
        right -= 1
    }   
    return true;
};






