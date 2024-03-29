import { fileURLToPath } from 'node:url'
import createJiti from 'jiti'
const jiti = createJiti(fileURLToPath(import.meta.url))

// Using jiti we can import .ts files :)
jiti('./src/env')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "*",
                protocol: "https"
            }
        ]
    }
}

export default nextConfig
