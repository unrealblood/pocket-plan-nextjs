import HeroSection from "@/components/dashboard/HeroSection";
import PocketAnalyticsCard from "@/components/dashboard/PocketAnalyticsCard";
import PocketGraphsCard from "@/components/dashboard/PocketGraphsCard";
import { verifySession } from "@/lib/firebase/verify-session";
import { PlanType } from "@/lib/typescript/plan";
import { getFirestore } from "firebase-admin/firestore";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const decoded = await verifySession();
    const { uid } = decoded;

    let plan: PlanType | null = null;

    if(!uid) {
        redirect("/auth/signin");
    }
    else {
        const db = getFirestore();
        const plansRef = db.collection("plans").doc(uid);

        const doc = await plansRef.get();

        if(doc.exists) {
            plan = doc.data() as PlanType;
        }
    }

    return (
        <div className="flex-1 overflow-auto sm:w-[1200px] w-[320px] mx-auto">
            <HeroSection plan={plan!} />

            <section className="mt-12">
                <div className="flex sm:flex-row flex-col sm:justify-between justify-center sm:items-start items-center sm:gap-0 gap-4">
                    <PocketAnalyticsCard plan={plan!} />
                    <PocketGraphsCard plan={plan!} />
                </div>
            </section>
        </div>
    );
}