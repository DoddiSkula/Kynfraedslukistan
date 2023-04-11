import { useRouter } from "next/router";
import { urlForImage } from "../../lib/sanity";
import ErrorPage from "next/error";
import Layout from "../layout";
import PostContainer from "./post-container";
import PostTitle from "./post-title";
import Head from "next/head";
import PostHeader from "./post-header";
import PostBody from "./post-body";
import { WEBSITE_NAME } from "../../lib/constants";

export default function Post({ data = {}, preview = false }) {
  const router = useRouter();

  const { kennsluefni } = data;
  const slug = kennsluefni?.slug;

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  console.log(kennsluefni);

  return (
    <Layout preview={preview}>
      <PostContainer>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{`${kennsluefni.title} | ${WEBSITE_NAME}`}</title>
                {kennsluefni.image?.asset?._ref && (
                  <meta
                    key="ogImage"
                    property="og:image"
                    content={urlForImage(kennsluefni.image)
                      .width(1200)
                      .height(627)
                      .fit("crop")
                      .url()}
                  />
                )}
              </Head>
              <PostHeader
                title={kennsluefni.title}
                description={kennsluefni.description}
                coverImage={kennsluefni.image}
              />
              <PostBody
                title={kennsluefni.title}
                description={kennsluefni.description}
                instructions={kennsluefni.instructions}
                links={kennsluefni.hlekkir}
                assignments={kennsluefni.verkefni}
              />
            </article>
          </>
        )}
      </PostContainer>
    </Layout>
  );
}
