import Layout from "components/layout";
import Head from "next/head";
import Container from "/components/container";
import { WEBSITE_NAME } from "lib/constants";

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>{`Um vefinn - ${WEBSITE_NAME}`}</title>
      </Head>
      <Container>
        <p>Test</p>
      </Container>
    </Layout>
  );
}
