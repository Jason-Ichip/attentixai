module.exports = function(eleventyConfig) {
  // Copy static files
  eleventyConfig.addPassthroughCopy("previews");
  eleventyConfig.addPassthroughCopy("pages");

  // Set input and output directories
  return {
    dir: {
      input: "pages",
      output: "dist",
      includes: "../_includes"
    },
    templateFormats: ["md", "html"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid"
  };
};