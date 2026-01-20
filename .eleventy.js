import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/admin");

    eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
        if (data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
            return false;
        }
    });

    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        extensions: "html",
        formats: ["avif", "webp", "jpeg"],
        widths: ["auto"],
        defaultAttributes: {
            loading: "lazy",
            decoding: "async",
        },
    });

    eleventyConfig.addCollection("blogPosts", function (collectionApi) {
        return collectionApi.getFilteredByGlob("./src/posts/*.md").reverse();
    });
    return {
        dir: {
            input: "src", // Input directory
            includes: "_includes", // Layouts and includes
            output: "_site", // Output directory
        },
    };
};
