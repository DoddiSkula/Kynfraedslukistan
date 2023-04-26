import Image from "next/image";
import { urlForImage } from "../lib/sanity";

export default function CoverImage({
  image: source,
  priority,
  alt,
  className = "",
}) {
  const image = source?.asset?._ref ? (
    <Image
      className={` ${className}`}
      width={2000}
      height={10000}
      alt={alt}
      src={urlForImage(source).height(1000).width(2000).url()}
      priority={priority}
    />
  ) : (
    <div className="w-full h-40 rounded-lg border-2 border-purple-300 relative" />
  );

  return <div>{image}</div>;
}
