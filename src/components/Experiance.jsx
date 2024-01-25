'use client';
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ limitCallbacks: true });

export default function Experiance() {
    const workRef = useRef()
    const experianceRef = useRef()
    const boxRef1 = useRef()
    const boxRef2 = useRef()
    const boxRef3 = useRef()
    const boxRef4 = useRef()

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: workRef.current,
                pin: true,
                start: "top top",
                markers: 0,
                end: "+=6000",
                scrub: 1,
                anticipatePin: 1
            }
        }).addLabel("step1")
            .fromTo(experianceRef.current, { y: 500 }, { y: 250, duration: 0.5 }, "step1")
            .fromTo(boxRef1.current, { opacity: 0.3 }, { opacity: 1, duration: 0.5 }, "step1")
            .to(document.body, { duration: 0.5 })
            .addLabel("step2")
            .fromTo(experianceRef.current, { y: 250 }, { y: 0, duration: 0.5 }, "step2")
            .fromTo(boxRef1.current, { opacity: 1 }, { opacity: 0.3, duration: 0.5 }, "step2")
            .fromTo(boxRef2.current, { opacity: 0.3 }, { opacity: 1, duration: 0.5 }, "step2")
            .to(document.body, { duration: 0.5 })
            .addLabel("step3")
            .fromTo(experianceRef.current, { y: 0 }, { y: -250, duration: 0.5 }, "step3")
            .fromTo(boxRef2.current, { opacity: 1 }, { opacity: 0.3, duration: 0.5 }, "step3")
            .fromTo(boxRef3.current, { opacity: 0.3 }, { opacity: 1, duration: 0.5 }, "step3")
            .to(document.body, { duration: 0.5 })
            .addLabel("step4")
            .fromTo(experianceRef.current, { y: -250 }, { y: -500, duration: 0.5 }, "step4")
            .fromTo(boxRef3.current, { opacity: 1 }, { opacity: 0.3, duration: 0.5 }, "step4")
            .fromTo(boxRef4.current, { opacity: 0.3 }, { opacity: 1, duration: 0.5 }, "step4")
            .to(document.body, { duration: 0.5 })
    }, { scope: workRef })

    return (
        <section ref={workRef} id="work" className="w-full bg-blue-700 relative h-screen overflow-hidden">
            <div className="grid grid-cols-2 container h-screen">
                <div className="z-10 flex flex-col justify-center h-screen">
                    <div id="experiance"></div>
                    <h3 className="text-4xl font-light leading-tight text-center">Work Experiance</h3>
                </div>
                <div className="text-white z-10 px-24">
                    <ul className="work-experiance" ref={experianceRef}>
                        <li ref={boxRef1} className="box-1 w-96 opacity-50 mb-16">
                            <div className="p-8 bg-white text-black rounded-3xl shadow-2xl">
                                <span className="text-xs uppercase font-semibold">Jul 2022 - Present</span>
                                <h4 className="font-bold text-xl mt-2">Senior Software Engineer</h4>
                                <h6 className="text-sm flex items-center mb-4">
                                    <span>Cygnet Digital</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                        aria-hidden="true">
                                        <path fillRule="evenodd"
                                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </h6>
                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                    <li className="mr-1.5 mt-2">
                                        <div
                                            className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                            React </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div
                                            className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                            SCSS </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div
                                            className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                            JavaScript </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div
                                            className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                            TypeScript </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div
                                            className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                            MES </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div
                                            className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                            Software Design </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div
                                            className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                            Solumina </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li ref={boxRef2} className="box-2 w-96 opacity-50 mb-16">
                            <div className="p-8 bg-white text-black rounded-3xl shadow-2xl">
                                <span className="text-xs uppercase font-semibold">APR 2021 - JUN 2022</span>
                                <h4 className="font-bold text-xl mt-2">Senior JavaScript Developer</h4>
                                <h6 className="text-sm flex items-center mb-4">
                                    <span>Uplers Solution</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                        aria-hidden="true">
                                        <path fillRule="evenodd"
                                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </h6>
                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                    <li className="mr-1.5 mt-2">
                                        <div
                                            className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                            Software Design </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div
                                            className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                            JavaScript </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div
                                            className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                            Mentorship </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div
                                            className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                            React </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div
                                            className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                            API Intergration </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li ref={boxRef3} className="box-3 w-96 opacity-50 mb-16">
                            <div className="p-8 bg-white text-black rounded-3xl shadow-2xl">
                                <span className="text-xs uppercase font-semibold">OCT 2017 - MAR 2021</span>
                                <h4 className="font-bold text-xl mt-2">jQuery Developer</h4>
                                <h6 className="text-sm flex items-center mb-4">
                                    <span>Uplers Solution</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                        aria-hidden="true">
                                        <path fillRule="evenodd"
                                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </h6>
                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                    <li className="mr-1.5 mt-2">
                                        <div
                                            className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                            JavaScript </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div
                                            className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                            jQuery </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div
                                            className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                            Hubspot </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div
                                            className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                            React </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div
                                            className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                            PHP </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div
                                            className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                            API Intergration </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li ref={boxRef4} className="box-4 w-96 opacity-50 mb-16">
                            <div className="p-8 bg-white text-black rounded-3xl shadow-2xl">
                                <span className="text-xs uppercase font-semibold">Jun 2016 - Sep 2017</span>
                                <h4 className="font-bold text-xl mt-2">Web Developer</h4>
                                <h6 className="text-sm flex items-center mb-4">
                                    <span>Self Employed</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                        aria-hidden="true">
                                        <path fillRule="evenodd"
                                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </h6>
                                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                    <li className="mr-1.5 mt-2">
                                        <div
                                            className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                            WordPress </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div
                                            className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                            PHP </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div
                                            className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                            JavaScript </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div
                                            className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                            jQuery </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div
                                            className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                            Web Design </div>
                                    </li>
                                    <li className="mr-1.5 mt-2">
                                        <div
                                            className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                            Mentorship </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="absolute top-0 w-full bg flex">
                <div className="w-full h-screen bg-gray-50"></div>
                <div className="w-full"></div>
                <svg height="500" width="500" className="circle absolute top-0 right-0">
                    <circle cx="500" cy="0" r="250" strokeWidth="3" fill="#FFEB3B" />
                </svg>
            </div>
        </section>
    )
}
