export const kennsluefni = {
  name: "kennsluefni",
  title: "Kennsluefni",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: ["samskipti", "sambönd", "kynlíf"],
      },
      validation: (Rule) => Rule.max(1),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "instructions",
      title: "Instructions",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "hlekkir",
      title: "Hlekkir",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "hlekkur" },
        },
      ],
    },
    {
      name: "verkefni",
      title: "Verkefni",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "verkefni" },
        },
      ],
    },
  ],
};
