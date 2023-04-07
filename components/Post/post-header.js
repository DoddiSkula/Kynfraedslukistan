import Image from "next/image";
import { urlForImage } from "../../lib/sanity";

const PostImage = ({ title, image: source, priority }) => {
  const image = source?.asset?._ref ? (
    <div>
      <Image
        className="w-full h-auto rounded-lg"
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
};

export default function PostHeader({ title, coverImage }) {
  return (
    <>
      <div className="mb-8">
        <PostImage title={title} image={coverImage} priority />
      </div>
    </>
  );
}
