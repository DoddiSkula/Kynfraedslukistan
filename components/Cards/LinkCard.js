import Link from "next/link";
import CardImage from "./CardImage";
import classNames from "classnames";
import videoFallback from "public/images/video-fallback.png";
import articleFallback from "public/images/article-fallback.png";
import { useEffect, useRef, useState } from "react";

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
          "flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md text-sm bg-opacity-90  absolute bottom-3 right-3",
          {
            "bg-indigo-100 text-indigo-800 border": isVideo,
            "bg-purple-100 text-purple-800": !isVideo,
          }
        )}
      >
        {link.type[0] === "video" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
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
        className="group relative flex flex-col min-w-80 md:mb-1 transition-all mb-10"
      >
        <div className="w-full relative">
          <CardImage
            className="object-cover h-40 rounded-lg border border-gray-100 shadow-sm transition-all"
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
          <h3 className="group-hover:underline line-clamp-2 text-lg font-bold text-gray-800">
            {link.title}
          </h3>
          <p
            className={classNames(
              "mt-1 line-clamp-2 text-sm text-gray-500 min-w-72 overflow-hidden text-ellipsis",
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
          className="text-sm text-left text-violet-700 hover:text-violet-900 hover:underline"
        >
          {showFullDescription ? "Minnka" : "Lesa meira"}
        </button>
      )}
    </div>
  );
}
