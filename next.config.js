/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images:{
  //   domain:["links.papareact.com", "image.tmdb.org", "image.tmdb.org"]
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
