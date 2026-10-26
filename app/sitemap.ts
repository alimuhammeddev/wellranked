
import type { MetadataRoute } from "next";

const BASE_URL = "https://wellranked.co.uk";

const routes = [
  "",
  "/about",
  "/contact",
  "/growth-audit",
  "/growth-support",
  "/how-it-works",
  "/industries",
  "/package-section",
  "/services-section",
  "/why-wellranked",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}