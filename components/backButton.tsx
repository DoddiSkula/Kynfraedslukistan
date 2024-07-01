import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/router";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center text-violet-700 text-sm font-semibold h-10 px-4 py-2 bg-violet-100 rounded-lg hover:bg-violet-200 mb-8"
    >
      <ChevronLeft className="size-4 mr-1" />
      Til baka
    </button>
  );
}
