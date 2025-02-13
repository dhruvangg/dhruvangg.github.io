import dayjs from "dayjs";

class Home {
    data() {
        return {
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

        const sortedPosts = collections.featured.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));

        const posts = sortedPosts.map((post) => this.createItem(post.data, post.url)).join("");
        return `<div class="divide-y divide-gray-200 dark:divide-gray-700">
                <div class="space-y-2 pb-8 pt-6 md:space-y-5">
                    <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Latest</h1>
                    <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">A blog created with 11ty.js and Tailwind.css</p>
                </div>
                <ul class="divide-y divide-gray-200 dark:divide-gray-700">
                    ${posts}
                </ul>
            </div>
            <div class="flex justify-end text-base font-medium leading-6"><a class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label="All posts" href="/blog">All Posts →</a></div>
        `;
    }
}

export default Home;


