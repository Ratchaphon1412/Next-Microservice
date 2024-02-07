/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        // Will be available on both server and client
        baseURL: process.env.BASE_URL || 'https://microserivce.kong.ratchaphon1412.co:8443',
    },
}


module.exports = nextConfig
