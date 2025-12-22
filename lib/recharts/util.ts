import { getTotalExpense } from "../plan/util";
import { PlanType } from "../typescript/plan";

export function convertPlanToChartData(plan: PlanType) {
    const categories = {
        Income: plan.income,
        Bills: (plan.rent ?? 0) + (plan.emi ?? 0) + (plan.utilities ?? 0),
        Food: (plan.groceries ?? 0) + (plan.dining ?? 0),
        Transport : (plan.fuel ?? 0) + (plan.cab ?? 0) + (plan.commute ?? 0),
        Subscriptions: (plan.ott ?? 0) + (plan.apps ?? 0) + (plan.saas ?? 0),
        Miscellaneous: plan.misc ?? 0
    };

    const totalExpenses = getTotalExpense(plan);
    const savings = plan.income - totalExpenses;

    return {
        pieData: [
            ...Object.entries(categories).map(([key, value]) => ({
                name: key,
                value
            })),
            {name: "Savings", value: savings}
        ],

        barData: [
            ...Object.entries(categories).map(([key, value]) => ({
                category: key,
                amount: value
            }))
        ]
    };
}