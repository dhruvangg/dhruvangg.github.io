import Image from "next/image";
import postPic from '../../../public/post.svg'
import { Footer, Header } from "@/components/common";

export default function page() {
    return (
        <main>
            <Header />
            <section id="featured" className="w-full bg-blue-700 py-20 relative">
                <div className="grid grid-cols-2 container">
                    <div className="flex-1 pr-32">
                        <Image src={postPic} alt="Sample post" className="w-full pb-12" />
                    </div>
                    <div className="flex-1 text-white z-10 pr-16">
                        <span className="text-sm">SALES TIPS — 7MINS</span>
                        <h1 className="text-5xl font-light leading-tight my-8">Best Practices for Multi-Channel Sales Sequence Messaging
                        </h1>
                        <p className="font-light">The world of business is evolving at an unprecedented pace. Like it or not, we have to
                            accept that fact and
                            make the necessary adjustments to stay afloat. That is exactly how multi-channel sequence messaging came to
                            life - businesses simply cannot keep all their eggs in one basket any longer.</p>
                        <button className="mt-8 bg-gray-800 text-lg text-white font-light py-4 px-8 rounded-full">Read More</button>
                    </div>
                </div>
                <svg height="700" width="700" className="absolute top-0 right-0">
                    <circle cx="700" cy="0" r="350" stroke-width="3" fill="#FFEB3B" />
                </svg>
            </section>
            <section className="my-20">
                <div className="container grid grid-cols-3 gap-16">
                    <div>
                        <Image src={postPic} alt="Sample post" className="w-full pb-12" />
                        <div className="mb-4">
                            <span className="text-sm">JAVASCRIPT — 5 MINS</span>
                        </div>
                        <h4 className="text-2xl">Write a function for performing partial application in JavaScript</h4>
                    </div>
                    <div>
                        <Image src={postPic} alt="Sample post" className="w-full pb-12" />
                        <div className="mb-4">
                            <span className="text-sm">SALES MANAGEMENT — 5 MINS</span>
                        </div>
                        <h4 className="text-2xl">Hiring the Right Sales Team at the Right Time</h4>
                    </div>
                    <div>
                        <Image src={postPic} alt="Sample post" className="w-full pb-12" />
                        <div className="mb-4">
                            <span className="text-sm">SALES MANAGEMENT — 5 MINS</span>
                        </div>
                        <h4 className="text-2xl">Hiring the Right Sales Team at the Right Time</h4>
                    </div>
                </div>
            </section>
            <section className="my-16">
                <div className="container flex items-center border-y py-20">
                    <h3 className="text-5xl font-light leading-tight">Development insights you won't delete. Delivered to your inbox
                        weekly.</h3>
                    <div>
                        <form className="flex">
                            <input className="py-4 px-8 text-lg rounded-full font-light bg-gray-100 w-96 mr-5" placeholder="Your email..." />
                            <button className="bg-gray-800 text-lg text-white font-light py-4 px-8 rounded-full">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
