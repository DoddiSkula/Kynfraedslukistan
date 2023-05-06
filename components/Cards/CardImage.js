import Image from "next/image";
import { urlForImage } from "lib/sanity";

export default function CardImage({
  image: source,
  priority,
  alt,
  className = "",
}) {
  const image = (
    <Image
      className={` ${className}`}
      width={2000}
      height={10000}
      alt={alt}
      src={
        source?.asset?._ref
          ? urlForImage(source).height(1000).width(2000).url()
          : source
      }
      priority={priority}
    />
  );

  return <div>{image}</div>;
}
