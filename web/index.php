<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');

session_start();

require_once('./../vendor/autoload.php');
require_once('./../app/config.php');

$configuracao = br\univali\sisnet\mvc\nucleo\Configuracao::getInstance();

/**
 * Eloquent configuration
 */

try {
    $db = $configuracao->obterParametro('database');
} catch (\Exception $ex) {
    $db = $configuracao->obterParametro('db');
}

use Illuminate\Database\Capsule\Manager as Capsule;

//https://medium.com/@kshitij206/use-eloquent-without-laravel-7e1c73d79977
$capsule = new Capsule();
$capsule->addConnection([
    "driver" => $db['driver'],
    "host" => $db['host'],
    "port" => $db['port'],
    "database" => $db['database'],
    "username" => $db['username'],
    "password" => $db['password']
]);
$capsule->setAsGlobal();
$capsule->bootEloquent();
$capsule->bootEloquent();

$template = $configuracao->obterParametro('template');

$template['visao'] = $template['visao'] ?? '../app/visao/';

//twig configuration
br\univali\sisnet\mvc\nucleo\RespostaTwig::$motorTwig = new Twig_Environment(
    new Twig_Loader_Filesystem($template['visao']),
    [
        'cache' => $template['cache'],
        'debug' => $configuracao->obterParametro('debug')
    ]
);

//mustache configuration
\br\univali\sisnet\mvc\nucleo\RespostaMustache::$motorMustache = new Mustache_Engine(array(
    'cache' => $template['cache'],
    'loader' => new Mustache_Loader_FilesystemLoader($template['visao']),
));

try {
    $fachada = new \br\univali\sisnet\mvc\nucleo\ControladorDeFachada();
    $resposta = $fachada->processaRequisicao();
} catch (Exception $ex) {
    echo $ex->getMessage();
}