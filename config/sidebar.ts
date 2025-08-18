import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Sidebar configuration for Docusaurus.
 * Defines the navigation structure for the documentation section.
 */
const sidebars: SidebarsConfig = {
  pulsebi: [
    // Business Intelligence section
    {
      type: "category",
      label: "PulseBI Platform",
      collapsible: false, // Always expanded
      link: { type: "doc", id: "index" }, // Links to main BI doc
      items: ["quick-start", "personas"],
    },

    // PulseBI Studio section
    {
      type: "category",
      label: "PulseBI Studio",
      collapsible: false,
      link: { type: "doc", id: "studio/index" }, // Links to main Studio doc
      items: [
        "studio/manage-business-engines",
        "studio/manage-clusters",
        {
          type: "category",
          label: "Actions",
          link: { type: "doc", id: "studio/actions/index" }, // Links to Actions overview
          items: [
            // Uncomment and add as needed:
            // 'studio/actions/logs',
            // 'studio/actions/json',
            // 'studio/actions/node-red',
          ],
        },
      ],
    },

    // PulseBI Engine section
    {
      type: "category",
      label: "PulseBI Engine",
      collapsible: false,
      link: { type: "doc", id: "engine/index" }, // Links to main Engine doc
      items: [
        "engine/configuration",
        "high-availability",
        "engine/database",
        "engine/prometheus",
      ],
    },

    // PulseBI Alerting section
    {
      type: "category",
      label: "PulseBI Alert",
      collapsible: false,
      link: { type: "doc", id: "alerting/index" }, // Links to main Alerting doc
      items: [
        "alerting/manage-alert-rules",
        "alerting/analyze-alert-rules",
        "alerting/variables",
        "alerting/thresholds",
        {
          type: "category",
          label: "Data Sources",
          link: { type: "doc", id: "alerting/datasources/index" }, // Links to Data Sources overview
          items: [
            "alerting/datasources/postgresql",
            "alerting/datasources/prometheus",
            "alerting/datasources/infinity",
            // Uncomment and add as needed:
            // 'alerting/datasources/loki',
          ],
        },
      ],
    },

    // Tutorials section
    {
      type: "category",
      label: "Tutorials",
      link: { type: "doc", id: "tutorials" }, // Links to Tutorials overview
      items: [], // Placeholder for future tutorial docs
    },

    // Standalone Release page
    "release",
    "eula",
  ],
};

export default sidebars;
