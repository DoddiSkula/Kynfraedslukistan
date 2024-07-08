import { indexQuery } from "@/lib/queries";
import { getClient, overlayDrafts } from "@//lib/sanity.server";
import Layout from "@/components/layout";
import Head from "next/head";
import { WEBSITE_NAME } from "@/lib/constants";
import Container from "@/components/container";
import CourseCard from "@/components/Cards/CourseCard";

export default function KennsluefniPage({ courses }) {
  return (
    <Layout>
      <Head>
        <title>{`Kennsluefni - ${WEBSITE_NAME}`}</title>
      </Head>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const courses = overlayDrafts(await getClient(preview).fetch(indexQuery));
  return {
    props: { courses, preview },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}
