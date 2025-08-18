/**
 * Footer Configuration
 * Defines the layout, logo, links, and copyright for the PulseBI Platform footer
 */
export const FOOTER = {
  // Logo settings with light/dark mode support
  logo: {
    alt: "PulseBI Platform",
    src: "img/logo.svg",
    srcDark: "img/logo.svg",
    width: 150, // Optional: Adds consistent sizing; adjust as needed
  },

  // Theme style: 'light', 'dark', or 'auto' (Docusaurus default)
  style: "dark",

  // Link columns for navigation
  links: [
    {
      title: "Product",
      items: [
        {
          label: "Quick Start",
          to: "/docs/quick-start/",
          className: "footer-link icon-quick-link",
        },
        {
          label: "Tutorials",
          to: "/docs/tutorials/",
          className: "footer-link icon-tutorials-link",
        },
        {
          label: "Release Notes",
          to: "/docs/release/",
          className: "footer-link icon-release-link",
        },
        {
          label: "Support Portal",
          href: "https://support.volkovlabs.io",
          className: "footer-link icon-support-link",
        },
      ],
    },
    {
      title: "PulseBI Platform",
      items: [
        {
          label: "PulseBI Studio",
          to: "/docs/studio/",
          className: "footer-link icon-studio-link",
        },
        {
          label: "PulseBI Engine",
          to: "/docs/engine/",
          className: "footer-link icon-engine-link",
        },
        {
          label: "PulseBI Alert",
          to: "/docs/alerting/",
          className: "footer-link icon-alerting-link",
        },
      ],
    },
    {
      title: "Volkov Labs",
      items: [
        {
          label: "About Us",
          to: "/team/",
          className: "footer-link icon-team-link",
        },
        {
          label: "Privacy Policy",
          to: "/privacy/",
          className: "footer-link icon-privacy-link",
        },
        {
          label: "Terms and Conditions",
          to: "/terms/",
          className: "footer-link icon-terms-link",
        },
        {
          label: "Disclaimer",
          to: "/disclaimer/",
          className: "footer-link icon-disclaimer-link",
        },
      ],
    },
  ],

  // Dynamic copyright with company details
  copyright: `Copyright © ${new Date().getFullYear()} Volkov Labs, USA. All rights reserved.`,
};
