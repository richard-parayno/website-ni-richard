module.exports = function(eleventyConfig) {
  

  return {
    passthroughFileCopy: true,
    templateFormats: ['md', 'css', 'html', 'yml', 'pug'],
  }
}