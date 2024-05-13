/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/login',
            permanent: true,
          },
        ]
    },
    images:{
      remotePatterns:[
        {
          protocol:'https',
          hostname:'avatar.iran.liara.run',
        }
      ]
    }
};

export default nextConfig;
