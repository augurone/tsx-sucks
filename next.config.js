/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, { dev = false }) {
        if (!dev) {
            config.optimization.minimize = true;
            // Additional customizations go here
        }
        return config;
    },
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
}

module.exports = nextConfig
