import { PresetConfig } from "@docusaurus/types";

/**
 * Docusaurus preset configurations.
 * Defines presets for documentation, blog, analytics, theming, and API specs.
 */
export const PRESETS: PresetConfig[] = [
  // Classic preset for docs, blog, analytics, and theme customization
  [
    "classic",
    {
      docs: {
        routeBasePath: "docs", // Base route for documentation
        sidebarPath: require.resolve("./sidebar.ts"), // Sidebar configuration file
      },
      blog: {
        postsPerPage: "ALL", // Display all posts on a single page
        blogSidebarCount: 0, // Disable blog sidebar
        showReadingTime: false, // Hide reading time estimates
        onUntruncatedBlogPosts: "ignore", // Ignore untruncated posts warnings
        onInlineAuthors: "ignore", // Ignore inline authors warnings
      },
      gtag: {
        trackingID: process.env.GTAG || "G-", // Google Analytics tracking ID with fallback
        anonymizeIP: true, // Enable IP anonymization for privacy
      },
      theme: {
        customCss: require.resolve("../src/css/custom.css"), // Custom CSS file for theming
      },
    },
  ],
  // Redocusaurus preset for API documentation
  [
    "redocusaurus",
    {
      specs: [
        {
          spec: "docs/engine-spec.json", // API specification file
          route: "docs/api/", // Base route for API docs
        },
      ],
    },
  ],
];
