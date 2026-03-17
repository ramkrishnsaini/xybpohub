import type { NextConfig } from 'next'

// Set NEXT_PUBLIC_BASE_PATH in your environment when deploying to a GitHub
// project page (e.g. /xybpohub). Leave empty for a custom domain or user/org page.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const config: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
}

export default config
