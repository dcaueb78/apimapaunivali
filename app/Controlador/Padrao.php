<?php

namespace App\Controlador;

use br\univali\sisnet\mvc\nucleo\Controlador;
use br\univali\sisnet\mvc\nucleo\RespostaTwig;
use br\univali\sisnet\mvc\nucleo\RespostaMustache;
use br\univali\sisnet\mvc\nucleo\Resposta;
use br\univali\sisnet\mvc\nucleo\Requisicao;
use br\univali\sisnet\mvc\nucleo\Redirecionamento;

class Padrao extends Controlador
{

    public function index()
    {

        // $user = \App\Dominio\Usuario::Create(
        //     [
        //         'login' => "zezinho",
        //         'email' => "teste@teste.com",
        //         'nome' => "ze da silva",
        //         'senha' => password_hash("123321", PASSWORD_BCRYPT)
        //     ]
        // );

        if (isset($_SESSION['usuario']['nome'])) {
            return new Redirecionamento("/linhadotempo");
        }

        if (isset($user)) {
            
        }

        return new RespostaTwig(
            "login.html.twig",
            array(
                'titulo' => $this->configuracao->obterParametro('titulo'))
        );
    }

    public function cadastrar()
    {
        $entidade['nome'] = $this->requisicao->obterParametro("nome", Requisicao::POST);
        $entidade['sobrenome'] = $this->requisicao->obterParametro("sobrenome", Requisicao::POST);
        $entidade['email'] = $this->requisicao->obterParametro("email", Requisicao::POST, FILTER_VALIDATE_EMAIL);
        return new RespostaTwig("detalhe.html.twig", array('registro' => $entidade));
    }
}
