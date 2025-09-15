import clsx from "clsx";
import React from "react";
import Head from "@docusaurus/Head";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import ThemedImage from "@theme/ThemedImage";
import styles from "../css/index.module.css";

/**
 * Header Component
 */
const Header = ({ siteConfig }) => (
  <header>
    {/* Hero section */}
    <div className="relative isolate overflow-hidden pt-14 pb-16 sm:pb-20">
      <img
        alt=""
        src="/img/platform.jpg"
        className="absolute inset-0 -z-10 size-full object-cover brightness-30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center text-gray-200">
            <h1 className={clsx("hero__title")}>PulseBI Platform</h1>
            <p className="hero__subtitle margin-vert--md">
              Tailored to address real-world production demands, this platform
              revolutionizes alerting and analytics in Grafana.
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
        </div>

        {/* Logo cloud */}
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          <a href="#pulsebi-studio">
            <img
              alt="PulseBI Studio"
              src="/img/docs/business-studio/logo.dark.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
          </a>
          <a href="#pulsebi-engine">
            <img
              alt="PulseBI Engine"
              src="/img/docs/business-engine/logo.dark.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
          </a>
          <a href="#pulsebi-alert">
            <img
              alt="PulseBI Alert"
              src="/img/docs/business-alerting/logo.dark.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
          </a>
          <a href="#pulsebi-chronicles">
            <img
              alt="PulseBI Chronicles"
              src="/img/docs/chronicles/logo.dark.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
          </a>
          <a href="#pulsebi-insight">
            <img
              alt="PulseBI Insight"
              src="/img/docs/insight/logo.dark.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
          </a>
          <a href="#pulsebi-sphere">
            <img
              alt="PulseBI Sphere"
              src="/img/docs/sphere/logo.dark.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
          </a>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75"
        />
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
    <section
      className="container margin-vert--xl text--center"
      id="pulsebi-studio"
    >
      <h2 className="hero__title">
        <ThemedImage
          sources={{
            light: useBaseUrl("/img/docs/business-studio/logo.svg"),
            dark: useBaseUrl("/img/docs/business-studio/logo.dark.svg"),
          }}
          width="64px"
        />
        &nbsp; Manage Your Analytics Core
      </h2>
      <p className="hero__subtitle margin-vert--md">
        PulseBI Studio is the management hub for configuring the platform’s
        analytics capabilities.
      </p>
      <p className="hero__subtitle margin-vert--md">
        <a href="https://github.com/VolkovLabs/pulsebi/releases">
          <ThemedImage
            sources={{
              light: useBaseUrl("/img/docs/business-studio.gif"),
              dark: useBaseUrl("/img/docs/business-studio.dark.gif"),
            }}
            alt={siteConfig.tagline}
            className={styles.studio}
          />
        </a>
      </p>
      <p className="hero__subtitle margin-vert--md">
        It enables users to manage PulseBI Engine settings, create alert rules
        for PulseBI Alert, and generate reports for PulseBI Chronicles,
        streamlining analytics workflows.
      </p>
    </section>
    <section className="hero hero--primary" id="pulsebi-engine">
      <div className="container margin-vert--md">
        <div className="row align-items-center">
          <div className="col col--7">
            <h2 className={clsx("hero__title")}>PulseBI Engine</h2>
            <p className="hero__subtitle margin-vert--md">
              The PulseBI Engine is the heart of the platform, powering
              real-time data processing and query execution for all components.
            </p>
            <p className="hero__subtitle margin-vert--md">
              It connects seamlessly to Grafana’s data sources, ensuring
              high-performance analytics.
            </p>
          </div>
          <div className="col col--5 text--center">
            <ThemedImage
              sources={{
                light: useBaseUrl("/img/docs/business-engine/logo.svg"),
                dark: useBaseUrl("/img/docs/business-engine/logo.dark.svg"),
              }}
              width="50%"
              className={styles.headerImage}
            />
          </div>
        </div>
      </div>
    </section>

    <section
      className="container margin-vert--xl text--center"
      id="pulsebi-alert"
    >
      <h2 className="hero__title">
        <ThemedImage
          sources={{
            light: useBaseUrl("/img/docs/business-alerting/logo.svg"),
            dark: useBaseUrl("/img/docs/business-alerting/logo.dark.svg"),
          }}
          width="64px"
        />
        &nbsp; Real-Time Notifications
      </h2>
      <p className="hero__subtitle margin-vert--md">
        PulseBI Alert delivers real-time notifications to keep teams responsive
        to critical data events.
      </p>
      <p className="hero__subtitle margin-vert--md">
        <a href="https://github.com/VolkovLabs/pulsebi/releases">
          <ThemedImage
            sources={{
              light: useBaseUrl("/img/docs/alerting.png"),
              dark: useBaseUrl("/img/docs/alerting.dark.png"),
            }}
            alt={siteConfig.tagline}
            className={styles.studio}
          />
        </a>
      </p>
      <p className="hero__subtitle margin-vert--md">
        Configured via PulseBI Studio, it sends query-based alerts with Grafana
        panel screenshots through channels like Slack, email, Grafana Incident,
        or KeepHQ.
      </p>
    </section>

    <section className="hero hero--primary" id="pulsebi-chronicles">
      <div className="container margin-vert--md">
        <div className="row align-items-center">
          <div className="col col--7">
            <h2 className={clsx("hero__title")}>PulseBI Chronicles</h2>
            <p className="hero__subtitle margin-vert--md">
              PulseBI Chronicles transforms data into compelling narratives.
            </p>
            <p className="hero__subtitle margin-vert--md">
              Managed through PulseBI Studio, it generates interactive reports
              with embedded Grafana visualizations, offering automated delivery
              and storytelling tools.
            </p>
          </div>
          <div className="col col--5 text--center">
            <ThemedImage
              sources={{
                light: useBaseUrl("/img/docs/chronicles/logo.svg"),
                dark: useBaseUrl("/img/docs/chronicles/logo.dark.svg"),
              }}
              width="50%"
              className={styles.headerImage}
            />
          </div>
        </div>
      </div>
    </section>

    <section
      className="container margin-vert--xl text--center"
      id="pulsebi-insight"
    >
      <h2 className="hero__title">
        <ThemedImage
          sources={{
            light: useBaseUrl("/img/docs/insight/logo.svg"),
            dark: useBaseUrl("/img/docs/insight/logo.dark.svg"),
          }}
          width="64px"
        />
        &nbsp; AI-Driven Intelligence
      </h2>
      <p className="hero__subtitle margin-vert--md">
        PulseBI Insight brings AI-driven intelligence to the platform,
        leveraging LLM models from xAI and Anthropic to deliver descriptive
        analytics and conversational queries.
      </p>
      <p className="hero__subtitle margin-vert--md">
        <a href="https://github.com/VolkovLabs/pulsebi/releases">
          <ThemedImage
            sources={{
              light: useBaseUrl("/img/docs/slack-notification.png"),
              dark: useBaseUrl("/img/docs/slack-notification.png"),
            }}
            alt={siteConfig.tagline}
            className={styles.studio}
          />
        </a>
      </p>
      <p className="hero__subtitle margin-vert--md">
        It supports natural language questions and automated insights for alerts
        and reports.
      </p>
    </section>

    <section className="hero hero--primary" id="pulsebi-sphere">
      <div className="container margin-vert--md">
        <div className="row align-items-center">
          <div className="col col--7">
            <h2 className={clsx("hero__title")}>PulseBI Sphere</h2>
            <p className="hero__subtitle margin-vert--md">
              A centralized hub for real-time monitoring and collaborative
              decision-making.
            </p>
            <p className="hero__subtitle margin-vert--md">
              It integrates Grafana dashboards, PulseBI Alert notifications,
              PulseBI Insight descriptive insights, and PulseBI Engine data for
              a unified analytics experience.
            </p>
          </div>
          <div className="col col--5 text--center">
            <ThemedImage
              sources={{
                light: useBaseUrl("/img/docs/sphere/logo.svg"),
                dark: useBaseUrl("/img/docs/sphere/logo.dark.svg"),
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
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
      </Head>
      <Header siteConfig={siteConfig} />
      <Main siteConfig={siteConfig} />
    </Layout>
  );
};

export default Home;
