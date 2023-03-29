"use client";
import { FC, ReactElement } from "react";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { useSelectedArticle } from "@/hooks/dashbaord/useSelectedArticle";

const DashboardArticleCard: FC = (): ReactElement => {
  const { setSelectedArticle, getSelectedArticle } = useSelectedArticle();

  const dummyArticle = [
    {
      id: 1,
      title: "Apa itu Cyber Attack?",
      catogory: "Technologi",
      type: "Article",
      date: "29 Feb 2023",
      srcImg: "/assets/dashboard/article-slide.svg",
    },
    {
      id: 2,
      title: "Apa itu Cyber Crime?",
      catogory: "Technologi",
      type: "Article",
      date: "34 Feb 2023",
      srcImg: "/assets/dashboard/article-slide.svg",
    },
  ];

  return (
    <section>
      <section className="bg-neutral-50 rounded-md overflow-hidden mb-6">
        {dummyArticle.map((article, index) => {
          return (
            <section
              key={index}
              className={`${article.id === getSelectedArticle ? "block" : "hidden"}`}
            >
              <div className="max-h-[500px] overflow-hidden object-cover">
                <Image
                  src={article?.srcImg as unknown as string}
                  alt="sekilas-view"
                  className="w-full"
                  height={100}
                  width={100}
                />
              </div>
              <div className="px-4 py-4">
                <h1 className="text-base font-bold text-neutral-900 mb-1">{article.title}</h1>
                <p className="text-xs text-neutral-400 flex items-center mb-3">
                  {article.type}
                  <span>
                    <BsDot />
                  </span>
                  {article.catogory}
                </p>
                <div className=" flex justify-end items-center w-full">
                  <p className="text-xs text-neutral-400 flex items-center">{article.date}</p>
                </div>
              </div>
            </section>
          );
        })}
      </section>
      <section className=" w-full flex justify-center">
        <section className="flex gap-2">
          {dummyArticle.map((item, index) => {
            return (
              <span
                key={index}
                className={`${
                  getSelectedArticle == item.id ? " bg-secondary-blue-600" : " bg-neutral-300"
                } h-2 cursor-pointer w-2  block rounded-lg transition-all ease-in-out duration-300`}
                onClick={() => {
                  setSelectedArticle(item.id);
                }}
              ></span>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default DashboardArticleCard;
