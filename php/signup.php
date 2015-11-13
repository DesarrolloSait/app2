<?php
//inicializandon variables
$usuario;
$password;

//iniciando conexion
try{

    $conn = new PDO('mysql:host=localhost;dbname=mibasededatos', $usuario, $password);

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

}catch(PDOException $e){

    echo "ERROR: " . $e->getMessage();

}
?>