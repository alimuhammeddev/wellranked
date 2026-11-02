
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // OpenAI
      {
        userAgent: ["GPTBot", "ChatGPT-User", "OAI-SearchBot"],
        allow: "/",
      },

      // Anthropic
      {
        userAgent: [
          "ClaudeBot",
          "Claude-User",
          "Claude-SearchBot",
          "Claude-Web",
          "anthropic-ai",
        ],
        allow: "/",
      },

      // Google
      {
        userAgent: [
          "Google-Extended",
          "GoogleOther",
          "Google-CloudVertexBot",
        ],
        allow: "/",
      },

      // Perplexity
      {
        userAgent: ["PerplexityBot", "Perplexity-User"],
        allow: "/",
      },

      // Apple
      {
        userAgent: ["Applebot", "Applebot-Extended"],
        allow: "/",
      },

      // Meta
      {
        userAgent: [
          "FacebookBot",
          "meta-externalagent",
          "meta-externalfetcher",
          "meta-webindexer",
        ],
        allow: "/",
      },

      // Microsoft
      {
        userAgent: "Bingbot",
        allow: "/",
      },

      // Amazon
      {
        userAgent: "Amazonbot",
        allow: "/",
      },

      // Other AI crawlers
      {
        userAgent: [
          "Bytespider",
          "CCBot",
          "YouBot",
          "Diffbot",
          "MistralAI-User",
          "DuckAssistBot",
          "cohere-ai",
          "cohere-training-data-crawler",
          "AI2Bot",
          "Timpibot",
        ],
        allow: "/",
      },

      // All other crawlers
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap: "https://wellranked.co.uk/sitemap.xml",
  };
}
