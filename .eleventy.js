module.exports = function (eleventyConfig) {

// tells Eleventy to pass the CSS, favicons, and image files through to the final build.
eleventyConfig.addPassthroughCopy("./src/css/");

// tells the Eleventy dev server to watch the css directory and reload the site if the files in this directory change.
eleventyConfig.addWatchTarget("./src/css/");
eleventyConfig.addPassthroughCopy("./src/images/");

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};