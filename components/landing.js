import Layout from "./layout";
import Head from "next/head";
import { WEBSITE_NAME } from "../lib/constants";
import Intro from "./intro";

export default function Landing() {
  return (
    <Layout>
      <Head>
        <title>{`${WEBSITE_NAME}`}</title>
      </Head>
      <Intro />
    </Layout>
  );
}
