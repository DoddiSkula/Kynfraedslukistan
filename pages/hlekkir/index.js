import { assignmentsQuery, linksQuery } from "../../lib/queries";
import { getClient, overlayDrafts } from "../../lib/sanity.server";
import Layout from "../../components/layout";
import Head from "next/head";
import { WEBSITE_NAME } from "../../lib/constants";
import Container from "../../components/container";
import Card from "../../components/Card";

export default function HlekkirPage({ allLinks }) {
  return (
    <Layout>
      <Head>
        <title>{`Hlekkir - ${WEBSITE_NAME}`}</title>
      </Head>
      <div className="h-screen">
        <Container>
          <div className="my-5 flex gap-6 flex-wrap">
            {allLinks?.map((link, index) => (
              <Card
                key={index}
                title={link.title}
                slug={link.url}
                desc={link.description}
                image={link.image}
                type={"hlekkur"}
              />
            ))}
          </div>
        </Container>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allLinks = overlayDrafts(await getClient(preview).fetch(linksQuery));
  return {
    props: { allLinks, preview },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
