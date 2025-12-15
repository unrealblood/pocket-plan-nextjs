import { InfoSectionCardType } from "@/lib/typescript/home/info-section";
import InfoSectionCardItem from "./InfoSectionCardItem";

export default async function InfoSectionCardsGrid() {
    const cards: InfoSectionCardType[] = [{
        image: "💰",
        title: "Real-Time Tracking",
        content: "Instantly log income and expenses. See exactly where your money is going with zero delays."
    },
    {
        image: "📊",
        title: "Visual Insights",
        content: "Beautiful charts and graphs help you understand complex financial data at a glance."
    },
    {
        image: "🔒",
        title: "Secure & Private",
        content: "Your financial data is protected. Focus on your goals without worrying about security."
    }
    ];

    return (
        <div className="flex justify-center items-center flex-wrap gap-16 mt-8">
            {cards.map((card, index) => (
                <InfoSectionCardItem key={index} {...card} />
            ))}
        </div>
    );
}