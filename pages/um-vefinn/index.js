import Layout from "components/layout";
import Head from "next/head";
import { WEBSITE_NAME } from "lib/constants";

const about = [
  {
    title: "Fyrir hvern er vefurinn?",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
             egestas purus, eu imperdiet odio. Aenean vehicula tempor metus, nec
             varius ligula molestie nec. Nulla facilisi. Maecenas nec elit
             auctor, tincidunt ipsum non, pellentesque tellus. Aenean
             sollicitudin eu felis non consectetur. Nulla ac nunc vestibulum,
             congue est ac, aliquam velit. Mauris a scelerisque metus. Nulla
             dapibus ut nisl ac dapibus.`,
  },
  {
    title: "Hvernig á að nota vefinn?",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
             egestas purus, eu imperdiet odio. Aenean vehicula tempor metus, nec
             varius ligula molestie nec. Nulla facilisi. Maecenas nec elit
             auctor, tincidunt ipsum non, pellentesque tellus. Aenean
             sollicitudin eu felis non consectetur. Nulla ac nunc vestibulum,
             congue est ac, aliquam velit. Mauris a scelerisque metus. Nulla
             dapibus ut nisl ac dapibus.`,
  },
  {
    title: "Hæfniviðmið",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
             egestas purus, eu imperdiet odio. Aenean vehicula tempor metus, nec
             varius ligula molestie nec. Nulla facilisi. Maecenas nec elit
             auctor, tincidunt ipsum non, pellentesque tellus. Aenean
             sollicitudin eu felis non consectetur. Nulla ac nunc vestibulum,
             congue est ac, aliquam velit. Mauris a scelerisque metus. Nulla
             dapibus ut nisl ac dapibus.`,
  },
];

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>{`Um vefinn - ${WEBSITE_NAME}`}</title>
      </Head>
      <div className="container mx-auto px-5 2xl:max-w-4xl 3xl:max-w-5xl mt-3">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
            Um vefinn
          </h2>
          <p className="text-gray-600 leading-8">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
             egestas purus, eu imperdiet odio. Aenean vehicula tempor metus, nec
             varius ligula molestie nec. Nulla facilisi. Maecenas nec elit
             auctor, tincidunt ipsum non, pellentesque tellus. Aenean
             sollicitudin eu felis non consectetur. Nulla ac nunc vestibulum,
             congue est ac, aliquam velit. Mauris a scelerisque metus. Nulla
             dapibus ut nisl ac dapibus.`}</p>
        </div>
        <div>
          {about.map((section, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-xl sm:text-xl font-bold mb-2 text-violet-700 leading-wide">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-8">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
