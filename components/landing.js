import Layout from "./layout";
import Head from "next/head";
import { WEBSITE_NAME } from "../lib/constants";

export default function Landing() {
  return (
    <Layout>
      <Head>
        <title>{`${WEBSITE_NAME}`}</title>
      </Head>
    </Layout>
  );
}
