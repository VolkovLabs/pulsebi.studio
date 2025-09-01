import React from "react";
import Head from "@docusaurus/Head";
import { BlogPostProvider } from "@docusaurus/plugin-content-blog/client";
import BlogPostCard from "../BlogPostCard";
import styles from "./styles.module.css";

/**
 * Hero Component
 */
const Hero = () => (
  <header className="hero hero--primary">
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="hero__title margin-bottom--md">
            Forge Your Future with PulseBI Analytics
          </h1>
          <p className="hero__subtitle margin-vert--md">
            Dive into the world of data-driven insights with the PulseBI Blog.
            Explore expert articles, industry trends, and actionable tips on
            leveraging analytics to transform your business. Stay ahead with the
            latest updates and strategies tailored for success.
          </p>
        </div>
      </div>
    </div>
  </header>
);

/**
 * Header
 */
const Header = ({ items }) => {
  /**
   * Tags not to index
   */
  if (items.length < 24) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
      </>
    );
  }

  /**
   * Blog list
   */
  return (
    <>
      <Head>
        <meta property="og:image" content="/img/platform.png" />
      </Head>
      <Hero />
    </>
  );
};

/**
 * Blog Posts
 */
const BlogPostItems = ({ items }) => {
  return (
    <div className={styles.root}>
      <Header items={items} />

      <div className={styles.posts}>
        {items.map(({ content: BlogPostContent }) => (
          <BlogPostProvider
            key={BlogPostContent.metadata.permalink}
            content={BlogPostContent}
          >
            <BlogPostCard post={BlogPostContent} />
          </BlogPostProvider>
        ))}
      </div>
    </div>
  );
};

export default BlogPostItems;
