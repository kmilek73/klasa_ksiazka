
  class Ksiazka {
    constructor(tytul, autor, przeczytana) {
      this.tytul = tytul;
      this.autor = autor;
      this.przeczytana = przeczytana;
    }
  
    opiszKsiazke() {
      return `Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i została ${this.przeczytana ? "przeczytana" : "nie przeczytana"}`;
    }
  }
  
  const ksiazki = [
    new Ksiazka("Wiedźmin", "Andrzej Sapkowski", true),
    new Ksiazka("Dziady", "Adam Mickiewicz", false),
    new Ksiazka("Pan Tadeusz", "Adam Mickiewicz", true)
  ];
  
  function iloscPrzeczytanych(ksiazki) {
    let ilosc = 0;
    for (const ksiazka of ksiazki) {
      console.log(ksiazka.opiszKsiazke());
      if (ksiazka.przeczytana) {
        ilosc++;
      }
    }
    return ilosc;
  }
  
  console.log('Ilość przeczytanych książek: ', iloscPrzeczytanych(ksiazki));
