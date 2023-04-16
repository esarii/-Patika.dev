# Proje 2
[16,21,11,8,12,22] -> Merge Sort

Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
Big-O gösterimini yazınız.

## Merge Sort

Bir listeyi her adımda ikili gruplara ayırıp, tek eleman kalıncaya kadar böler. İkili gruplardan ayrılan elemanları kendi içinde sıralı bir şekilde getirir.


[16,21,11,8,12,22]

[16,21,11] - [8,12,22]

[16] - [21,11] -- [8,12] - [22]

[16] - [21] - [11] -- [8] - [12] - [22]

[16] - [11,21] -- [8,12] - [22]

[11,16,21] -- [8,12,22]

[8,11,12,16,21,22]

## Big-O-Notation: O(nlogn)

2^x = n -> O(nlogn)