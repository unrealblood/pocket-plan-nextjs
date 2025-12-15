import { InfoSectionCardType } from "@/lib/typescript/home/info-section";

export default async function InfoSectionCardItem({image, content, title}: InfoSectionCardType) {
    return (
        <div className="w-80 h-52 shadow-xl ring-1 ring-black/5 rounded-xl p-8 flex justify-start items-start flex-col gap-2">
            <div className="text-3xl">{image}</div>

            <div className="text-2xl font-bold">{title}</div>

            <div className="text-gray-500">{content}</div>
        </div>
    );
}