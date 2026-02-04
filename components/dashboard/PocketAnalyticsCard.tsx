import { getTotalExpense } from "@/lib/plan/util";
import { PlanType } from "@/lib/typescript/plan";

export default async function PocketAnalyticsCard({plan} : {plan: PlanType}) {
    const burnRate = getTotalExpense(plan) / plan.income;
    const savingsPotential = plan.income - getTotalExpense(plan);

    return (
        <div className="sm:w-[400px] w-[300px] p-4 rounded-xl shadow-xl ring-1 ring-black/5">
            <div className="font-bold text-2xl">Pocket Analytics</div>

            <div className="mt-4">
                <div>
                    <span className="font-bold">Burn Rate</span><span>: {burnRate.toFixed(2)}</span>
                </div>

                <div className="mt-2">
                    <span className="font-bold">Saving Potential</span><span>: ₹{savingsPotential}</span>
                </div>
            </div>
        </div>
    );
}