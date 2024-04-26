/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [ {
            protocol: 'https',
            hostname: 'coffeegeek.co',  
          }]
    }
};

export default nextConfig;
