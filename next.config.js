/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   env: {
//     BASE_URL: "https://api-preview.rozgaarindia.com",
//     CHAT_URL : "https://chat.rozgaarindia.com"
//   },
//   images: {
//     unoptimized: true,
//     domains: ["api-preview.rozgaarindia.com"],
//   },
// };

// module.exports = nextConfig;


/**  @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  
`;

const withWebPack = {

  async rewrites() {
    return [
      {
        source: "/freelancer-:urltype/:catgory/:id",
        destination: "/freelancer/:urltype/:catgory/:id",
      },
     
    ];
  },
  env: {
    BASE_URL: "https://api-preview.rozgaarindia.com",
    CHAT_URL : "https://chat.rozgaarindia.com",
   
  },
  
  reactStrictMode: false,
  images: {
        unoptimized: true,
        domains: ["api-preview.rozgaarindia.com"],
      },
};

module.exports = withWebPack;

