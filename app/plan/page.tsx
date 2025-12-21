import PlanForm from "@/components/plan/PlanForm";
import { verifySession } from "@/lib/firebase/verify-session";
import { redirect } from "next/navigation";

export default async function Plan() {
    const decoded = await verifySession();
    const { uid } = decoded;

    if(!uid) {
        redirect("/auth/signin");
    }

    return (
        <div className="flex-1 overflow-auto">
            <section className="border-b py-4 border-gray-200 text-center">
                <div className="text-4xl font-bold">Pocket Plan</div>
                <div className="text-gray-500 text-2xl mt-2">Enter your economy. View and track your progress towards goals. </div>
            </section>

            <section className="mt-8">
                <PlanForm />
            </section>
        </div>
    );
}