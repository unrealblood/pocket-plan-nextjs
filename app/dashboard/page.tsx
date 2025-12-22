import HeroSection from "@/components/dashboard/HeroSection";
import PocketAnalyticsCard from "@/components/dashboard/PocketAnalyticsCard";
import PocketGraphsCard from "@/components/dashboard/PocketGraphsCard";

export default async function Dashboard() {
    return (
        <div className="flex-1 overflow-auto w-[1200px] mx-auto">
            <HeroSection />

            <section className="mt-12">
                <div className="flex justify-between items-start">
                    <PocketAnalyticsCard />
                    <PocketGraphsCard />
                </div>
            </section>
        </div>
    );
}