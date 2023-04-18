import { indexQuery } from "../../lib/queries";
import { getClient, overlayDrafts } from "../../lib/sanity.server";
import Layout from "../../components/layout";
import Head from "next/head";
import { WEBSITE_NAME } from "../../lib/constants";
import Container from "../../components/container";
import Card from "../../components/Card";

export default function KennsluefniPage({ allPosts, preview }) {
  return (
    <Layout>
      <Head>
        <title>{`Kennsluefni - ${WEBSITE_NAME}`}</title>
      </Head>
      <div className="min-h-screen">
        <Container>
          <div className="my-5 flex gap-6 flex-wrap">
            {allPosts.map((post, index) => (
              <Card
                key={index}
                title={post.title}
                slug={post.slug}
                desc={post.description}
                category={post.category}
                type={"kennsluefni"}
              />
            ))}
          </div>
        </Container>
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
