import { TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

export default function DashboardStats({statistics}) {
    const stats = [
        {
            name: "Dépot(s)",
            value: statistics.total_deposit,
            amount: statistics.amount_deposit,
            icon: TrendingUp,
            color: "bg-green-500",
        },
        {
            name: "Retrait(s)",
            value: statistics.total_withdraw,
            amount: statistics.amount_withdraw,
            icon: TrendingDown,
            color: "bg-red-500",
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {stats.map((stat, key) => (
                <div
                    key={key}
                    className="bg-white overflow-hidden shadow rounded-lg"
                >
                    <div className="p-5">
                        <div className="flex items-center">
                            <div className="flex flex-1 items-center">
                                <div
                                    className={`flex-shrink-0 ${stat.color} rounded-md p-3`}
                                >
                                    <stat.icon className="h-6 w-6 text-white" />
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">
                                            {stat.name}
                                        </dt>
                                        <dd>
                                            <div className="text-lg font-medium text-gray-900">
                                                {stat.value}
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div className="flex-end text-lg font-medium text-gray-900">
                                {stat.amount} FCFA
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
