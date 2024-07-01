import Layout from "@/components/layout";
import Head from "next/head";
import { WEBSITE_NAME } from "@/lib/constants";

const summary = `Vefurinn er lokaverkefni Diljár Magneu Oddsdóttur til B.Ed. gráðu í grunnskólakennslu með áherslu á samfélagsgreinar við Háskóla Íslands.
 Markmið vefsins er að svara kalli unglinga eftir bættri kynfræðslu í grunnskólum. 
 Vefurinn einblínir á félagslegaþætti kynfræðslunnar.`;

const about = [
  {
    title: "Fyrir hvern er vefurinn?",
    text: `Vefurinn er ætlaður þeim sem sinna kynfræðslukennslu á unglingastigi og veita þeim greiðan aðgang að kennsluefni um félagslegaþætti kynfræðslunnar.`,
  },
  {
    title: "Hvernig á að nota vefinn?",
    text: `Á forsíðu vefsins má finna sex umfjöllunarefni sem hvert og eitt einblínir á ákveðinn þátt innan kynfræðslunnar. 
    Undir hverju umfjöllunarefni má nálgast tillögur að kennsluaðferðum, fræðsluefni og verkefnum.`,
  },
];

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>{`Um vefinn - ${WEBSITE_NAME}`}</title>
      </Head>
      <div className="container mx-auto px-5 max-w-3xl pt-24">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
            Um vefinn
          </h2>
          <p className="text-gray-600 leading-8">{summary}</p>
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
