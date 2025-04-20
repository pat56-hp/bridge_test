<?php

namespace App\Repositories;

use App\Models\Transaction;
use App\Repositories\Interfaces\TransactionInterface;

class TransactionRepository implements TransactionInterface{

    public function get(){
        return  auth('web')->user()->transactions()->latest()->get();
    }

    public function latest(){
        return  auth('web')->user()->transactions()->latest()->take(10)->get(); 
    }

    public function statistics(): array{
        return [
            'total_deposit' => auth('web')->user()->transactions()->where('type', 'deposit')->count(),
            'amount_deposit' => auth('web')->user()->transactions()->where('type', 'deposit')->sum('amount'),
            'total_withdraw' => auth('web')->user()->transactions()->where('type', 'withdrawal')->count(),
            'amount_withdraw' => auth('web')->user()->transactions()->where('type', 'withdrawal')->sum('amount'),
        ];
    }

    public function deposit(float $amount): void{

        //Creation de la transaction
        auth('web')->user()->transactions()->create([
            'type' => 'deposit',
            'amount' => $amount
        ]);

        //Mise à jour de la balance
        auth('web')->user()->update([
            'balance' =>  auth('web')->user()->balance + $amount
        ]);
    }

    public function withdraw(float $amount): void{
        //Creation de la transaction
        auth('web')->user()->transactions()->create([
            'type' => 'withdrawal',
            'amount' => $amount
        ]);

        //Mise à jour de la balance
        auth('web')->user()->update([
            'balance' =>  auth('web')->user()->balance - $amount
        ]);
    }
}