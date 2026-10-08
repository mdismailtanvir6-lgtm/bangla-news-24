import MainNews from "@/components/index/MainNews";
import MostReadNews from "@/components/index/MostReadNews ";
import NewsSections from "@/components/index/NewsSections";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      {/* ==== main news and latest news ==== */}
      <div className="mt-10 grid grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2">
          <MainNews />
          <NewsSections />
        </div>

        {/* ==== most read news ==== */}
        <div className="col-span-1">
          <MostReadNews />
        </div>
      </div>
    </div>
  );
}
