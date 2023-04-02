export const hlekkur = {
  name: "hlekkur",
  title: "Hlekkur",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      title: "Type",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: ["video", "article"],
      },
      validation: (Rule) => Rule.max(1),
    },
    {
      name: "duration",
      title: "Duration",
      type: "number",
    },
  ],
};
