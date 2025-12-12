import Link from "next/link";

export default async function HeroSection() {
    return (
        <section className="mt-8">
            <div className="text-center shadow-xl ring-1 ring-black/5 rounded-xl p-8">
                <div className="text-6xl font-bold text-gray-800 px-40">
                    Master Your Money. Pocket Your Future
                </div>

                <p className="text-2xl mt-4 px-60 text-gray-500">Pocket Plan simplifies budgeting, tracking expenses, and planning for your future. Take control of your income, bills, and goals--all in one smart place.</p>

                <Link href="/dashboard" className="flex justify-center items-center w-56 mx-auto">
                    <div className="bg-teal-500 text-white w-56 px-6 py-4 rounded-full mt-8">
                        Go to Dashboard
                    </div>
                </Link>
            </div>
        </section>
    );
}