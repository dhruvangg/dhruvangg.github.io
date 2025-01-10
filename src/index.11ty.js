import dayjs from "dayjs";

class Home {
    data() {
        return {
            title: "Home",
            layout: "layout.11ty.js",
            eleventyImport: {
                collections: ["featured"],
            },
        };
    }

    createItem(data, url) {
        return `<li class="py-12">
            <article>
                <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                        <dt class="sr-only">Published on</dt>
                        <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"><time datetime="2023-08-05T00:00:00.000Z">${dayjs(data.date).format("MMMM D, YYYY")}</time></dd>
                    </dl>
                    <div class="space-y-5 xl:col-span-3">
                        <div class="space-y-6">
                            <div>
                                <h2 class="text-2xl font-bold leading-8 tracking-tight mb-3">
                                    <a class="text-gray-900 dark:text-gray-100" href="${url}">${data.title}</a>
                                </h2>
                                <div class="flex flex-wrap">
                                    ${data.tags.map((tag) => `<a class="mr-3 text-sm font-medium uppercase text-indigo-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/${tag}">${tag}</a>`).join("")}
                                </div>
                            </div>
                            <div class="prose max-w-none text-gray-500 dark:text-gray-400">
                                ${data.description}
                            </div>
                        </div>
                        <div class="text-base font-medium leading-6">
                            <a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label='${data.title}' href="${url}">
                                Read more →
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </li>`
    }



