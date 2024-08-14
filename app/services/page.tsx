import Link from "next/link";
import { servicePageItems } from "../constants/constants";

type ServiceProps = {
    id: number;
    title: string;
    url: string;
};
const serviceItems: ServiceProps[] = servicePageItems;
export default function Services() {
    return (
        <div className="w-full mx-auto flex flex-col gap-y-6 text-green-700 bg-slate-300">
            <h1 className="text-2xl font-bold mb-4">Services</h1>
            <ul className="list-disc ml-6">
                {servicePageItems.map((servicePageItem) => (
                    <Link href={servicePageItem.url} key={servicePageItem.id}>
                        <li className="text-lg font-semibold mb-4">{servicePageItem.title}</li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}
