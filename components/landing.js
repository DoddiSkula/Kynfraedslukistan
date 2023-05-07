import Layout from "./layout";
import Head from "next/head";
import { WEBSITE_NAME } from "../lib/constants";
import Logo from "public/images/logo.svg";
import Image from "next/image";
import CourseCard from "./Cards/CourseCard";
import Container from "./container";

export default function Landing({ courses }) {
  return (
    <Layout>
      <Head>
        <title>{`${WEBSITE_NAME}`}</title>
      </Head>
      <section className="pt-24 sm:pt-28">
        <div className="flex flex-col justify-center">
          <div className="container mx-auto px-5 max-w-7xl">
            <div className="mx-auto max-w-screen-xl text-center flex flex-col items-center justify-center">
              <div className="w-24 h-24 mb-8 rounded-full border border-violet-100 shadow-md shadow-violet-100 flex items-center justify-center bg-white">
                <Image src={Logo} alt="logo" className="w-12 h-12"></Image>
              </div>
              <h1 class="text-4xl mb-6 sm:mb-10 font-extrabold text-gray-800 md:text-5xl lg:text-6xl 3xl:text-7xl ">
                {WEBSITE_NAME}
              </h1>
              <p className="text-sm sm:text-base mb-10 sm:mb-16 font-medium w-fit text-violet-800 p-4 px-6 bg-white rounded-full border border-violet-100 shadow-lg shadow-violet-300/20">
                Fræðsluefni og kennsluleiðbeiningar fyrir kynfræðslu á
                unglingastigi
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto px-5 mb-32 max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses?.map((course, index) => (
            <CourseCard key={index} course={course} colorIndex={index + 1} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
