
import type { MetadataRoute } from "next";

const BASE_URL = "https://wellranked.co.uk";

const routes = [
  "",
  "/about",
  "/blog",
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
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/blog" ? 0.7 : 0.8,
  }));
}