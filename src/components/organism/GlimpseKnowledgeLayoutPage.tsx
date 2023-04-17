import { FC, ReactElement } from "react";
import Breadcums from "../atoms/Breadcums";
import { useRouter } from "next/router";
import GlimpseKnowledgeLayoutMain from "../moleculs/GlimpseKnowledgeLayoutMain";

const GlimpseKnowledgeLayoutPage: FC = (): ReactElement => {
  const { query } = useRouter();

  const GlimpseKnowledgeBreadcumbs = [
    {
      name: "Home",
      link: "/",
    },
    { name: "Sekilas Ilmu", link: "/sekilas-ilmu" },
    { name: `${query.slug}`, link: `/${query.slug}` },
  ];
  return (
    <section className="min-h-[100vh] bg-neutral-50/60">
      <Breadcums items={GlimpseKnowledgeBreadcumbs} />
      <GlimpseKnowledgeLayoutMain />
    </section>
  );
};

export default GlimpseKnowledgeLayoutPage;
