import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: false,
    images: {
        domains: ["content1.rozetka.com.ua", "content2.rozetka.com.ua", "content.rozetka.com.ua"],
    },
};

export default nextConfig;
