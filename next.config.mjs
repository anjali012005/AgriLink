/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '**',
            },
            {
                protocol: "https",
                hostname: "tse3.mm.bing.net",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "tse1.mm.bing.net",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "tse4.mm.bing.net",
                pathname: "**",
            },
        ],
    },
};

export default nextConfig;
