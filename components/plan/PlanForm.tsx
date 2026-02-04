"use client";

import { planSubmitAction } from "@/actions/plan";
import { ActionStateType } from "@/lib/typescript/util";
import { useActionState, useState } from "react";

export default function PlanForm() {
    const initialActionState: ActionStateType = {success: false, errors: [], message: ""};

    const [state, formAction] = useActionState(planSubmitAction, initialActionState);

    const [income, setIncome] = useState<string>("");
    const [rent, setRent] = useState<string>("");
    const [emi, setEmi] = useState<string>("");
    const [utilities, setUtilities] = useState<string>("");
    const [groceries, setGroceries] = useState<string>("");
    const [dining, setDining] = useState<string>("");
    const [fuel, setFuel] = useState<string>("");
    const [cab, setCab] = useState<string>("");
    const [commute, setCommute] = useState<string>("");
    const [ott, setOtt] = useState<string>("");
    const [saas, setSaas] = useState<string>("");
    const [apps, setApps] = useState<string>("");
    const [misc, setMisc] = useState<string>("");

    return (
        <form action={formAction} className="mx-4">
            <div className="text-xl flex sm:justify-center sm:items-center justify-start items-start flex-col gap-8">
                <div className="flex justify-center items-center">
                    <div>
                        <label htmlFor="incomeInput" className="font-bold text-2xl">Income</label><br />

                        <input type="text" className="bg-gray-200 p-2 sm:w-[800px] w-[300px] rounded-full" id="incomeInput" name="income" placeholder="Enter your income" value={income} onChange={(e) => setIncome(e.target.value)} />
                    </div>
                </div>

                <div>
                    <div className="font-bold text-2xl">Monthly Bills</div>

                    <div className="flex sm:flex-row flex-col sm:justify-center sm:items-center gap-4 justify-start items-start">
                        <div>
                            <label htmlFor="rentInput">Rent</label><br />

                            <input type="text" className="bg-gray-200 p-2 sm:w-[255px] w-[300px] rounded-full" id="rentInput" name="rent" placeholder="Enter your rent" value={rent} onChange={(e) => setRent(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="emiInput">Total EMI</label><br />

                            <input type="text" className="bg-gray-200 p-2 sm:w-[255px] w-[300px] rounded-full" id="emiInput" name="emi" placeholder="Enter your total of emi" value={emi} onChange={(e) => setEmi(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="utilitiesInput">Utilities</label><br />

                            <input type="text" className="bg-gray-200 p-2 sm:w-[255px] w-[300px] rounded-full" id="utilitiesInput" name="utilities" placeholder="Enter your utilities" value={utilities} onChange={(e) => setUtilities(e.target.value)} />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="font-bold text-2xl">Food</div>

                    <div className="flex sm:flex-row flex-col sm:justify-center sm:items-center justify-start items-start gap-4">
                        <div>
                            <label htmlFor="groceriesInput">Groceries</label><br />

                            <input type="text" className="bg-gray-200 p-2 sm:w-[390px] w-[300px] rounded-full" id="groceriesInput" name="groceries" placeholder="Enter your groceries" value={groceries} onChange={(e) => setGroceries(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="diningInput">Dining</label><br />

                            <input type="text" className="bg-gray-200 p-2 sm:w-[390px] w-[300px] rounded-full" id="emiInput" name="dining" placeholder="Enter your dining" value={dining} onChange={(e) => setDining(e.target.value)} />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="font-bold text-2xl">Transport</div>

                    <div className="flex sm:flex-row flex-col sm:justify-center sm:items-center justify-start items-start gap-4">
                        <div>
                            <label htmlFor="fuelInput">Fuel</label><br />

                            <input type="text" className="bg-gray-200 p-2 sm:w-[255px] w-[300px] rounded-full" id="fuelInput" name="fuel" placeholder="Enter your fuel" value={fuel} onChange={(e) => setFuel(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="cabInput">Cab</label><br />

                            <input type="text" className="bg-gray-200 p-2 sm:w-[255px] w-[300px] rounded-full" id="cabInput" name="cab" placeholder="Enter your cab" value={cab} onChange={(e) => setCab(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="commuteInput">Commute</label><br />

                            <input type="text" className="bg-gray-200 p-2 sm:w-[255px] w-[300px] rounded-full" id="commuteInput" name="commute" placeholder="Enter your commute" value={commute} onChange={(e) => setCommute(e.target.value)} />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="font-bold text-2xl">Subscriptions</div>

                    <div className="flex sm:flex-row flex-col sm:justify-center sm:items-center justify-start items-start gap-4">
                        <div>
                            <label htmlFor="ottInput">OTT</label><br />

                            <input type="text" className="bg-gray-200 p-2 sm:w-[255px] w-[300px] rounded-full" id="ottInput" name="ott" placeholder="Enter your ott" value={ott} onChange={(e) => setOtt(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="saasInput">SaaS</label><br />

                            <input type="text" className="bg-gray-200 p-2 sm:w-[255px] w-[300px] rounded-full" id="saasInput" name="saas" placeholder="Enter your SaaS" value={saas} onChange={(e) => setSaas(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="appsInput">Apps</label><br />

                            <input type="text" className="bg-gray-200 p-2 sm:w-[255px] w-[300px] rounded-full" id="appsInput" name="apps" placeholder="Enter your apps" value={apps} onChange={(e) => setApps(e.target.value)} />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <div>
                        <label htmlFor="miscInput" className="font-bold text-2xl">Miscellaneous</label><br />

                        <input type="text" className="bg-gray-200 p-2 sm:w-[800px] w-[300px] rounded-full" id="miscInput" name="misc" placeholder="Enter your miscellaneous" value={misc} onChange={(e) => setMisc(e.target.value)} />
                    </div>
                </div>
            </div>
            
            <div className="text-center mt-8">
                {state.errors.map((error, index) => (
                    <p key={index} className="text-red-500">{error}</p>
                ))}
            </div>

            <div className="text-center mt-8">
                {(state.message !== "") && <p className="text-green-500">{state.message}</p>}
            </div>

            <div className="flex justify-center items-center mt-4 mb-4">
                <button type="submit" className="bg-green-500 text-white cursor-pointer w-60 py-2 sm:text-2xl text-xl rounded-full">Submit</button>
            </div>
        </form>
    );
}