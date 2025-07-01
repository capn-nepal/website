import type { NextConfig } from 'next';

const repo = 'website';
const pipelineType = process.env.PIPELINE_TYPE;

const nextConfig: NextConfig = {
    output: 'export',
    trailingSlash: true, // optional, depends on your server/CDN setup
    basePath: pipelineType === 'cd' ? `/${repo}` : undefined,
    assetPrefix: pipelineType === 'cd' ? `/${repo}/` : undefined,
    //images: {
    //    domains: ['https://capn-minio-2.k8s.dev.togglecorp.com/capn-media/media/',],
    //    deviceSizes: [640, 960, 1280, 1600, 1920],
    //},
};

export default nextConfig;
