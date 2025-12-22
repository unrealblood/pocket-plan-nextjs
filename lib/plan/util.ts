import { PlanType } from "../typescript/plan";

export function getTotalExpense(plan: PlanType): number {
    return (plan.rent ?? 0) + (plan.emi ?? 0) + (plan.utilities ?? 0) + (plan.groceries ?? 0) + (plan.dining ?? 0) + (plan.fuel ?? 0) + (plan.cab ?? 0) + (plan.commute ?? 0) + (plan.ott ?? 0) + (plan.saas ?? 0) + (plan.apps ?? 0) + (plan.misc ?? 0);
}