import Link from "next/link";
import CardImage from "./CardImage";
import classNames from "classnames";
import videoFallback from "public/images/video-fallback.png";
import articleFallback from "public/images/article-fallback.png";
import { useEffect, useRef, useState } from "react";
import { BookOpen, Video } from "lucide-react";

export default function LinkCard({ link }) {
  const [showReadMoreBtn, setShowReadMoreBtn] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const ref = useRef(null);

  const isVideo = link.type[0] === "video";

  const showReadMoreButton = (element) => {
    if (
      element.offsetHeight < element.scrollHeight ||
      element.offsetWidth < element.scrollWidth
    ) {
      setShowReadMoreBtn(true);
    }
  };

  useEffect(() => showReadMoreButton(ref?.current), [ref]);

  const DurationTag = () => {
    return (
      <span
        className={classNames(
          "flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md text-sm bg-opacity-90 absolute bottom-3 right-3",
          {
            "bg-indigo-100 text-indigo-800 border": isVideo,
            "bg-purple-100 text-purple-800": !isVideo,
          }
        )}
      >
        {link.type[0] === "video" ? (
          <Video className="size-4" />
        ) : (
          <BookOpen className="size-4" />
        )}
        {Math.ceil(link.duration)} mín
      </span>
    );
  };

  return (
    <div>
      <Link
        href={link.url}
        target={"_blank"}
        aria-label={link.title}
        className="group relative flex flex-col min-w-56 transition-all "
      >
        <div className="w-full relative">
          <div className="absolute top-0 left-0 bottom-0 right-0 rounded-lg  transition-all group-hover:bg-white/20 z-10"></div>
          <CardImage
            className="object-cover h-40 rounded-lg border border-gray-200 transition-all outline-violet-200 group-hover:outline-2"
            image={
              link.image?.asset?._ref
                ? link?.image
                : isVideo
                ? videoFallback
                : articleFallback
            }
            alt={"img"}
          />
          <DurationTag />
        </div>

        <div className="pt-3">
          <h3 className="group-hover:underline line-clamp-2 leading-tight text-base font-semibold text-gray-900">
            {link.title}
          </h3>
          <p
            className={classNames(
              "mt-0.5 line-clamp-2 text-xs text-gray-600 min-w-56 overflow-hidden text-ellipsis",
              {
                "line-clamp-none": showFullDescription,
              }
            )}
            ref={ref}
          >
            {link.description}
          </p>
        </div>
      </Link>
      {showReadMoreBtn && (
        <button
          onClick={() => setShowFullDescription((prev) => !prev)}
          className="text-xs text-left text-violet-800 hover:text-violet-900 hover:underline"
        >
          {showFullDescription ? "Minnka" : "Lesa meira"}
        </button>
      )}
    </div>
  );
}
