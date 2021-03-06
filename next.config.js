// next.config.js

const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  handleImages: ["jpeg", "png", "svg"],
  images: {
    disableStaticImages: true,
  },
  target: "serverless",
});
