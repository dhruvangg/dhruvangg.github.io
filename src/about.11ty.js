class About {
    data() {
        return {
            title: "About",
            image: "./images/profile.jpeg",
            layout: "layout.11ty.js",
        };
    }
    render({ image }) {
        return `
        <div class="divide-y divide-gray-200 dark:divide-gray-700">
    <div class="space-y-2 pb-8 pt-6 md:space-y-5"><h1 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">About</h1></div>
    <div class="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div class="flex flex-col items-center space-x-2 pt-8">
            <img
                alt="avatar"
                loading="lazy"
                width="192"
                height="192"
                decoding="async"
                data-nimg="1"
                class="h-48 w-48 rounded-full"
                src="${image}"
                style="color: transparent;"
            />
            <h3 class="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">Dhruvang Gajjar</h3>
            <div class="text-gray-500 dark:text-gray-400">Senior Software Enginner</div>
            <div class="text-gray-500 dark:text-gray-400">Cygnet.one</div>
            <div class="flex space-x-3 pt-6">
                <a class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="mailto:dhurvangg@gmail.com">
                    <span class="sr-only">mail</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-8 w-8">
                        <title>Mail</title>
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                </a>
                <a class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="https://github.com/dhruvangg">
                    <span class="sr-only">github</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-8 w-8">
                        <title>GitHub</title>
                        <path
                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                        ></path>
                    </svg>
                </a>
                <a class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dhruvangg">
                    <span class="sr-only">linkedin</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-8 w-8">
                        <title>Linkedin</title>
                        <path
                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                        ></path>
                    </svg>
                </a>
            </div>
        </div>
        <div class="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            <p>Hi, I'm Dhruvang, a passionate software engineer with expertise in building web applications that combine creativity and functionality. Over the years, I've worked with a wide range of technologies, including JavaScript, React, Node.js, and more, to deliver scalable and efficient solutions.</p>
            <p>I love solving complex problems and crafting user-friendly experiences. Whether it's designing a Kanban board, creating private chat platforms, or implementing headless e-commerce solutions, I thrive on bringing ideas to life through code.</p>
            <p>Beyond coding, I enjoy learning about emerging technologies and exploring innovative ways to tackle real-world challenges. My blog is where I share insights, tutorials, and my journey as a developer.</p>
            <p>When I'm not coding, you'll find me brainstorming new project ideas or diving into topics like WebAssembly and software architecture.</p>
            <p>Let's connect and build something amazing!</p>
        </div>
    </div>
</div>

        `;
    }
}


export default About;