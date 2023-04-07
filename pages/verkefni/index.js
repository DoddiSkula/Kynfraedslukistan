import { assignmentsQuery } from "../../lib/queries";
import { getClient, overlayDrafts } from "../../lib/sanity.server";
import Layout from "../../components/layout";
import Head from "next/head";
import { WEBSITE_NAME } from "../../lib/constants";
import Container from "../../components/container";
import Card from "../../components/Card";

export default function VerkefniPage({ allAssignments }) {
  return (
    <Layout>
      <Head>
        <title>{`Verkefni - ${WEBSITE_NAME}`}</title>
      </Head>
      <div className="h-screen bg-gradient-to-b from-white to-sky-50">
        <Container>
          <div className="my-20 flex gap-6 flex-wrap">
            {allAssignments?.map((assignment, index) => (
              <Card
                key={index}
                title={assignment.title}
                slug={assignment.slug}
                desc={assignment.description}
                image={assignment.image}
                type={"verkefni"}
              />
            ))}
          </div>
        </Container>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allAssignments = overlayDrafts(
    await getClient(preview).fetch(assignmentsQuery)
  );
  return {
    props: { allAssignments, preview },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
