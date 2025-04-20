import React from 'react'
import ContentLayout from '../../layouts/content-layout';
import Datatable from '../../components/datatable';
import Deposit from './components/deposit';
import Withdraw from './components/withdraw';
import { getDate } from '../../helper/helper';
import { TrendingUp } from 'lucide-react';

export default function TransactionIndex({title, transactions}) {
    const breadcrumbs = [
        {
            title: "Tableau de bord",
            link: route("dashboard"),
        },
        {
            title: "Transactions",
        },
    ];

  return (
        <ContentLayout
            title={title}
            subtitle="Consulter la liste des transactions"
            breadcrumb={breadcrumbs}
        >
            <Datatable 
                data={transactions}
                showPagination={true}
                buttons={[<Deposit />, <Withdraw />]}
                itemsPerPage="10"
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
        </ContentLayout>
  )
}
