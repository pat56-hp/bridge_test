<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function __construct(){}

    public function login(){
        return Inertia::render('Auth/Login', ['title' => 'Connexion']);
    }

    public function store(LoginRequest $request){
        $user = User::where('card_number', $request->card_number)->first();

        //Verification de l'existence de l'utisateur en fonction des infos
        if(!$user || !Hash::check($request->pin, $user->pin)){
            return back()->withErrors(['card_number' => 'Numéro de carte ou code Pin incorrecte']);
        }

        //Connexion de l'utisateur
        auth('web')->login($user);

        return redirect()->intended(route('dashboard', absolute: false));
    }

    public function logout(){
        auth('web')->logout();
        return to_route('login');
    }
}
