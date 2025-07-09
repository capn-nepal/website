const withExportImages = require('next-export-optimize-images');
import type { NextConfig } from 'next';

// const repo = 'website';

const nextConfig: NextConfig = withExportImages({
    output: 'export',
    trailingSlash: true, // optional, depends on your server/CDN setup
    // basePath: `/${repo}`,
    // assetPrefix: `/${repo}/`,
    images: {
        domains: ['https://capn-minio-2.k8s.dev.togglecorp.com/capn-media/media/',],
        deviceSizes: [640, 960, 1280, 1600, 1920],
    },
});

export default nextConfig;
