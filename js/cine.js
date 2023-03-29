let total = 0
let sala = "";
let dia = "";
let empieza;



do {
    empieza = prompt("Bienvenidos sean todos, ¿te gustaria reservar una entreda en el mejor cine? \n Queres reservar ahora? ingresa: si").toLowerCase();

} while (empieza != "si");

reservarPelicula();



function reservarPelicula() {




    alert(
        "¿ETAS PREPARADO PARA DISFRUTAR UNA EXPERIENCIA INOLVIDABLE?!\n Selecciona el sala y pelicula\n 1- 4d - $1500 \n 2- 3d - $1000 \n 3- 2d - $700  "
    );

    let sala = prompt("Elegí tu sala y eplicula: 4D, 3D o 2D?").toLowerCase();


    switch (sala) {
        case ("1"):
            sala = "4d"
        case ("4d"):
            alert("¿Estas preparado para un nuevo mundo?");
            total += 1500
            alert("El total sería: $ " + total + "!");
            reservarDia();
            alert("Listo, reservaste para el: " + dia + " para la sala: " + sala);
            alert("Consegui esos $ " + total + " y explora un nuevo mundo lleno de msiterios");
            break;

        case ("2"):
            sala = "3d"
        case ("3d"):
            alert("Sumergite en la historia de esta gran leyenda gatuna ");
            total += 1000;
            alert("El Total sería: $  " + total + "!");
            reservarDia();
            alert("Listo, reservaste para el: " + dia + " para la sala: " + sala);
            alert("Consegui esos $ " + total + " y disfruta junto a nuestro heroe en esta gran aventura");
            break;

        case ("3"):
            sala = "2d"
        case ("2d"):
            alert("Un clasico de clasicos, buena eleccion ;)");
            total += 700;
            alert("El Total sería: " + total + "!");
            reservarDia()
            alert("Listo, reservaste para el: " + dia + " para la sala: " + sala);
            alert("Consegui esos $ " + total + " y disfruta de esta hermosa historia de amor");
            break;

        default:
            alert("No contamos con esa sala, ingrese nuevamente su eleccion");
            reservarSala();
    }

}



function reservarDia() {

    alert("Ya elegiste la sala y lo mas importante LA PELICULA, ahora veamos ¿que dia queres venir? \n Viernes o Sabado? ");
    dia = prompt("Ingresa el dia de la reserva").toLowerCase();

    switch (dia) {
        case ("Vie"):
            dia = " Viernes"
        case ("viernes"):

            alert("Perfecto te esperamos el viernes");
            break;

        case ("sab"):
            dia = "Sabado"
        case ("sabado"):
            alert("Perfecto te esperamos el sabado");
            break;

        default:
            alert("Lamentablemente solo abrimos dos dias por ahora, elija entre Viernes y Sabado")
            reservarDia();
    }

}