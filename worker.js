export default {
  fetch() {
      const timestamp = Math.floor(Date.now() / 1000);
      return new Response(timestamp.toString(), {
          headers: {
              'content-type': 'text/plain',
              'X-Powered-by': 'Cloudflare',
          },
      });
  },
};