    render({ name, collections }) {
        const posts = collections.featured.map((post) => this.createItem(post.data, post.url)).join("");
        return `<div class="divide-y divide-gray-200 dark:divide-gray-700">
    <div class="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Latest</h1>
        <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">A blog created with Next.js and Tailwind.css</p>
    </div>
    <ul class="divide-y divide-gray-200 dark:divide-gray-700">
        ${posts}
        <li class="py-12">
            <article>
                <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                        <dt class="sr-only">Published on</dt>
                        <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"><time datetime="2023-08-05T00:00:00.000Z">August 5, 2023</time></dd>
                    </dl>
                    <div class="space-y-5 xl:col-span-3">
                        <div class="space-y-6">
                            <div>
                                <h2 class="text-2xl font-bold leading-8 tracking-tight">
                                    <a class="text-gray-900 dark:text-gray-100" href="/blog/release-of-tailwind-nextjs-starter-blog-v2.0">Release of Tailwind Nextjs Starter Blog v2.0</a>
                                </h2>
                                <div class="flex flex-wrap">
                                    <a class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/next-js">next-js</a>
                                    <a class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/tailwind">tailwind</a>
                                    <a class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/guide">guide</a>
                                    <a class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/feature">feature</a>
                                </div>
                            </div>
                            <div class="prose max-w-none text-gray-500 dark:text-gray-400">
                                Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup.Discover the new features and how to migrate from V1.
                            </div>
                        </div>
                        <div class="text-base font-medium leading-6">
                            <a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label='Read more: "Release of Tailwind Nextjs Starter Blog v2.0"' href="/blog/release-of-tailwind-nextjs-starter-blog-v2.0">
                                Read more →
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </li>
        <li class="py-12">
            <article>
                <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                        <dt class="sr-only">Published on</dt>
                        <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"><time datetime="2021-08-07T15:32:14.000Z">August 7, 2021</time></dd>
                    </dl>
                    <div class="space-y-5 xl:col-span-3">
                        <div class="space-y-6">
                            <div>
                                <h2 class="text-2xl font-bold leading-8 tracking-tight"><a class="text-gray-900 dark:text-gray-100" href="/blog/new-features-in-v1">New features in v1</a></h2>
                                <div class="flex flex-wrap">
                                    <a class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/next-js">next-js</a>
                                    <a class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/tailwind">tailwind</a>
                                    <a class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/guide">guide</a>
                                </div>
                            </div>
                            <div class="prose max-w-none text-gray-500 dark:text-gray-400">An overview of the new features released in v1 - code block copy, multiple authors, frontmatter layout and more</div>
                        </div>
                        <div class="text-base font-medium leading-6">
                            <a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label='Read more: "New features in v1"' href="/blog/new-features-in-v1">Read more →</a>
                        </div>
                    </div>
                </div>
            </article>
        </li>
        <li class="py-12">
            <article>
                <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                        <dt class="sr-only">Published on</dt>
                        <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"><time datetime="2021-05-02T00:00:00.000Z">May 2, 2021</time></dd>
                    </dl>
                    <div class="space-y-5 xl:col-span-3">
                        <div class="space-y-6">
                            <div>
                                <h2 class="text-2xl font-bold leading-8 tracking-tight">
                                    <a class="text-gray-900 dark:text-gray-100" href="/blog/nested-route/introducing-multi-part-posts-with-nested-routing">Introducing Multi-part Posts with Nested Routing</a>
                                </h2>
                                <div class="flex flex-wrap">
                                    <a class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/multi-author">multi-author</a>
                                    <a class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/next-js">next-js</a>
                                    <a class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/feature">feature</a>
                                </div>
                            </div>
                            <div class="prose max-w-none text-gray-500 dark:text-gray-400">
                                The blog template supports posts in nested sub-folders. This can be used to group posts of similar content e.g. a multi-part course. This post is itself an example of a nested route!
                            </div>
                        </div>
                        <div class="text-base font-medium leading-6">
                            <a
                                class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                aria-label='Read more: "Introducing Multi-part Posts with Nested Routing"'
                                href="/blog/nested-route/introducing-multi-part-posts-with-nested-routing"
                            >
                                Read more →
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </li>
        <li class="py-12">
            <article>
                <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                        <dt class="sr-only">Published on</dt>
                        <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"><time datetime="2021-01-12T00:00:00.000Z">January 12, 2021</time></dd>
                    </dl>
                    <div class="space-y-5 xl:col-span-3">
                        <div class="space-y-6">
                            <div>
                                <h2 class="text-2xl font-bold leading-8 tracking-tight"><a class="text-gray-900 dark:text-gray-100" href="/blog/introducing-tailwind-nextjs-starter-blog">Introducing Tailwind Nextjs Starter Blog</a></h2>
                                <div class="flex flex-wrap">
                                    <a class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/next-js">next-js</a>
                                    <a class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/tailwind">tailwind</a>
                                    <a class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/guide">guide</a>
                                </div>
                            </div>
                            <div class="prose max-w-none text-gray-500 dark:text-gray-400">
                                Looking for a performant, out of the box template, with all the best in web technology to support your blogging needs? Checkout the Tailwind Nextjs Starter Blog template.
                            </div>
                        </div>
                        <div class="text-base font-medium leading-6">
                            <a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label='Read more: "Introducing Tailwind Nextjs Starter Blog"' href="/blog/introducing-tailwind-nextjs-starter-blog">
                                Read more →
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </li>
        <li class="py-12">
            <article>
                <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                        <dt class="sr-only">Published on</dt>
                        <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"><time datetime="2020-12-21T00:00:00.000Z">December 21, 2020</time></dd>
                    </dl>
                    <div class="space-y-5 xl:col-span-3">
                        <div class="space-y-6">
                            <div>
                                <h2 class="text-2xl font-bold leading-8 tracking-tight"><a class="text-gray-900 dark:text-gray-100" href="/blog/deriving-ols-estimator">Deriving the OLS Estimator</a></h2>
                                <div class="flex flex-wrap">
                                    <a class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/next-js">next-js</a>
                                    <a class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/math">math</a>
                                    <a class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="/tags/ols">ols</a>
                                </div>
                            </div>
                            <div class="prose max-w-none text-gray-500 dark:text-gray-400">How to derive the OLS Estimator with matrix notation and a tour of math typesetting using markdown with the help of KaTeX.</div>
                        </div>
                        <div class="text-base font-medium leading-6">
                            <a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label='Read more: "Deriving the OLS Estimator"' href="/blog/deriving-ols-estimator">Read more →</a>
                        </div>
                    </div>
                </div>
            </article>
        </li>
    </ul>
</div>
<div class="flex justify-end text-base font-medium leading-6"><a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label="All posts" href="/blog">All Posts →</a></div>
<div class="flex items-center justify-center pt-4">
    <div>
        <div class="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">Subscribe to the newsletter</div>
        <form class="flex flex-col sm:flex-row">
            <div>
                <label for="email-input">
                    <span class="sr-only">Email address</span>
                    <input
                        autocomplete="email"
                        class="focus:ring-primary-600 w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 dark:bg-black"
                        id="email-input"
                        placeholder="Enter your email"
                        required=""
                        type="email"
                        name="email"
                    />
                </label>
            </div>
            <div class="mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3">
                <button
                    class="bg-primary-500 w-full rounded-md py-2 px-4 font-medium text-white sm:py-0 hover:bg-primary-700 dark:hover:bg-primary-400 focus:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black"
                    type="submit"
                >
                    Sign up
                </button>
            </div>
        </form>
    </div>
</div>
`;
    }
}

export default Home;


