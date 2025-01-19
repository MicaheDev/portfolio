import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    // Aquí puedes agregar configuraciones personalizadas si es necesario
    return config;
  },/* config options here */
};

export default nextConfig;
