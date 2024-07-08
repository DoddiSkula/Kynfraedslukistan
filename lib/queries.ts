const kennsluefniFields = `
  _id,
  title,
  "slug": slug.current,
  category,
  description,
  image,
  instructions,
  learningCriteria,
  teachingGuide,
  assignmentDescription,
  hlekkir[]->,
  verkefni[]->
`;

const verkefniFields = `
  _id,
  title,
  "slug": slug.current,
  description,
  image,
  url,
  embedded,
`;

const hlekkurFields = `
  _id,
  title,
  description,
  image,
  url,
  type,
  duration
`;

export const indexQuery = `
*[_type == "kennsluefni"] | order(_updatedAt desc) {
  ${kennsluefniFields}
}`;

export const postQuery = `
{
  "kennsluefni": *[_type == "kennsluefni" && slug.current == $slug] | order(_updatedAt desc) [0] {
    ${kennsluefniFields}
  }
}`;

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${kennsluefniFields}
}
`;

export const assignmentsQuery = `
*[_type == "verkefni"] | order(_createdAt desc) {
  ${verkefniFields}
}`;

export const assignmentQuery = `
{
  "verkefni": *[_type == "verkefni" && slug.current == $slug] | order(_updatedAt desc) [0] {
    ${verkefniFields}
  }
}`;

export const assignmentSlugsQuery = `
*[_type == "verkefni" && defined(slug.current)][].slug.current
`;

export const linksQuery = `
*[_type == "hlekkur"] | order(_createdAt desc) {
  ${hlekkurFields}
}`;

export const linkQuery = `
{
  "hlekkur": *[_type == "hlekkur" && slug.current == $slug] | order(_updatedAt desc) [0] {
    ${hlekkurFields}
  }
}`;
