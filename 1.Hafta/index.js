// palindrome olup olmadığını kontrol ediyoruz
function Palindrome(prop) {    
    // LargestPalindrome fonksiyonundan gelen props'u stringe çevirip reserve edip
    // pal adında değişkene atadık
    var palindrome = parseInt(prop.toString().split('').reverse().join(''));

    if (palindrome == prop)  // Palindrome fonksiyonuna gönderilen prop ve bu prop'un tersten yazılmış hali
                                // birbirine eşitse bu sayı palindrome'dur deyip true döndürüyoruz.
        return true;
    else
        return false;  // değilse false döndürüyoruz
}
// 3 basamaklı 2 sayının çarpımından elde edilen en büyük palindrome sayısını bulan fonksiyon.
let max=0;
function LargestPalindrome() {
    for (let x = 999; x >= 100; x--) {  // for döngüsüyle 3 basamaklı sayıların çarpımını yapıyoruz
        for (let y=999; y >= 100; y--) {
            let maxNumber = x * y;    // 3 basamaklı sayıların çarpımını değişkene atıyoruz        
            if (Palindrome(maxNumber)) {     // sonucun palindrome olup olmadığını kontrol ediyoruz         
                if( max < maxNumber ) { // sonuç bir önceki max değerden büyükse max değeri güncelliyoruz
                    max = maxNumber;          
                    }
              }
            }
        }
        return max;  // döngü bittikten sonra bulunan max değeri return ediyoruz
    }
console.log(LargestPalindrome());  //LargestPalindrome fonksiyonunu çağırıp konsola yazdırıyoruz.