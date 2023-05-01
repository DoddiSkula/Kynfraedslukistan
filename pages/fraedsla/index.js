import { linksQuery } from "lib/queries";
import { getClient, overlayDrafts } from "lib/sanity.server";
import Layout from "components/layout";
import Head from "next/head";
import { WEBSITE_NAME } from "lib/constants";
import Container from "components/container";
import LinkCard from "components/Cards/LinkCard";

export default function HlekkirPage({ allLinks }) {
  return (
    <Layout>
      <Head>
        <title>{`Hlekkir - ${WEBSITE_NAME}`}</title>
      </Head>
      <Container>
        <div className="grid lg:grid-cols-4 lg:gap-8 md:grid-cols-2 md:gap-4">
          {allLinks?.map((link, index) => (
            <LinkCard
              key={index}
              link={link}
              title={link.title}
              slug={link.url}
              desc={link.description}
              image={link.image}
              type={"hlekkur"}
            />
          ))}
        </div>
      </Container>
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
