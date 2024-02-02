'use client';

import Image from "next/image";

export default function Banner({ title, date, category, image }) {
    return (
        <section className="w-full bg-blue-700 py-12 md:py-16 lg:py-20 relative">
            <div className="grid lg:grid-cols-2 container">
                <div className="flex-1 lg:pr-32 z-10 flex items-center">
                    <Image src={image.url} width={image.width} height={image.height} alt={image.title} className="w-full" />
                </div>
                <div className="flex-1 text-white z-10 lg:pr-16">
                    {/* <span className="text-sm uppercase">{date}</span> */}
                    <span className="text-xs font-bold">{category.map(el => el.name)}</span>
                    <h1 className="text-2xl sm:text-4xl text-center lg:text-left lg:text-5xl font-semibold leading-tight my-8">{title}</h1>
                </div>
            </div>
            <svg height="700" width="700" className="absolute top-0 right-0">
                <circle cx="700" cy="0" r="350" strokeWidth="3" fill="#FFEB3B" />
            </svg>
        </section>
    )
}
