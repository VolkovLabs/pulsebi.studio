import clsx from "clsx";
import React from "react";
import Head from "@docusaurus/Head";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import ThemedImage from "@theme/ThemedImage";
import { Intelligence } from "../components";
import styles from "../css/index.module.css";

/**
 * Header Component
 * Showcases Business Suite intro and plugins
 */
const Header = ({ siteConfig }) => (
  <header className="hero hero--primary">
    <div className="container margin-vert--md">
      <div className="row align-items-center">
        <div className="col col--7">
          <h2 className={clsx("hero__title")}>PulseBI Platform</h2>
          <p className="hero__subtitle margin-vert--md">
            Tailored to address real-world production demands, this platform
            revolutionizes alerting and analytics in Grafana.
          </p>
          <p className="hero__subtitle">
            PulseBI Studio offers streamlined interactions, centralized
            management, and advanced features like high availability and load
            balancing.
          </p>
          <div className="margin-vert--lg">
            <a
              className={clsx(
                "button button--primary button--lg",
                styles.getStarted
              )}
              href="/docs/"
            >
              Get Started →
            </a>
          </div>
        </div>
        <div className="col col--5 text--center">
          <a href="/docs/">
            <ThemedImage
              sources={{
                light: useBaseUrl("/img/docs/business-studio.gif"),
                dark: useBaseUrl("/img/docs/business-studio.dark.gif"),
              }}
              alt={siteConfig.tagline}
              className={styles.big}
            />
          </a>
        </div>
      </div>
    </div>
  </header>
);

/**
 * Main Component
 * Highlights Business Intelligence and blog sections
 */
const Main = ({ siteConfig }) => (
  <main>
    <section className="container margin-vert--xl">
      <div className="margin-vert--lg">
        <Intelligence />
      </div>
    </section>
  </main>
);

/**
 * Home Component
 * Renders the landing page
 */
const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="PulseBI Platform by Volkov Labs"
      description="A dynamic Business Intelligence solution designed to ignite enterprise analytics"
    >
      <Head>
        <meta property="og:image" content="/img/platform.png" />
        <script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=3103acc1-cdc9-4af8-a87c-b9a5c1eaa54d"
        />
      </Head>
      <Header siteConfig={siteConfig} />
      <Main siteConfig={siteConfig} />
    </Layout>
  );
};

export default Home;
