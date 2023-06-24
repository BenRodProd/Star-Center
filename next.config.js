/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    env: {
      NASA_KEY: process.env.NASA_KEY,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'apod.nasa.gov',
          
          },
          {
            protocol: 'http',
            hostname: 'mars.jpl.nasa.gov'
          },
          {
            protocol: 'https',
            hostname: 'mars.nasa.gov'
          }
        ],
      },
  };