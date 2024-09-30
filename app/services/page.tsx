import Link from "next/link";
import { servicePageItems } from "../constants/constants";


export default function Services() {
    return (
<section className={'w-full mx-auto bg-slate-100 px-4 md:px-8 py-16 z-10'}>
        <div className="flex flex-col text-green-700 max-w-[1536px]">
            <h1 className="text-2xl font-bold mb-4 text-center">
                Services
            </h1>
        <h2 className="text-lg mb-4 flex items-center capitalize justify-center">
            Below is a list of our services,click for detailed view
        </h2>
            <ul className="list-disc ml-6 flex flex-col gap-8 items-center justify-center">
                {servicePageItems.map((servicePageItem) => (
                    <Link href={servicePageItem.url} key={servicePageItem.id}>
                        <li className="hover:scale-y-1.2 flex items-center justify-center text-xl font-semibold mb-2 h-28 text-blue-900">{servicePageItem.title}</li>
                    </Link>
                ))}
            </ul>
        </div>
</section>
    );
}
