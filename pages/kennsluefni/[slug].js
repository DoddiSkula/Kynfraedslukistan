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
import {
  ClipboardList,
  LoaderCircle,
  NotebookPen,
  Presentation,
} from "lucide-react";

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
        <div className="h-screen flex flex-col gap-4 items-center justify-center">
          <LoaderCircle
            className="animate-spin size-10 text-violet-600"
            strokeWidth={2.5}
          />
          <h2 className="font-medium text-gray-600">Hleður síðu...</h2>
        </div>
      ) : (
        <div className="container px-4 sm:px-10 mx-auto max-w-6xl mb-20 pt-24">
          <BackButton />
          <article>
            <Head>
              <title>{`${kennsluefni.title} | ${WEBSITE_NAME}`}</title>
            </Head>
            <div className="space-y-14">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-3 tracking-tighter leading-tight">
                  {kennsluefni.title}
                </h1>
                <p className="text-base text-gray-600 leading-9 max-w-3xl">
                  {kennsluefni.description}
                </p>
              </div>
              <div className="bg-indigo-100/60 p-6 rounded-xl w-fit prose leading-8 max-w-3xl">
                <h3 className="text-xl font-bold text-indigo-500 flex items-center">
                  <ClipboardList className="mr-2" />
                  Hæfniviðmið
                </h3>
                <PortableText value={kennsluefni.learningCriteria} />
              </div>
              <div className="prose text-base text-gray-600 leading-9 max-w-3xl">
                <h3 className="text-2xl font-bold">Kennsluleiðbeiningar</h3>
                <PortableText value={kennsluefni.teachingGuide} />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center w-full">
                  <Presentation className="mr-2" />
                  Fræðsluefni
                </h3>
                {kennsluefni.hlekkir?.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {kennsluefni.hlekkir?.map((link, index) => (
                      <LinkCard key={index} link={link} />
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 mb-14">
                    Engin fræðsla tengd þessu kennsluefni.
                  </p>
                )}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <NotebookPen className="mr-2" />
                  Verkefni
                </h3>
                <div className="prose text-base text-gray-600 leading-9 max-w-3xl mb-6">
                  <PortableText value={kennsluefni.assignmentDescription} />
                </div>
                {kennsluefni.verkefni?.length > 0 ? (
                  <div className="flex gap-4">
                    {kennsluefni.verkefni?.map((assignment, index) => (
                      <AssignmentCard key={index} assignment={assignment} />
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">
                    Engin verkefni tengd þessu kennsluefni.
                  </p>
                )}
              </div>
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
