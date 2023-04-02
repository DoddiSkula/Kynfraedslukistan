const kennsluefniFields = `
  _id,
  title,
  "slug": slug.current,
  category,
  description,
  image,
  instructions,
  hlekkir,
  verkefni
`;

export const indexQuery = `
*[_type == "kennsluefni"] | order(_createdAt desc) {
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
