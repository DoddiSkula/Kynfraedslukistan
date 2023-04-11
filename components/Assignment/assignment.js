import { useRouter } from "next/router";
import { urlForImage } from "../../lib/sanity";
import ErrorPage from "next/error";
import Layout from "../layout";
import PostContainer from "../Post/post-container";
import PostTitle from "../Post/post-title";
import Head from "next/head";
import PostHeader from "../Post/post-header";
import PostBody from "../Post/post-body";
import { WEBSITE_NAME } from "../../lib/constants";

export default function Assignment({ data = {}, preview = false }) {
  const router = useRouter();

  const { verkefni } = data;
  const slug = verkefni?.slug;

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <PostContainer>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{`${verkefni.title} | ${WEBSITE_NAME}`}</title>
                {verkefni.image?.asset?._ref && (
                  <meta
                    key="ogImage"
                    property="og:image"
                    content={urlForImage(verkefni.image)
                      .width(1200)
                      .height(627)
                      .fit("crop")
                      .url()}
                  />
                )}
              </Head>
              <PostHeader
                title={verkefni.title}
                description={verkefni.description}
                coverImage={verkefni.image}
              />
              <PostBody
                title={verkefni.title}
                description={verkefni.description}
              />
            </article>
          </>
        )}
      </PostContainer>
    </Layout>
  );
}
