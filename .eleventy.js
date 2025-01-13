import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        formats: ["avif", "webp", "jpeg"],
        widths: ["auto"],
        htmlOptions: {
            imgAttributes: {
                loading: "lazy",
                decoding: "async",
            },
            pictureAttributes: {}
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
