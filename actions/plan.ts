"use server";

import { verifySession } from "@/lib/firebase/verify-session";
import { PlanType } from "@/lib/typescript/plan";
import { ActionStateType } from "@/lib/typescript/util";
import { getFirestore } from "firebase-admin/firestore";

export async function planSubmitAction(prevState: ActionStateType, formData: FormData): Promise<ActionStateType> {
    const errors: string[] = [];

    const income = parseInt(formData.get("income") as string);
    const rent = parseInt(formData.get("rent") as string);
    const emi = parseInt(formData.get("emi") as string);
    const utilities = parseInt(formData.get("utilities") as string);
    const groceries = parseInt(formData.get("groceries") as string);
    const dining = parseInt(formData.get("dining") as string);
    const fuel = parseInt(formData.get("fuel") as string);
    const cab = parseInt(formData.get("cab") as string);
    const commute = parseInt(formData.get("commute") as string);
    const ott = parseInt(formData.get("ott") as string);
    const saas = parseInt(formData.get("saas") as string);
    const apps = parseInt(formData.get("apps") as string);
    const misc = parseInt(formData.get("misc") as string);

    if(!income || income === 0) {
        errors.push("Please enter your income");
    }

    if(errors.length === 0) {
        //submit plan data in database
        const newPlan: PlanType = {
            income,
            rent,
            emi,
            utilities,
            groceries,
            dining,
            fuel,
            cab,
            commute,
            ott,
            saas,
            apps,
            misc
        };

        const decoded = await verifySession();
        const { uid } = decoded;

        if(!uid) {
            throw new Error("User's userId not found.");
        }
        else {
            const db = getFirestore();
            const docRef = db.collection("plans").doc(uid);
            
            await docRef.set(newPlan);

            return {success: true, errors, message: "Successfully created the Pocket Plan."}
        }
    }

    return {success: false, errors, message: ""};
}