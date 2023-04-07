import Link from "next/link";
import markdownStyles from "../markdown-styles.module.css";
import { PortableText } from "@portabletext/react";
import CoverImage from "./cover-image";

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
        <h2>Fræðsluefni</h2>
      </div>

      <div className="my-10">
        {links?.map((link) => (
          <Link
            key={link?._id}
            href={link?.url}
            aria-label={link?.title}
            target="_blank"
          >
            <div className="card w-96 bg-base-100 shadow-md cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all">
              <figure>
                <CoverImage title={link?.title} image={link?.image} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{link?.title}</h2>
                <p>{link?.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="prose">
        <h2>Verkefni</h2>
      </div>
      <div className="my-10">
        {assignments?.map((assignment) => (
          <Link
            key={assignment._id}
            href={assignment?.url ?? ""}
            aria-label={assignment?.title}
            target="_blank"
          >
            <div className="card w-96 bg-base-100 shadow-md cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all">
              <figure>
                <CoverImage
                  title={assignment?.title}
                  image={assignment?.image}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{assignment?.title}</h2>
                <p>{assignment?.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
