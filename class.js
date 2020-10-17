class telefon {
    producent = "Samsung";
    model = "A20";
    kolor = "czarny";
    usbC = false;

    info = function(){
        console.log('Jestem telefonem. Mój producent to '+this.producent+' model: '+this.model+' kolor: '+this.kolor);
    }
}
/************************************************ */
let mojTelefon = new telefon();
mojTelefon.info();
