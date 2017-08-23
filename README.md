# QAHasPowerJS
1. Otwórz terminal
2. Sprawdź czy masz zainstalowany npm komendą
```
$ npm -v
```
3. Jeżeli nie posiadasz npm zainstaluj go poprzez:
```
$ sudo apt install npm
```
4. Sprawdź czy masz zainstalowany node.js:
```
$ nodejs -v
```
5. Jeżeli nie posiadasz noed.js:
```
$ sudo apt-get update
$ sudo apt install nodejs-legacy
```
6. Zainstaluj gita jeżeli go nie posiadasz:
```
$ sudo apt install git
```
7. Jeśli nie posiadasz przeglądarki google chrome, zainstaluj ją: https://www.howopensource.com/2011/10/install-google-chrome-in-ubuntu-11-10-11-04-10-10-10-04/
8. Stwórz katalog Qahaspower:
```
$ mkdir Qahaspower
```
9. Przejdź do katalogu Qahaspower
```
cd Qahaspower
```
10. Sklonuj repozytorium z testami:
```
$ git clone https://github.com/paulinadziuba/QAHasPowerJS.git
```
11. Zainstaluj globalnie nightwatch.js:
```
$ sudo npm install -g nightwatch
```
12. przejdź do katalogu QAHasPowerJS:
```
$ cd QAHasPowerJS
```
13. zainstaluj wszystkie paczki npm:
```
$ npm install
```
14. Sprawdź czy wszystko działa poprawnie:
```
$ npm test
```
Powinien odpalić się pojedynczy test 
