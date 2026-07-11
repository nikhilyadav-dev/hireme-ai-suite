module.exports = [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
  },
  {
    name: "strapi::cors",
    config: {
      origin: ["http://localhost:5173", "https://hiremeai-ten.vercel.app"],
      credentials: true,
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
