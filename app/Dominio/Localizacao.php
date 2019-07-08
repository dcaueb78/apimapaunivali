<?php

namespace App\Dominio;

use Illuminate\Database\Eloquent\Model as Eloquent;

class Localizacao extends Eloquent
{

    public $timestamps = false;

    protected $fillable = [
        'nome',
        'latitude',
        'longitude',
        'tipo'
    ];
    

}
