import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../lib/sanity";

export default function CoverImage({ title, image: source, priority }) {
  const image = source?.asset?._ref ? (
    <div>
      <Image
        className="w-full h-auto"
        width={2000}
        height={10000}
        alt={`Cover Image for ${title}`}
        src={urlForImage(source).height(1000).width(2000).url()}
        sizes="100vw"
        priority={priority}
      />
    </div>
  ) : (
    <div style={{ paddingTop: "50%", backgroundColor: "#ddd" }} />
  );

  return <div className="sm:mx-0">{image}</div>;
}
