import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";

const GlimpseKnowledgeCard: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50 shadow-sm rounded-md overflow-hidden min-h-[320px] ">
      <Link href={"/sekilas-ilmu/article#1"} passHref>
        <figure className="w-full h-40 overflow-hidden">
          <Image
            src={`/assets/glimpse-knowledge/dummyImg.svg`}
            alt="article-view"
            className="bg-neautral-50 "
            height={500}
            width={800}
            loading="eager"
          />
        </figure>
        <section className="py-4 px-4 mb-4">
          <header className="flex justify-between items-center mb-4">
            <div className="px-4 py-2 rounded-md shadow-sm text-neutral-800 font-bold bg-secondary-blue-100 w-fit text-xs">
              <h1>#softskills</h1>
            </div>
            <h1 className="text-xs text-neutral-400">Sel, 28 Feb 2023</h1>
          </header>
          <main>
            <h1 className="font-bold text-xl text-neutral-800 mb-2">
              Masih Sering Gugup Saat Public Speaking? Terapin 6 Tips Ampuh Ini!
            </h1>
            <p className="text-sm text-neutral-500">
              Menjadi seorang yang pandai berbicara di depan umum adalah sebuah kemampuan y...
            </p>
          </main>
        </section>
      </Link>
    </section>
  );
};

export default GlimpseKnowledgeCard;
