/**
 * CashIn public-site Worker.
 * Static homepage and public assets are served from the ASSETS binding.
 * Keep this entry point small; add authenticated dashboard/API routing here later.
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Reserve application routes for future authenticated functionality.
    // Authentication and authorization must be implemented before serving private data.
    if (url.pathname.startsWith("/api/")) {
      return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
        headers: { "content-type": "application/json; charset=utf-8" }
      });
    }

    // Cloudflare Assets serves /, /index.html, the logo and other public files.
    return env.ASSETS.fetch(request);
  }
};
