/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        // Will be available on both server and client
        base_url: process.env.BASE_URL,
    },
}


module.exports = nextConfig
