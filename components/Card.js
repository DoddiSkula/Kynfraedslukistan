import Link from "next/link";
import classNames from "classnames";

export default function Card({ title, desc, slug, type, category }) {
  console.log(category);
  const categoryStr = category ? category[0] : null;

  return (
    <Link
      href={type === "hlekkur" ? slug : `/${type}/${slug}`}
      target={type === "hlekkur" ? "_blank" : "_self"}
      aria-label={title}
    >
      <div
        className={classNames(
          "rounded-xl  flex flex-col justify-between p-8 h-64 w-96 bg-gradient-to-br hover:shadow-2xl hover:-translate-y-1 transition-all duration-400 text-white",
          {
            "from-teal-500 to-emerald-400 hover:shadow-teal-300":
              categoryStr === "samskipti",
            "from-indigo-500 to-sky-400 hover:shadow-sky-300":
              categoryStr === "sambönd",
            "from-fuchsia-500 to-rose-400 hover:shadow-pink-300":
              categoryStr === "kynlíf",
          }
        )}
      >
        <p className="tracking-widest uppercase text-sm">{categoryStr}</p>
        <div className="mb-0">
          <h2 className="font-bold text-3xl tracking-wide mb-2">{title}</h2>
          <p
            className={classNames("tracking-wide text-sm", {
              "text-green-100": categoryStr === "samskipti",
              "text-blue-100": categoryStr === "sambönd",
              "text-fuchsia-100": categoryStr === "kynlíf",
            })}
          >
            {desc}
          </p>
        </div>
        <p
          className={classNames("tracking-wide text-sm", {
            "text-green-100": categoryStr === "samskipti",
            "text-blue-100": categoryStr === "sambönd",
            "text-fuchsia-100": categoryStr === "kynlíf",
          })}
        >
          3 hlekkir | 2 verkefni
        </p>
      </div>
    </Link>
  );
}
