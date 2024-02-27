/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        APP_API_URL: process.env.REACT_APP_API,
    },
};

export default nextConfig;
