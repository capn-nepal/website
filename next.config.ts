import type { NextConfig } from 'next';

// const repo = 'website';

const nextConfig: NextConfig = {
    output: 'export',
    trailingSlash: true, // optional, depends on your server/CDN setup
    // basePath: `/${repo}`,
    // assetPrefix: `/${repo}/`,
    images: {
        unoptimized: true, // disables Next.js image optimization (required for static)
    },
};

export default nextConfig;
