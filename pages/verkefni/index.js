import { assignmentsQuery } from "lib/queries";
import { getClient, overlayDrafts } from "lib/sanity.server";
import Layout from "components/layout";
import Head from "next/head";
import { WEBSITE_NAME } from "lib/constants";
import Container from "/components/container";
import AssignmentCard from "components/Cards/AssignmentCard";

export default function VerkefniPage({ allAssignments }) {
  return (
    <Layout>
      <Head>
        <title>{`Verkefni - ${WEBSITE_NAME}`}</title>
      </Head>
      <Container>
        <div className="mx-auto w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allAssignments?.map((assignment, index) => (
            <AssignmentCard key={index} assignment={assignment} />
          ))}
        </div>
      </Container>
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
