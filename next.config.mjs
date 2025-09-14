/** 
 * next.config.mjs
 * Versi ini aman untuk build tanpa error Sentry.
 * Bisa diaktifkan Sentry lagi nanti kalau diperlukan.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // mode ketat React
    swcMinify: true,       // menggunakan SWC untuk minify build
    // konfigurasi lain bisa ditambahkan di sini
};

export default nextConfig;
