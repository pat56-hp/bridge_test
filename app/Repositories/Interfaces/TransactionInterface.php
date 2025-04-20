<?php

namespace App\Repositories\Interfaces;

use App\Models\Transaction;
use App\Models\User;

interface TransactionInterface{
    public function get();
    public function latest();
    public function statistics(): array;
    public function deposit(float $amount): void;
    public function withdraw(float $amount): void;
}