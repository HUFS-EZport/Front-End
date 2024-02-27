// load .env
const { config } = require("dotenv");
config();

const API_ROOT_URL = (() => {
    const DEFAULT = "http://localhost:8080";

    const envApiUrl = process.env.EZPORTS_API_ROOT_URL;

    if (!envApiUrl || envApiUrl.trim() === "") {
        return DEFAULT;
    }

    return envApiUrl;
})();

/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true
    },
    sassOptions: {
        includePaths: [ require("path").join(__dirname, "src", "style") ]
    },
    env: {
        EZPORTS_API_ROOT_URL: API_ROOT_URL
    }
}

module.exports = nextConfig
