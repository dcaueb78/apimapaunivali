<?php

namespace App\Dominio;

use Illuminate\Database\Eloquent\Model as Eloquent;

class Usuario extends Eloquent
{

    public $timestamps = false;

    protected $fillable = [
        'email',
        'login',
        'nome',
        'senha'
    ];

}
