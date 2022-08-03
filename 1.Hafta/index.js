// palindrome olup olmadığını kontrol ediyoruz
function Palindrome(prop) {    
    var pal = parseInt(prop.toString().split('').reverse().join(''));

    if (pal == prop)
        return true;
    else
        return false;
}
// 3 basamaklı 2 sayının çarpımından elde edilen en büyük palindrome sayısını bulan fonksiyon.
let max=0;
function LargestPalindrome() {
    for (let x = 999; x >= 100; x--) {
        for (let y=999; y >= 100; y--) {
            let maxNumber = x * y;            
            if (Palindrome(maxNumber)) {                
                if( max < maxNumber ) { 
                    max = maxNumber;          
                    }
              }
            }
        }
        return max;
    }
console.log(LargestPalindrome());