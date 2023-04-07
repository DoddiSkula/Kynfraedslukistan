import { assignmentQuery, assignmentSlugsQuery } from "../../lib/queries";
import { getClient, sanityClient } from "../../lib/sanity.server";
import Assignment from "../../components/Assignment/assignment";

export default function PostPage({ data }) {
  return <Assignment data={data} />;
}

export async function getStaticProps({ params, preview = false }) {
  const { verkefni } = await getClient(preview).fetch(assignmentQuery, {
    slug: params.slug,
  });

  return {
    props: {
      preview,
      data: {
        verkefni,
      },
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(assignmentSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
