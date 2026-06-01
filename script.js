function mostrarTarjeta(texto)
{
    document.getElementById("textoTarjeta").innerText = texto;

    document.getElementById("tarjeta").style.display = "block";
}

function cerrarTarjeta()
{
    document.getElementById("tarjeta").style.display = "none";
}

function mensaje1()
{
    mostrarTarjeta("Gracias por estar siempre conmigo ❤️");
}

function mensaje2()
{
    mostrarTarjeta("Gracias por apoyarme en mis estudios ❤️");
}

function mensaje3()
{
    mostrarTarjeta("Te quiero mucho mamá ❤️");
}

function cartaMama()
{
    mostrarTarjeta(
        "Querida mamá:\n\n" +
        "Gracias por cada consejo, cada esfuerzo y cada momento que has compartido conmigo.\n\n" +
        "Este pequeño jardín digital lo hice mientras aprendía programación.\n\n" +
        "Te quiero mucho ❤️\n\n" +
        "- Alexander"
    );
}