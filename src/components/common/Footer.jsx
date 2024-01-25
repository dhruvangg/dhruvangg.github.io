'use client';

export default function Footer() {
    return (
        <footer className="bg-blue-700 py-16 relative overflow-hidden">
            <div className="container grid grid-cols-4">
                <div className="z-10 col-span-2">
                    <a href="/" className="flex items-center mr-12 text-sm font-semibold">
                        <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5"
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                stroke="#FFF" strokeWidth="1.5" />
                            <path
                                d="M15.5 9L15.6716 9.17157C17.0049 10.5049 17.6716 11.1716 17.6716 12C17.6716 12.8284 17.0049 13.4951 15.6716 14.8284L15.5 15"
                                stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M13.2942 7.17041L12.0001 12L10.706 16.8297" stroke="#FFF" strokeWidth="1.5"
                                strokeLinecap="round" />
                            <path
                                d="M8.49994 9L8.32837 9.17157C6.99504 10.5049 6.32837 11.1716 6.32837 12C6.32837 12.8284 6.99504 13.4951 8.32837 14.8284L8.49994 15"
                                stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <span className="pl-1 text-white text-2xl font-light pl-2">dhruvang.com</span>
                    </a>
                </div>
                <div className="z-10 text-white">
                    <h5 className="text-2xl mb-4">Resources</h5>
                    <ul>
                        <li><a className="font-semibold p-1 block">Blog</a></li>
                        <li><a className="font-semibold p-1 block">Codepen</a></li>
                        <li><a className="font-semibold p-1 block">Gists</a></li>
                    </ul>
                </div>
                <div className="z-10 text-white">
                    <h5 className="text-2xl mb-4">Latest Articles</h5>
                    <ul>
                        <li><a className="font-semibold p-1 block">Blog</a></li>
                        <li><a className="font-semibold p-1 block">Codepen</a></li>
                        <li><a className="font-semibold p-1 block">Gists</a></li>
                    </ul>
                </div>
            </div>
            <svg height="800" width="800" className="absolute top-0 left-0">
                <rect width="800" height="800" strokeWidth="3" fill="#0099ff" />
            </svg>
            <svg height="500" width="500" className="absolute top-0 right-0">
                <circle cx="500" cy="0" r="250" strokeWidth="3" fill="#FFEB3B" />
            </svg>
        </footer>
    )
}
