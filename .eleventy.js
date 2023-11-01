// const Image = require("@11ty/eleventy-img");

// async function imageShortcode(src, alt, sizes) {
//   let metadata = await Image(`./src${src}`, {
//     widths: [180, 400, null],
//     formats: ["avif", "jpeg"],
//     urlPath: "/images/",
//     outputDir: "./public/images/"
//   });

//   let imageAttributes = {
//     alt,
//     sizes,
//     loading: "lazy",
//     decoding: "async"
//   };

//   return Image.generateHTML(metadata, imageAttributes);
// }

module.exports = function (eleventyConfig) {

  //for the eleventy-img function above
  // eleventyConfig.addNunjucksAsyncShortcode("EleventyImage", imageShortcode);

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