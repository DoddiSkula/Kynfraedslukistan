import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPlug({ title, coverImage, excerpt, slug }) {
  return (
    <Link href={`/posts/${slug}`} aria-label={title}>
      <div className="bg-white rounded-lg p-4  cursor-pointer outline-sky-500 outline-offset-4 outline-3 hover:outline">
        <div className="mb-5">
          <CoverImage slug={slug} title={title} image={coverImage} />
        </div>
        <h3 className="mb-3 text-3xl leading-snug hover:underline">{title}</h3>
        <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      </div>
    </Link>
  );
}
