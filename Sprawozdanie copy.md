# Bionformatyka


## Wykonane przez:
```
Denys Hromniuk 141232

Pavlo Ravliv 135412
```
## Wybrany problem:
```
Problem SBH z informacją o położeniu oraz wszystkimi rodzajami błędów.
```


## Algorytm zachlanny

Dostajemy odczytywane DNA , dzilemy na oligonukleotydy o zadanej dlugosci  -> szuflujemy je


Dzialanie algorytmu zachlannego
Skoro wiemy ktory oligonukleotyd jest poczatkowy to od niego zaczynamy
```typescript
function greedy(firstOligonucletotide , allOligonucleotides[],resultLenght): result
  dodajemy do result nasz firstOligonucleotide
  currentOligoNucleotide = firstNucleotide
  while currentOligoNuclotide oraz len(result) <= resultLength  ma sasiedztwo
    wybierz luk o najwyzszej wadze i dodaj do result
    currentOligoNucleotide = nextOligoNucleotide
```

## Algorytm Heurystyczny:

> Aspiration criteria - kryterium ktore jest evaluowane jako `True` w przypadku jesli pod czas danej iteracji dostajemy liepsze rozwiazanie od najlipeszego wczesniejszego i znajduje sie na liscie Tabu

> Jako warunek stopu wybralismy liczbe iteracij

> Tabu tenure - rozmiar listy tabu 

0. W zerowym kroku generujemy poczatkowe rozwiazanie za pomoca algrotymu zachlannego

1. Generujemy otoczenie $S$ . Otoczenie $S$ jest generowane za pomoca funkcji :
 ```kotlin 
 fun generateNegihbourhood(solution) : neighbourhood[]{
   1. Wybieramy losowy oligonukleotyd
   2. Szkumay oligonukleotyd ktory ma najnmniesz nalozenie z sasiadem z lewej strony i z sasiadem z prawj strony.
   3. Zamieniamy oligonukleotyd z kroku `1` z oligonukleotydem z kroku `2` lub wymieniamy oligonukleotyd z kroku `2` lub losujemy inny oligonukleotyd jesli sie nie da je zamienic miejscami
 }
  ```


pseudokod

```kotlin
  solution <- S - ktore dostalismy z algorytmu zachlannego
  sNieghbor <- generateNeighbourHood

```

2. Z posrod otoczenise wybieramy rozwiazanie dopuszczalne  i sprawdzamy czy jest liepsze od wczesniej otrzymanego rozwiazania
czyli sprawdzamy if(tabu && !aspirationCriteria) to odrzucamy to rozwiazanie odrazu 
if(tabu && aspirationCriteria) to robimy wyjatek jesli nowe wygenerowane rozwiazanie jest liepsze od wczesniej otrzymanego rozwiazania
3. Sprawdzamy czy warunek stopu jest evaluovany jako `True` jesli jest `True` to konczymy obliczanie w przeciwnym przypadku przechodzimy do kroku `4`
4.  Aktualizujemy nasza liste tabu(tabu tenure) i przechodzimy do kroku `1`