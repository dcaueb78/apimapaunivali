<?php

namespace App\Controlador;

use br\univali\sisnet\mvc\nucleo\Controlador;
use br\univali\sisnet\mvc\nucleo\RespostaJson;
use br\univali\sisnet\mvc\nucleo\RespostaTwig;
use br\univali\sisnet\mvc\nucleo\Redirecionamento;


class LinhaDoTempo extends Controlador
{



    public function listarClientes()
    {
        if ($this->requisicao->obterParametro("nome") == 'maria') {
            return new Redirecionamento("http://www.univali.br");
        }
        $clientes[] = "joao";
        $clientes[] = "maria";
        $clientes[] = "jose";
        $clientes[] = "huguinho";
        $clientes[] = "zezinho";
        $clientes[] = "luiziho";
        //return new RespostaTwig("clientes.html.twig",array("clientes"=>$clientes));
        return new RespostaJson($clientes);
    }

    public function mostrarPontos()
    {
        if (!isset($_SESSION['usuario']['nome'])) {
            return new Redirecionamento('/auth');
        }

        $pontos = \App\Dominio\Localizacao::select('nome','latitude','longitude','tipo')->get();
        return new RespostaJson($pontos);
        // return new RespostaTwig(
        //     "pontos.html.twig",
        //     array(
        //         "titulo" => $this->configuracao->obterParametro('titulo'),
        //         "pontos" => $pontos
        //     )
        // );
    }
}
