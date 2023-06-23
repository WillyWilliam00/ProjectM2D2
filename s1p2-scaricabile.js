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

/* SCRIVI QUI LA TUA RISPOSTA 

innanzitutto spieghiamo cosa cono i datatype:

Le variabili nel coding possono essere diverse da loro e tutte appartegono a diverse "categorie" in base appunto alla loro forma

string = è una variabile "stringa", più semplicemente si tratta di una variabile che può contenere lettere e/o numeri, viene inserita tra " "
ad esempio: "William" è una variabile stringa
number = è una variabile "numero", si tratta semplicemente di un numero (che può essere intero o con la virgola),in questo caso la variabile NON è tra " ", altrimenti diventa una stringa!
Boolean: è una variabile che può essere vera o falsa
Null: è una variabile vuota (come se fosse un contenitore vuoto)
undefined: è una variabile con valore non definito (come se prendessi un contenitore bendato, non conosci il contenuto)

*/



/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

Quando dobbiamo raccogliere molte informazioni per elaborare un progetto complesso (come ad esempio l'anagrafica di qualcuno) possiamo utilizzare lo structural type Object,

creiamo una variabile con il nome del progetto e diamo delle coppie chiave-valore con tutte le informazioni che ci servono per quel determinato progetto.
(chiave->nome di una info specifica valore-> appunto il valore di quella info)

let MeStesso = {
    name:"William",
    surname:"Costa",
    hobby:"Coding",
}
*/


/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 12
let num2 = 20

let somma = num1+num2


console.log("Es3",somma)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12

console.log("Es4",x)

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let nome = "William"

console.log("Es5",nome)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let y = 4 - x 
let z = x - 4

console.log("Es6",y,z)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john"

let name2 = "John"

console.log("Es7",name1!==name2)

name2 = name2.toLocaleLowerCase()

console.log("Es7",name1!==name2)
