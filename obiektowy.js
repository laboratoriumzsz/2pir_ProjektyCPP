let osoba = {
    imie: "Janek",
    nazwisko: "Kowalski",
    wiek: 12,
    info: function(){
        console.log('Cześć!!! mam na imię: '
                    +this.imie+'\nnazywam się: '
                    +this.nazwisko+'\ni jestem ');
        if(this.wiek>=18) console.log('pełnoletni.\n');
        else console.log('niepełnoletni\n');
    },

    zmienNazwisko: function(n) {
        this.nazwisko=n;
    }
}
/*************************************************** */
console.log(osoba.imie);
osoba.zmienNazwisko("Nowak");
osoba.info();
osoba.zawod='kowal';
console.log(osoba.zawod);