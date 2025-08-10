import { Config } from "@docusaurus/types";
import { PRESETS, THEME_CONFIG } from "./config";

/**
 * Docusaurus site configuration.
 * Defines core settings for the PulseBI Platform documentation site.
 */
const config: Config = {
  // Base URL for the site
  baseUrl: "/", // Root path for all routes

  // Favicon for the site
  favicon: "img/favicon.ico",

  // Behavior when broken links are detected
  onBrokenLinks: "throw", // Fail build if links are broken
  onBrokenMarkdownLinks: "throw", // Fail build if Markdown links are broken

  // GitHub organization name
  organizationName: "VolkovLabs",

  // Plugins configuration (imported from ./config)
  plugins: [],

  // Presets configuration (imported from ./config)
  presets: PRESETS,

  // GitHub project name
  projectName: "pulsebi.studio",

  // Site tagline
  tagline:
    "Revolutionize Your Business Insights with High-Performance, Scalable, and Alert-Driven Analytics!",

  // Theme configuration (imported from ./config)
  themeConfig: THEME_CONFIG,

  markdown: {
    mermaid: true,
  },

  // Additional themes
  themes: ["@docusaurus/theme-mermaid"],

  // Site title
  title: "PulseBI Platform",

  // Ensure URLs end with a trailing slash
  trailingSlash: true,

  // Base URL for the deployed site
  url: "https://pulsebi.studio",
};

export default config;
