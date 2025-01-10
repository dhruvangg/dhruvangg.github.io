export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");

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
