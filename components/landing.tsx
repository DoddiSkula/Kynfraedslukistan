import Head from "next/head";
import { WEBSITE_NAME } from "../lib/constants";
import CourseCard from "./Cards/CourseCard";
import Layout from "./layout";

export default function Landing({ courses }) {
  return (
    <Layout>
      <Head>
        <title>{`${WEBSITE_NAME}`}</title>
      </Head>
      <section className="pt-24 sm:pt-36 min-h-screen">
        <div className="flex flex-col justify-center">
          <div className="container mx-auto px-5 max-w-7xl">
            <div className="mx-auto max-w-screen-xl text-center flex flex-col items-center justify-center mb-2 md:mb-4 xl:mb-10">
              <h1 className="text-4xl mb-4 sm:mb-6 font-extrabold text-gray-800 md:text-5xl lg:text-6xl 3xl:text-7xl ">
                Kynfræðslukistan
              </h1>
              <p className="text-sm sm:text-base mb-10 font-medium text-gray-600">
                Fræðsluefni og verkefni fyrir kynfræðslu á unglingastigi
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto px-5 mb-32 max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses?.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
