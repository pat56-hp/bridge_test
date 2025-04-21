import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";
import Datatable from "../datatable";
import { getDate } from "../../helper/helper";
import Deposit from "../../pages/transactions/components/deposit";
import Withdraw from "../../pages/transactions/components/withdraw";

export default function Transactions({transactions}) {
    return (
        <Card className="">
            <CardHeader>
                <CardTitle className="text-base font-medium">
                    Transactions
                </CardTitle>
                <CardDescription>
                    Liste des 10 dernières transactions
                </CardDescription>
                <CardContent className="pt-2 pr-0 pl-0 overflow-auto">
                    <Datatable 
                        data={transactions}
                        showPagination={false}
                        buttons={[<Deposit />, <Withdraw />]}
                        columuns={[
                            {key: 'type', label: 'Type', sortable: true, render: (transaction) => (
                                <span
                                    className={`px-2 py-1 hover:cursor-pointer rounded-full text-xs ${
                                        transaction.type === 'deposit'
                                            ? "bg-green-100 text-green-800"
                                            : "bg-red-100 text-red-800"
                                    }`}
                                >
                                    {transaction.type === 'deposit' ? "Dépot" : "Retrait"}
                                </span>
                            )},
                            {key: "amount", label: 'Montant', sortable: true, render: (transaction) => `${transaction.amount} FCFA`},
                            {key: 'date', label: 'Date', sortable: true, render: (transaction) => getDate(transaction.created_at)}
                        ]}
                    />
                </CardContent>
            </CardHeader>
        </Card>

    );
}
