import Layout from "./layout";
import Head from "next/head";
import { WEBSITE_NAME } from "../lib/constants";
import Intro from "./intro";
import MoreStories from "./more-stories";

export default function Landing({ allPosts, preview }) {
  const posts = allPosts || [];
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`${WEBSITE_NAME}`}</title>
        </Head>
        <div className="bg-gradient-to-b from-white to-sky-50">
          <Intro />
          {posts.length > 0 && <MoreStories posts={posts} />}
        </div>
      </Layout>
    </>
  );
}
