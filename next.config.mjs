import withPWAInit from "@ducanh2912/next-pwa";
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

const withPWA = withPWAInit({
  dest: "public",
});

export default withPWA(nextConfig);