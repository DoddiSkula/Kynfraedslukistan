import CoverImage from "./cover-image";
import Link from "next/link";

export default function Card({ title, image, desc, slug, type }) {
  return (
    <Link
      href={type === "hlekkur" ? slug : `/${type}/${slug}`}
      target={type === "hlekkur" ? "_blank" : "_self"}
      aria-label={title}
    >
      <div className="card w-80 bg-base-100 shadow-md cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all">
        <figure>
          <CoverImage title={title} image={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </Link>
  );
}
