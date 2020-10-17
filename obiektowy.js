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
    }
}

console.log(osoba.imie);
osoba.info();