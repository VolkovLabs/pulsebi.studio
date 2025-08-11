/**
 * Navigation Bar Configuration
 * Defines the logo, behavior, and menu items for the PulseBI Platform navbar
 */
export const NAVBAR = {
  // Hides navbar on scroll for a cleaner UI
  hideOnScroll: true,

  // Logo with light/dark mode support
  logo: {
    alt: "PulseBI Platform",
    src: "img/docs/logo.svg",
    srcDark: "img/docs/logo.dark.svg",
    width: 120, // Optional: Ensures consistent size; adjust as needed
  },

  // Menu items with dropdowns
  items: [
    {
      label: "Quick Start",
      to: "/docs/quick-start/",
      className: "header-link icon-quick-link",
    },
    {
      label: "Tutorials",
      to: "/docs/tutorials/",
      className: "header-link icon-tutorials-link",
    },
    {
      label: "Release Notes",
      to: "/docs/release/",
      className: "header-link icon-release-link",
    },
    {
      to: "/pricing/",
      position: "left",
      label: "Pricing",
      className: "header-link icon-pricing-link",
    },
    {
      to: "/blog/",
      position: "right",
      label: "Blog",
      className: "header-link icon-blog-link",
    },
    {
      to: "https://github.com/VolkovLabs/pulsebi-platform",
      position: "right",
      className: "header-link header-github-link",
    },
  ],
};
