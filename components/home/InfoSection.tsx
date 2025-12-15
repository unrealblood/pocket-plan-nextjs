import InfoSectionCardsGrid from "./InfoSectionCardsGrid";

export default async function InfoSection() {
    return (
        <section className="mt-8">
            <div className="text-4xl font-bold text-center">
                Why Pocket Plan?
            </div>

            <InfoSectionCardsGrid />
        </section>
    );
}