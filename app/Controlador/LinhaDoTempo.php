<?php

namespace App\Controlador;

use br\univali\sisnet\mvc\nucleo\Controlador;
use br\univali\sisnet\mvc\nucleo\RespostaJson;
use br\univali\sisnet\mvc\nucleo\RespostaTwig;
use br\univali\sisnet\mvc\nucleo\Redirecionamento;
use br\univali\sisnet\mvc\nucleo\Requisicao;
use \App\Dominio\Localizacao; 


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

        $pontos = Localizacao::select('id','nome','latitude','longitude','tipo')->get();
        // return new RespostaJson($pontos);
        return new RespostaTwig(
            "pontos.html.twig",
            array(
                "titulo" => $this->configuracao->obterParametro('titulo'),
                "pontos" => $pontos
            )
        );
    }

    public function pontosJson()
    {
        if (!isset($_SESSION['usuario']['nome'])) {
            return new Redirecionamento('/auth');
        }

        $pontos = Localizacao::select('id','nome','latitude','longitude','tipo')->get();
        return new RespostaJson($pontos);
    }

    public function visualizar()
    {
        if (!isset($_SESSION['usuario']['nome'])) {
            return new Redirecionamento('/auth');
        }

        $id = $this->requisicao->obterParametro("id", Requisicao::GET);
        return new RespostaJson($id);
    }

    public function excluir()
    {
        if (!isset($_SESSION['usuario']['nome'])) {
            return new Redirecionamento('/auth');
        }
     
        $id = $this->requisicao->obterParametro("id", Requisicao::POST);
        Localizacao::destroy($id);
        return new Redirecionamento('/linhadotempo');
    }

    public function criarPonto()
    {
        if (!isset($_SESSION['usuario']['nome'])) {
            return new Redirecionamento('/auth');
        }


        $form = [];
        $form['nome'] = $this->requisicao->obterParametro("nome", Requisicao::POST);
        $form['longitude'] = $this->requisicao->obterParametro("longitude", Requisicao::POST);
        $form['latitude'] = $this->requisicao->obterParametro("latitude", Requisicao::POST);
        $form['tipo'] = $this->requisicao->obterParametro("tipo", Requisicao::POST);
        $form = Localizacao::insert(
            [
                'nome' => $form['nome'],
                'longitude' => $form['longitude'],
                'latitude' => $form['latitude'],
                'tipo' => $form['tipo']
            ]
        );

        return new Redirecionamento('/linhadotempo');

    }

    public function telaCriacaoPonto()
    {
        if (!isset($_SESSION['usuario']['nome'])) {
            return new Redirecionamento('/auth');
        }
        return new RespostaTwig("cadastroPonto.html.twig",
        array(
            "titulo" => $this->configuracao->obterParametro('titulo')
        ));
    }
}
