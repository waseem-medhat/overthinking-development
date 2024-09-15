const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

    eleventyConfig.addPassthroughCopy("style.css");

    eleventyConfig.addCollection("posts", function(collection) {
        return collection
            .getFilteredByGlob("posts/*.md")
            .sort((a, b) => b.date - a.date);
    });

    eleventyConfig.addFilter("formatDate", function name(date) {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    })
}
