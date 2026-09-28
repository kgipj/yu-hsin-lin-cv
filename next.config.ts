import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const githubPagesBasePath = '/yu-hsin-lin-cv';

const nextConfig: NextConfig = isGitHubPages
  ? {
      output: 'export',
      assetPrefix: `${githubPagesBasePath}/`,
      images: {
        unoptimized: true,
      },
    }
  : {};

export default nextConfig;
