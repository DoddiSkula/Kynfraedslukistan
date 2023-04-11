import { postQuery, postSlugsQuery } from "../../lib/queries";
import { getClient, sanityClient } from "../../lib/sanity.server";
import Post from "../../components/Post/post";

export default function PostPage({ data }) {
  return <Post data={data} />;
}

export async function getStaticProps({ params, preview = false }) {
  const { kennsluefni } = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  });

  return {
    props: {
      preview,
      data: {
        kennsluefni,
      },
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
