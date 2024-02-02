'use client';

export default function Subscribe() {
    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "0afe6d8b-29cd-4b71-a518-b12b648a03f0",
                email: e.target.email.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }
    return (
        <section className="my-16">
            <div className="container flex flex-col xl:flex-row items-center py-20 border-y">
                <h3 className="text-center text-2xl font-semibold mb-5 xl:text-left xl:text-5xl xl:font-light xl:leading-snug">Development insights you won&apos;t delete. Delivered to your inbox
                    weekly.</h3>
                <div>
                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
                        <input type="email" name="email" className="py-4 px-8 text-lg w-full max-w-96 xl:w-96 mr-5 mb-4 md:mb-0 rounded-full font-light bg-gray-100 " placeholder="Your email..." />
                        <button className="bg-gray-800 text-lg text-white font-light py-4 px-8 rounded-full">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
