export default async function PocketAnalyticsCard() {
    return (
        <div className="w-[400px] p-4 rounded-xl shadow-xl ring-1 ring-black/5">
            <div className="font-bold text-2xl">Pocket Analytics</div>

            <div className="mt-4">
                <div>
                    <span className="font-bold">Burn Rate</span><span>: 0.785</span>
                </div>

                <div className="mt-2">
                    <span className="font-bold">Saving Potential</span><span>: ₹3500</span>
                </div>
            </div>
        </div>
    );
}