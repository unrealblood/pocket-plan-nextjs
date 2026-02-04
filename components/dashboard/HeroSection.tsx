import { getTotalExpense } from "@/lib/plan/util";
import { PlanType } from "@/lib/typescript/plan";

export default async function HeroSection({plan} : {plan: PlanType}) {
    const cards = [{
        title: "Your Income",
        content: plan?.income ?? 0
    },
    {
        title: "Total Expenses",
        content: getTotalExpense(plan!)
    },
    {
        title: "Miscellaneous",
        content: plan?.misc ?? 0
    }
    ];

    return (
        <section className="mt-4">
            <div className="sm:text-3xl text-2xl sm:text-left text-center font-bold">Your Financial Dashboard</div>

            <div className="mt-8 flex sm:flex-row flex-col justify-center items-center gap-6">
                {cards.map((card, index) => (
                    <div key={index}>
                        <div className={`sm:w-[380px] w-[300px] p-8 rounded-xl shadow-xl ring-1 ring-black/5 border-b-4 ${(card.title === "Total Expenses") || (card.title === "Miscellaneous") ? "border-red-500" : "border-teal-500"}`}>

                            <div className="text-gray-500 text-lg">
                                {card.title}
                            </div>
                            
                            <div className={`text-4xl font-bold ${(card.title === "Total Expenses") || (card.title === "Miscellaneous") ? "text-red-500" : "text-teal-500"}`}>
                                ₹ {card.content}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}