<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'User Test 1',
            'card_number' => '1234567890123456',
            'pin' => Hash::make(1234),
            'balance' => 500.0
        ]);

        User::create([
            'name' => 'User Test 2',
            'card_number' => '9876543210987654',
            'pin' => Hash::make(5678),
            'balance' => 1000.0
        ]);
    }
}
