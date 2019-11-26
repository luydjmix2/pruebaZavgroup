<?php
$slider =  [

    "titulo" => "XX",
    "contenido" => [
        "item" => "XXX"
    ]

];
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');
print_r(json_encode($slider));
