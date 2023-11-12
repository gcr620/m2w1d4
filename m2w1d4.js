/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* su javascript esistono 4 tipi di dati che è possibile utilizzare: ci sono gli string che sono semplicemente caratteri e parole delimitati da ",' oppure `. Possono essere lunghi quanto vogliamo a partire da 0 (che sarebbe praticamente "", senza niente dentro).
Ci sono poi i boolean, dati logici che servono per restituire 2 risultati: vero o falso. Si posso usare per esempio per verificare se una determinata condizione si è avverata.
undefined rapresenta un valore che non esiste, una variabile a cui non è stato assegnato nessun valore come per sempio let x; , finche non gli diamo un valore noi questa x rimarra senza valore e, appunto, non definita.
null invede rappresente un valore vuoto, nullo. Questo valore puù essere assegnato dal programmatore stesso dichiarandolo in una variabile let x=null.*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Un oggetto è un gruppo di variabili che descrivono la stessa entità, praticamente una variabile che contiene più attribbuti. Gli oggetti tornano utili in situazione in qui appunto serve che un seingola variabile ci permetta di ottenere più dati, un sempio può essere uno studente, possiamo creare un oggetto che contiene il suo nome, congnome, indirizzo scolastico e altri dati che saranno tutti collegati a lui. */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

console.log(12+20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x=12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name="gabriele";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(4-x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 ={
    name: "jonh",
} ;
let name2 ={
    name: "Jonh",
};

console.log(name1.name===name2.name);
console.log(name2.name.toLowerCase()===name1.name);
