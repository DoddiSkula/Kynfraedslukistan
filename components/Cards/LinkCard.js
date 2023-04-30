import Link from "next/link";
import CoverImage from "../cover-image";
import classNames from "classnames";

export default function LinkCard({ link }) {
  const isVideo = link.type[0] === "video";

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
    <Link
      href={link.url}
      target={"_blank"}
      aria-label={link.title}
      className="group relative flex flex-col min-w-80 mb-4 transition-all"
    >
      <div className="w-full relative">
        <CoverImage
          className="object-cover h-40 rounded-lg border border-gray-100 shadow-sm transition-all"
          image={link?.image}
          alt={"img"}
        />
        <DurationTag />
      </div>

      <div className="p-1 pt-3">
        <h3 className="group-hover:underline line-clamp-2 text-lg font-bold text-gray-800">
          {link.title}
        </h3>
        <p className="mt-1 line-clamp-3 text-sm text-gray-500 min-w-72 max-h-20 overflow-hidden text-ellipsis">
          {link.description}
        </p>
      </div>
    </Link>
  );
}
