/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        // Will be available on both server and client
        baseURL: process.env.BASEURL || 'https://gateway.ratchaphon1412.co',
    },
}


module.exports = nextConfig
