/*
 * @type {import('next').NextConfig}
 */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  reactStrictMode: false,
  env: {
    API_URL: "https://uno.yalladothis.com/",
    // API_URL: "https://api.unoestate.ae/",
  },
});
