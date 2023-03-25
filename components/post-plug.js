import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPlug({ title, coverImage, excerpt, slug }) {
  return (
    <Link href={`/posts/${slug}`} aria-label={title}>
      <div className="card w-96 bg-base-100 shadow-md cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all">
        <figure>
          <CoverImage slug={slug} title={title} image={coverImage} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{excerpt}</p>
        </div>
      </div>
    </Link>
  );
}
