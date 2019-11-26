<?php

if($_GET['user'] == 'valido'){
$slider =  [
    [
        "imagen" => "imagen01.jpg",
        "titulo" => "XX",
        "enlace" => [
            "url" => "XXX",
            "titulo" => "XXXX"
        ]
    ],  [
        "imagen" => "imagen02.jpg",
        "titulo" => "XX",
        "enlace" => [
            "url" => "XXX",
            "titulo" => "XXXX"
        ]
    ],  [
        "imagen" => "imagen03.jpg",
        "titulo" => "XX",
        "enlace" => [
            "url" => "XXX",
            "titulo" => "XXXX"
        ]
    ]
];
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');
print_r(json_encode($slider));
}