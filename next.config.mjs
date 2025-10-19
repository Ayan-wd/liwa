/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    }, // 👈 enables static export mode

};

export default nextConfig;
