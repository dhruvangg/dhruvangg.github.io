const inspect = require("util").inspect;
const format = require('date-fns/format')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles/main.css");
  eleventyConfig.addPassthroughCopy("assets/img");

  eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`);
  eleventyConfig.addFilter('date', function (date, dateFormat) {
    return format(date, dateFormat)
  })

  eleventyConfig.addFilter('webp', function (name) {
    const filename = name.split(".").slice(0, -1);
    console.log(`/assets/img/webp/${filename}.webp`);
    return `/assets/img/webp/${filename}.webp`;
  });

  eleventyConfig.addFilter( "isArticlePage", function(url) {
    return url.split("/").includes('post')
  });

  // eleventyConfig.addFilter('topicFilter', function (collection, topic) {
  //   if (!topic) return collection;
  //   return collection.filter(item => item.data.topics.indexOf(topic) > -1)
  // });

  return {
    pathPrefix: "/"
  }
};