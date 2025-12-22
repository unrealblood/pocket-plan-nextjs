export default async function HeroSection() {
    const cards = [{
        title: "Your Income",
        content: 20000
    },
    {
        title: "Total Expenses",
        content: 14000
    },
    {
        title: "Miscellaneous",
        content: 4500
    }
    ];

    return (
        <section className="mt-4">
            <div className="text-3xl font-bold">Your Financial Dashboard</div>

            <div className="mt-8 flex justify-center items-center gap-6">
                {cards.map((card, index) => (
                    <div>
                        <div key={index} className={`w-[380px] p-8 rounded-xl shadow-xl ring-1 ring-black/5 border-b-4 ${(card.title === "Total Expenses") || (card.title === "Miscellaneous") ? "border-red-500" : "border-teal-500"}`}>

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