# Bioinformatyka
 
 
## Wykonane przez:
```
Denys Hromniuk 141232
 
Pavlo Ravliv 135412
```
## Wybrany problem:
```
Problem SBH z informacją o położeniu oraz wszystkimi rodzajami błędów.
```
 
 
## Algorytm zachłanny
 
Dostajemy odczytywane DNA,
 
 dzielmy na oligonukleotydy o zadanej długości  -> szuflujemy je
 
 
Działanie algorytmu zachłannego
skoro wiemy, który oligonukleotyd jest początkowy to od niego zaczynamy
```typescript
function greedy(firstOligonucletotide , allOligonucleotides[],resultLenght): result
 dodajemy do result nasz firstOligonucleotide
 currentOligoNucleotide = firstNucleotide
 while currentOligoNuclotide oraz len(result) <= resultLength  ma sasiedztwo
   wybierz luk o najwyzszej wadze i dodaj do result
   currentOligoNucleotide = nextOligoNucleotide
```
 
## Algorytm Heurystyczny:
 
> Jako warunek stopu wybralismy jesli wynnik sie nie poliepsza przez N iteracji
 
 
0. W zerowym kroku generujemy początkowe rozwiązanie za pomocą algrotymu zachlannego
While not warunek stop
1. Dla wszystkich osobników z populacji krzyżujemy jeden osobnik z pozostałymi.
> Krzyzowanie(solution1,solution2) :
 
Polega na:
> L -> [A |B C D ] <- P
>
> L -> [C |B D A ] <- P
>
> Dzielimy solution1 i solution2 na dwie czesci i zostawiamy czesc L z solution1  oraz czesc P z solution2 i dostajemy potomka1 (solution1(L),solution2(P)) oraz drugi pomtek2(solution1(P),solution2(L))
>
2. W dwóch wybranych potomkach pewnego losowego rozwiązania robimy mutacje polegające na losowej wymianie dwóch oligonukleotydow
3. Po krosowaniu zostawiamy populacje w dopuszczalnych granicach i osobniki z niskimi wartościami są zastępowane przez potomków osobników z wysokimi wartosciami
4. Powtarzamy proces generowania nowych osobników i mutacji potomków do tej pory aż warunek stopu nie zostanie spelniony