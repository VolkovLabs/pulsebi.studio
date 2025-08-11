import clsx from "clsx";
import React from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "../css/index.module.css";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";

/**
 * Header Component
 * Introduces Business Suite Enterprise benefits and video
 */
const Header = () => (
  <header className="hero hero--primary">
    <div className="container margin-vert--md">
      <div className="row align-items-center">
        <div className="col">
          <h2 className={clsx("hero__title")}>PulseBI Platform</h2>
          <p className="hero__subtitle margin-vert--md">
            Transform your analytics with the Business Intelligence platform for
            high-performance, scalable, and alert-driven insights in Grafana.
          </p>
          <div className="margin-vert--lg">
            <script
              async
              src="https://js.stripe.com/v3/pricing-table.js"
            ></script>
            <stripe-pricing-table
              pricing-table-id="prctbl_1RdhO9Eiej5nUsojctbZydKh"
              publishable-key="pk_live_51Q1pMcEiej5nUsojvz6cu1k1QH1R5mAHwWz1OotLIAh9qaQiXa70MjggtWr2bsmPqmUIZ6x5b7W9I6VD8QCE4ZxK00GBzofXYZ"
            ></stripe-pricing-table>
          </div>
        </div>
      </div>
      <div className="margin-vert--lg">
        <a
          className={clsx(
            "button button--primary button--lg",
            styles.getStarted
          )}
          href="https://pay.volkovlabs.io/p/login/6oEaGicwRgZ8gko144"
          target="_blank"
          rel="noopener noreferrer"
        >
          Partner Portal →
        </a>
      </div>
    </div>
  </header>
);

/**
 * Main Component
 * Displays pricing plans and contact section
 */
const Main = () => (
  <main>
    <section className="hero">
      <div className="container margin-vert--md">
        <div className="row align-items-center">
          <div className="col col--7">
            <h2 className={clsx("hero__title")}>Get in Touch</h2>
            <p className="hero__subtitle margin-vert--md">
              Ready to start? Click on <b>Support</b> to begin the
              conversation—we’re excited to connect!
            </p>
          </div>
          <div className="col col--5 text--center">
            <ThemedImage
              sources={{
                light: useBaseUrl("/img/index/support.dark.svg"),
                dark: useBaseUrl("/img/index/support.svg"),
              }}
              width="50%"
              className={styles.headerImage}
            />
          </div>
        </div>
      </div>
    </section>
  </main>
);

/**
 * Home Component
 * Renders the Business Suite Enterprise page
 */
const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Pricing | Volkov Labs"
      description="Business Intelligence platform for Grafana by Volkov Labs"
    >
      <Head>
        <meta property="og:image" content="/img/platform.png" />
        <script async src="https://js.stripe.com/v3/pricing-table.js" />
        <script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=3103acc1-cdc9-4af8-a87c-b9a5c1eaa54d"
        />
      </Head>
      <Header />
      <Main />
    </Layout>
  );
};

export default Home;
