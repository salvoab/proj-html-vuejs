# Struttura del Progetto Individuale

## Divisione del progetto
Il progetto si divide in 2 parti
1.Layout della pagina
2.Elementi dinamici inseriti tramite Vue.js

### Layout della pagina
Tecnologia css principalmente usata: flexbox.
La pagina viene suddivisa in 3 sezioni principali
1.Header
2.Main
3.Footer

#### Header
Contiene la navbar del sito e un carosello. Le informazioni contenute in questi elementi verranno visualizzate nella pagina tramite Vue.

#### Main
Il main è formato da 8 righe. Ciascuna riga può avere al suo interno un container, un container-small o un container-fluid

#### Footer
Il footer contiene un container-small con 4 colonne. Le informazioni presenti in ciascuna colonna verranno visualizzate nella pagina tramite Vue.


### Vue
Scopo principale del progetto è utilizzare Vue per mostrare il contenuto nell'header e nel footer. 

#### Uso di Vue per l'header
I link nella navbar saranno memorizzati in una proprietà dell'oggetto data di Vue che conterrà un vettore di stringhe. L'header inoltre presenta un carosello, quindi nell'oggetto methods, andranno implementati il metodo 'next' per il click sulla freccia destra e il metodo  'prev' per il click sulla freccia sinistra. I testi presenti nel carosello saranno all'interno di una proprietà dell'oggetto data di Vue contente un vettore di oggetti della forma:
headerCarosel: [
    {
        'headerTitle' : 'Our Team';
        'headerText' : 'lorem lorem lorem'
    },
    {
        'headerTitle' : 'Our Mission';
        'headerText' : 'lorem lorem lorem'
    },
]

#### Uso di Vue per il footer
I link nelle 4 colonne del footer saranno memorizzati in una proprità dell'oggetto data di Vue, che conterrà un vettore bidimensionale. La prima dimensione sarà pari a 4 ovvero il numero di colonne. La seconda dimensione sarà uguale al numero di link da inserire in ciascuna colonna