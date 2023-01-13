<?php

// Conectando, seleccionando la base de datos

$link = mysql_connect('localhost', 'root', '')

    or die('No se pudo conectar: ' . mysql_error());


mysql_select_db('glosario') or die('No se pudo seleccionar la base de datos');



// Realizar una consulta MySQL
$query = 'SELECT Rabia, Sorpresa, Amor, Alegria, Miedo, Tristeza, Aversion, Codvi-19 FROM palabras';

$result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());

?>