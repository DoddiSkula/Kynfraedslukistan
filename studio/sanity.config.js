import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";

import { resolveProductionUrl } from "./resolveProductionUrl";
import { kennsluefni } from "./schemas/kennsluefni";
import { hlekkur } from "./schemas/hlekkur";
import { verkefni } from "./schemas/verkefni";

const title =
  import.meta.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || "Kynfræðslukistan";
const projectId = import.meta.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: "/studio",
  projectId: projectId || "",
  dataset: dataset || "",
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [kennsluefni, hlekkur, verkefni],
  },
  document: {
    productionUrl: resolveProductionUrl,
  },
  plugins: [
    deskTool({}),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool(),
  ],
});
