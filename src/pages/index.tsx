import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { HomepageHeader } from "../components/HomepageHeader";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="LeetCode and Codewars solutions"
    >
      <HomepageHeader />
      <main>
        <h2 className="text--center padding-top--md ">刷題記錄</h2>
      </main>
    </Layout>
  );
}
