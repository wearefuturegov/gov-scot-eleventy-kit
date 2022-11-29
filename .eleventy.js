module.exports = (eleventyConfig) => {
  // Get parcel and eleventy hmr to behave
  eleventyConfig.setWatchThrottleWaitTime(100);

  // Copy over GOV.UK assets
  eleventyConfig.addPassthroughCopy("assets");
};
