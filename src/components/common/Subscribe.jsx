'use clent';

export default function Subscribe() {
    return (
        <section className="my-16">
            <div className="container flex items-center py-20">
                <h3 className="text-5xl font-light leading-tight">Development insights you won&apos;t delete. Delivered to your inbox
                    weekly.</h3>
                <div>
                    <form className="flex">
                        <input className="py-4 px-8 text-lg rounded-full font-light bg-gray-100 w-96 mr-5" placeholder="Your email..." />
                        <button className="bg-gray-800 text-lg text-white font-light py-4 px-8 rounded-full">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
