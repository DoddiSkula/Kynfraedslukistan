import { PortableText } from "@portabletext/react";
import Card from "../Card";

export default function PostBody({
  title,
  description,
  instructions,
  links,
  assignments,
}) {
  return (
    <div>
      <div className="prose">
        <h1>{title}</h1>
        <p>{description}</p>
        <h2>Leiðbeiningar</h2>
        <PortableText value={instructions} />
        <h2>Hlekkir</h2>
      </div>
      <div className="mt-5 mb-10 flex gap-6 flex-wrap">
        {links?.map((link, index) => (
          <Card
            key={index}
            title={link.title}
            slug={link.url}
            desc={link.description}
            image={link.image}
            type={"hlekkur"}
          />
        ))}
      </div>
      <div className="prose">
        <h2>Verkefni</h2>
      </div>
      <div className="mt-5 mb-10 flex gap-6 flex-wrap">
        {assignments?.map((assignment, index) => (
          <Card
            key={index}
            title={assignment.title}
            slug={assignment.slug.current}
            desc={assignment.description}
            image={assignment.image}
            type={"verkefni"}
          />
        ))}
      </div>
    </div>
  );
}
