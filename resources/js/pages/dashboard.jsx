import React from "react";
import AppLayout from "../layouts/app-layout";
import PageTitle from "../components/page-title";
import DashboardStats from "../components/dashboard/dashboard-stat";
import Transactions from "../components/dashboard/transactions";

export default function Dashboard({statistics, latest_transaction}) {
    const breadcrumb = [
        {
            title: "Tableau de bord",
            link: "/dashboard",
        },
    ];

    return (
        <AppLayout>
            <div className="flex flex-col gap-4">
                <div>
                    <PageTitle
                        title="Tableau de bord"
                        breadcrumb={breadcrumb}
                    />
                    <p className="text-muted-foreground">
                        Aperçu des statistiques
                    </p>
                </div>
                <DashboardStats statistics={statistics} />
                <Transactions transactions={latest_transaction} />
            </div>
        </AppLayout>
    );
}
