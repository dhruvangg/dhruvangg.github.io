'use client';

export default function Projects() {
    return (
        <section className="relative overflow-hidden" id="projects">
            <div className="absolute top-0 w-full bg flex bg-blue-700 h-full -z-10">
                <svg height="800" width="800" className="absolute top-0 left-0 h-full" id="animateY">
                    <rect width="100%" height="100%" strokeWidth="3" fill="#0099ff" />
                </svg>
                <svg height="500" width="500" className="circle absolute top-0 right-0">
                    <circle cx="500" cy="0" r="250" strokeWidth="3" fill="#FFEB3B" />
                </svg>
            </div>
            <div className="container">
                <div className="projects grid grid-cols-4 gap-12 py-20">
                    <a href="https://dhruvang.com/storeways" className="bg-white shadow-2xl rounded-3xl p-6">
                        <h5 className="flex items-center mb-2 text-xl antialiased text-gray-800">
                            <span>Moneyinsightful</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2">
                                <path fillRule="evenodd"
                                    d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                                    clipRule="evenodd" />
                                <path fillRule="evenodd"
                                    d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                                    clipRule="evenodd" />
                            </svg>
                        </h5>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            MoneyInsightful is your trusted companion on the journey to financial literacy, offering a user-friendly
                            platform tailored for beginners to intermediate learners.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            <li className="mr-1.5 mt-2">
                                <div
                                    className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                    NextJS
                                </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                                <div
                                    className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                    React
                                </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                                <div
                                    className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                    JavaScript
                                </div>
                            </li>
                        </ul>
                    </a>
                    <a href="https://dhruvang.com/notes" className="bg-white shadow-2xl rounded-3xl p-6">
                        <h5 className="flex items-center mb-2 text-xl antialiased text-gray-800">
                            <span>Notes</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2">
                                <path fillRule="evenodd"
                                    d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                                    clipRule="evenodd" />
                                <path fillRule="evenodd"
                                    d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                                    clipRule="evenodd" />
                            </svg>
                        </h5>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            Simple Todo Progressive web application stores your data locally and can be installed on cross platforms.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            <li className="mr-1.5 mt-2">
                                <div
                                    className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                    React
                                </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                                <div
                                    className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                    TailwindCSS
                                </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                                <div
                                    className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                    PWA
                                </div>
                            </li>
                        </ul>
                    </a>
                    <a href="https://selectbox.dhruvang.com" className="bg-white shadow-2xl rounded-3xl p-6">
                        <h5 className="flex items-center mb-2 text-xl antialiased text-gray-800">
                            <span>Selectbox</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2">
                                <path fillRule="evenodd"
                                    d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                                    clipRule="evenodd" />
                                <path fillRule="evenodd"
                                    d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                                    clipRule="evenodd" />
                            </svg>
                        </h5>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            Simplest Selectbox | A styleable replacement for SELECT elements.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            <li className="mr-1.5 mt-2">
                                <div
                                    className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                    HTML
                                </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                                <div
                                    className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                    JavaScript
                                </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                                <div
                                    className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                    CSS
                                </div>
                            </li>
                        </ul>
                    </a>
                    <a href="https://dhruvang.com/storeways" className="bg-white shadow-2xl rounded-3xl p-6">
                        <h5 className="flex items-center mb-2 text-xl antialiased text-gray-800">
                            <span>Storeways</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2">
                                <path fillRule="evenodd"
                                    d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                                    clipRule="evenodd" />
                                <path fillRule="evenodd"
                                    d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                                    clipRule="evenodd" />
                            </svg>
                        </h5>
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                            A cutting-edge store locator plugin crafted with JavaScript, powered by Leaflet.js, and seamlessly
                            integrated with OpenStreetMap.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            <li className="mr-1.5 mt-2">
                                <div
                                    className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                    JavaScript
                                </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                                <div
                                    className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                    LeafletJS
                                </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                                <div
                                    className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-700">
                                    OpenStreetMap
                                </div>
                            </li>
                        </ul>
                    </a>
                </div>
            </div>
        </section>
    )
}
