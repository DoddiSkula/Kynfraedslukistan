import Layout from "components/layout";
import { postQuery, postSlugsQuery } from "lib/queries";
import { getClient, sanityClient } from "lib/sanity.server";
import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { WEBSITE_NAME } from "lib/constants";
import { PortableText } from "@portabletext/react";
import LinkCard from "components/Cards/LinkCard";
import AssignmentCard from "components/Cards/AssignmentCard";
import { BackButton } from "components/backButton";

export default function PostPage({ data = {} }) {
  const router = useRouter();

  const { kennsluefni } = data;
  const slug = kennsluefni?.slug;

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  console.log(kennsluefni);

  return (
    <Layout>
      {router.isFallback ? (
        <h2 className="text-2xl">Loading…</h2>
      ) : (
        <div className="container px-6 sm:px-10 mx-auto max-w-5xl mb-20">
          <BackButton />
          <article>
            <Head>
              <title>{`${kennsluefni.title} | ${WEBSITE_NAME}`}</title>
            </Head>
            <div>
              <h1 className="text-3xl sm:text-6xl font-bold mb-4 tracking-tighter leading-tight">
                {kennsluefni.title}
              </h1>
              <p className="text-lg text-gray-600 leading-loose mb-6">
                {kennsluefni.description}
              </p>
              <div className="prose text-lg text-gray-600 leading-8 mb-10">
                <PortableText value={kennsluefni.instructions} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tighter leading-tight">
                Fræðsluefni
              </h2>
              {kennsluefni.hlekkir?.length > 0 ? (
                <div className="grid lg:grid-cols-3 lg:gap-8 sm:grid-cols-2 sm:gap-8 md:gap-4 mb-10">
                  {kennsluefni.hlekkir?.map((link, index) => (
                    <LinkCard key={index} link={link} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 mb-10">
                  Engin fræðsla tengd þessu kennsluefni.
                </p>
              )}
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tighter leading-tight">
                Verkefni
              </h2>
              {kennsluefni.verkefni?.length > 0 ? (
                <div className="grid lg:grid-cols-3 lg:gap-8 sm:grid-cols-2 sm:gap-8 md:gap-4 mb-10">
                  {kennsluefni.verkefni?.map((assignment, index) => (
                    <AssignmentCard key={index} assignment={assignment} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">
                  Engin verkefni tengd þessu kennsluefni.
                </p>
              )}
            </div>
          </article>
        </div>
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
