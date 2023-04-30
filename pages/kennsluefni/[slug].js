import Layout from "components/layout";
import { postQuery, postSlugsQuery } from "lib/queries";
import { getClient, sanityClient } from "lib/sanity.server";
import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { WEBSITE_NAME } from "lib/constants";

export default function PostPage({ data = {} }) {
  const router = useRouter();

  const { kennsluefni } = data;
  const slug = kennsluefni?.slug;

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      {router.isFallback ? (
        <h2 className="text-2xl">Loading…</h2>
      ) : (
        <>
          <article>
            <Head>
              <title>{`${kennsluefni.title} | ${WEBSITE_NAME}`}</title>
            </Head>
          </article>
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { kennsluefni } = await getClient().fetch(postQuery, {
    slug: params.slug,
  });

  return {
    props: {
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
