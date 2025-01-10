class Projects {
    data() {
        return {
            title: "Projects",
            layout: "layout.11ty.js",
            projects: [{
                title: "Kanban Board",
                description: "A simple and intuitive Kanban board application for task management and organization. It allows users to create, edit, and move tasks across customizable columns, providing a visual workflow to track progress efficiently.",
                preview_link: "https://dhruvangg.github.io/kanban",
                source_code: "https://github.com/dhruvangg/kanban",
            }, {
                title: "Private Chat",
                description: "The Anonymous Private Chat Application allows users to create or join private chat rooms effortlessly—no login, no accounts, just instant messaging! This app is designed for fast, secure, and real-time communication with an emphasis on simplicity and user privacy.",
                source_code: "https://github.com/dhruvangg/private-chat",
            }, {
                title: "To do Application",
                description: "A simple to-do list application that allows users to create, edit, and delete tasks. It provides a visual representation of tasks, allowing users to track progress and prioritize their work.",
                preview_link: "https://dhruvangg.github.io/notes/",
                source_code: "https://github.com/dhruvangg/notes",
            }, {
                title: "Finance Guide",
                description: "MoneyInsightful is your trusted companion on the journey to financial literacy, offering a user-friendly platform tailored for beginners to intermediate learners. Whether you're just starting or looking to enhance your financial acumen, MoneyMinds provides accessible and digestible content to help you grasp the essentials of financial planning.",
                preview_link: "https://moneyinsightful.vercel.app/",
                source_code: "https://github.com/dhruvangg/moneyinsightful",
            }, {
                title: "Headless Ecommerce",
                description: "Ecommerce Website build on top of Shopify API. It provides a simple and user-friendly interface for exploring products, order goods and checkout.",
                preview_link: "https://dhruvangg.github.io/headless-shopify",
                source_code: "https://github.com/dhruvangg/headless-shopify",
            }]
        };
    }

    createProject(project) {
        const { title, description, preview_link, source_code } = project
        return `<div class="md max-w-[544px] p-4 md:w-1/2">
            <div class="h-full overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700">
                <!-- Image here -->
                <div class="p-6">
                    <h2 class="mb-3 text-2xl font-bold leading-8 tracking-tight text-indigo-500">
                        <a class="break-words" target="_blank" rel="noopener noreferrer" href="${preview_link ? preview_link : source_code}" aria-label="Link to ${title}">${title}</a>
                    </h2>
                    <p class="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
                        ${description}
                    </p>
                    <a
                        class="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="${source_code}"
                        aria-label="Link to ${title}"
                    >
                        Learn more →
                    </a>
                </div>
            </div>
        </div>`;
    }

    render({projects}) {
        return `<div class="divide-y divide-gray-200 dark:divide-gray-700">
        <div class="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Projects</h1>
            <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">Showcase your projects with a hero image (16 x 9)</p>
        </div>
        <div class="container py-12">
            <div class="-m-4 flex flex-wrap">
                ${projects.map((project) => this.createProject(project)).join("")}
            </div>
        </div>
    </div>`
    }
}

export default Projects;



// <a class="break-words" target="_blank" rel="noopener noreferrer" href="https://www.google.com" aria-label="Link to A Search Engine">
//                     <img
//                         alt="A Search Engine"
//                         loading="lazy"
//                         width="544"
//                         height="306"
//                         decoding="async"
//                         data-nimg="1"
//                         class="object-cover object-center md:h-36 lg:h-48"
//                         srcset="/_next/image?url=%2Fstatic%2Fimages%2Fgoogle.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fstatic%2Fimages%2Fgoogle.png&amp;w=1200&amp;q=75 2x"
//                         src="/_next/image?url=%2Fstatic%2Fimages%2Fgoogle.png&amp;w=1200&amp;q=75"
//                         style="color: transparent;"
//                     />
//                 </a>