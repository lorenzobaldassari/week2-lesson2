/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let num1, num2;
num1 = 6;
num2 = 4;
if (num1 > num2) {
  console.log("il maggiore e`", num1);
} else {
  console.log("il maggiore e`".num2);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
const num3 = 4;
if (num3 !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
const num4 = 70;
let remainder = num4 % 5;
if (remainder === 0) {
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const num5 = 12;
const num6 = 4;
if (
  num5 === 8 ||
  num6 === 8 ||
  num5 + num6 === 8 ||
  num5 - num6 === 8 ||
  num6 - num5 === 8
) {
  console.log("ok!");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart, totalAmount;
totalShoppingCart = undefined;
if (totalShoppingCart > 50) {
  totalAmount = totalShoppingCart;
} else {
  totalAmount = totalShoppingCart + 10;
}
console.log(totalAmount);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
totalShoppingCart *= 0.8;
if (totalShoppingCart > 50) {
  totalAmount = totalShoppingCart;
} else {
  totalAmount = totalShoppingCart + 10;
}
console.log(totalAmount);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let A, B, C;
A = 9;
B = 5;
C = 4;

if (A > B && A > C && B > C) {
  console.log(A, B, C);
} else if (A > B && A > C && B < C) {
  console.log(A, C, B);
} else if (B > A && B > C && A > C) {
  console.log(B, A, C);
} else if (B > A && B > C && A < C) {
  console.log(B, C, A);
} else if (C > A && C > B && A > B) {
  console.log(C, A, B);
} else {
  console.log(C, B, A);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let value1 = 4;
console.log(typeof value1);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const num7 = 17;
let rest1 = num7 % 2;
if (rest1 === 0) {
  console.log("il numero", num7, "e`pari");
} else {
  console.log("il numero", num7, "e` dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const array1 = [];
let N = 1;
while (N < 11) {
  array1.push(N), (N = N + 1);
}
console.log(array1);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array1.pop();
array1.push(100);
console.log(array1);
