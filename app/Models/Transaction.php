<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Transaction extends Model
{
    use SoftDeletes;

    protected $fillable = ['client_id', 'type', 'amount'];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
