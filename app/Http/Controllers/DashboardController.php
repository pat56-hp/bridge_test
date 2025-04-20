<?php

namespace App\Http\Controllers;

use App\Repositories\Interfaces\TransactionInterface;
use Error;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __construct(private TransactionInterface $transactionRepository){}

    /**
     * Return to Dashboard
     */
    public function dashboard(){
        return Inertia::render('dashboard', [
            'title' => 'Tableau de bord',
            'statistics' => $this->transactionRepository->statistics(),
            'latest_transaction' => $this->transactionRepository->latest()
        ]);
    }

    /**
     * Get Transactions
     *
     * @return void
     */
    public function transactions(){
        return Inertia::render('transactions/index', [
            'title' => "Transactions",
            'transactions' => $this->transactionRepository->get()
        ]);
    }

    public function deposit(Request $request){
        $request->validate([
            'amount' => 'required|numeric|min:0.01'
        ]);

        //Sauvegarde du depot
        $this->transactionRepository->deposit($request->amount);
        return back()->with('success', 'Dépot effectué');
    }

    public function withdraw(Request $request){
        $request->validate([
            'amount' => 'required|numeric|min:0.01'
        ]);

        try {
            if (auth('web')->user()->balance < $request->amount) {
                throw new \Error('Solde insuffisant');
            }

            //Sauvegarde du depot
            $this->transactionRepository->withdraw($request->amount);
            return back()->with('success', 'Retrait effectué');
        } catch (\Throwable $th) {
            return back()->withErrors(['amount' => $th->getMessage()]);
        }
    }
}
