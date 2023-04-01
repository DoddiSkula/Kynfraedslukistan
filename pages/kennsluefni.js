import { indexQuery } from "../lib/queries";
import { getClient, overlayDrafts } from "../lib/sanity.server";
import { PreviewSuspense } from "next-sanity/preview";
import { lazy } from "react";
import Layout from "../components/layout";
import Head from "next/head";
import { WEBSITE_NAME } from "../lib/constants";

const LandingPreview = lazy(() => import("../components/landing-preview"));

export default function KennsluefniPage({ allPosts, preview }) {
  if (preview) {
    return (
      <PreviewSuspense fallback="Loading...">
        <LandingPreview allPosts={allPosts} />
      </PreviewSuspense>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{`Kennsluefni - ${WEBSITE_NAME}`}</title>
      </Head>
      <div className="h-screen bg-gradient-to-b from-white to-sky-50">
        <h1>Kennsluefni</h1>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery));
  return {
    props: { allPosts, preview },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
