# Proje 1
[22,27,16,2,18,6] -> Insertion Sort

Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

Big-O gösterimini yazınız.

Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız

## Insertion Sort
1. En küçük değer: 2 index: 3
2. Arrayin ilk indexindeki (0. index) değer ile yer değiştirir.
 [2,27,16,22,18,6]
3. İkinci en küçük değer bulunur ve 1. index ile yer değiştirilir.
 [2,6,16,22,18,27]
4. Üçüncü en küçük değer bulunur ve 2. index ile yer değiştirilir. Üçüncü sıradaki eleman en küçükse olduğu için değiştirilemez.
 [2,6,16,22,18,27]
5. Diğer en küçük değer bulunur ve aynı işlem yapılır.
 [2,6,16,18,22,27] -> Arrayin son hali bu şekildedir.

## Big-O-Notation: O(n^2)
n + (n-1) + (n-2) + ... + 1 = n (n+1) / 2 

Big-O-Notation'da katsayılar önemli değildir.Eğer baskın bir terim varsa kullanılır.

(n^2 + n) / 2 ifadesi Big-O-Notation'da O(n^2) olarak gösterilir.

## Time Complexity

### Average Case
Aradığımız sayının ortada olması
### Worst Case
Aradığımız sayının sonda olması
### Best Case
Aradığımız sayının dizinin en başında olması.

18 sayısı dizinin ortasında olduğu için Average Case kapsamına girmektedir.


#### [7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.

[2,3,5,8,7,9,4,15,6]

[2,3,5,8,7,9,4,15,6]

[2,3,5,8,7,9,4,15,6]

[2,3,5,8,7,9,4,15,6]

[2,3,4,5,6,9,8,15,7]