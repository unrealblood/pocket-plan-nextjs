import { convertPlanToChartData } from "@/lib/recharts/util";
import { PlanType } from "@/lib/typescript/plan";
import PocketPieChart from "../recharts/PocketPieChart";
import PocketBarChart from "../recharts/PocketBarChart";

export default async function PocketGraphsCard({plan} : {plan: PlanType}) {
    const { pieData, barData } = convertPlanToChartData(plan);

    return (
        <div className="sm:w-[750px] w-[320px] p-4 rounded-xl ">
            <section className="shadow-xl ring-1 ring-black/5 p-4 rounded-xl">
                <div className="text-3xl font-bold">
                    Pocket Pie Chart
                </div>

                <div className="mt-8 flex justify-center items-center">
                    <PocketPieChart data={pieData} />
                </div>
            </section>

            <section className="mt-12 shadow-xl ring-1 ring-black/5 p-4 rounded-xl">
                <div className="text-3xl font-bold">
                    Pocket Bar Chart
                </div>

                <div className="mt-8 flex justify-center items-center">
                    <PocketBarChart data={barData} />
                </div>
            </section>
        </div>
    );
}