import React from "react";
import { PluginItem } from "../types";

/**
 * IntelligenceList
 */
export const IntelligenceList: PluginItem[] = [
  {
    title: "User-Friendly Business Studio",
    name: "business-studio",
    description: (
      <>
        Simplifies Business Engine management, enabling non-technical users to
        configure, monitor, and maintain data workflows effortlessly.
      </>
    ),
    href: "/docs/studio/",
    isActive: true,
  },
  {
    title: "High-Performance Business Engine",
    name: "business-engine",
    description: (
      <>
        Provides robust performance with distributed load balancing and high
        availability, seamlessly integrating with Grafana for efficient data
        processing.
      </>
    ),
    href: "/docs/engine/",
    isActive: true, // Optional: Indicates active status
  },
  {
    title: "Load-Balanced Business Alerting",
    name: "business-alerting",
    description: (
      <>
        Offers customizable alert rules tied to Grafana panel queries, with
        support for thresholds and variables to deliver timely, relevant
        business metric notifications.
      </>
    ),
    href: "/docs/alerting/",
    isActive: true,
  },
];
