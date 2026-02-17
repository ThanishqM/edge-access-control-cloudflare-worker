export default {
  async fetch(request, env, ctx) {
    const ip = request.headers.get("CF-Connecting-IP");
    const country = request.cf?.country || "unknown";

    const blockedCountries = ["CN", "RU"];
    const isBlocked = blockedCountries.includes(country);

    if (isBlocked) {
      return new Response(JSON.stringify({
        status: "blocked",
        reason: "country_restriction",
        ip,
        country
      }), { status: 403 });
    }

    return new Response(JSON.stringify({
      status: "allowed",
      ip,
      country,
      message: "Access granted at Cloudflare edge"
    }), { headers: { "Content-Type": "application/json" } });
  }
};
