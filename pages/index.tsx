import Landing from "@/components/landing";
import { indexQuery } from "@/lib/queries";
import { getClient, overlayDrafts } from "@/lib/sanity.server";

export default function IndexPage({ courses }) {
  return <Landing courses={courses} />;
}

export async function getStaticProps({ preview = false }) {
  const courses = overlayDrafts(await getClient(preview).fetch(indexQuery));
  return {
    props: { courses, preview },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
