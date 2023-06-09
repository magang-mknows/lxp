"use client";
import { FC, lazy, ReactElement, Suspense } from "react";

const ConsultingQuestionsList = lazy(() => import("../atoms/ConsultingQuestionsList"));

const ConsultingAndServiceQuestions: FC = (): ReactElement => {
  const dummyQuestionsList = [
    {
      title: "Apa itu LMS M-Knows?",
      desc: "LMS M-Knows adalah sebuah sistem manajemen e-learning yang gratis, berkualitas, bisa diakses siapapun, kapanpun, dimanapun, dan selalu update",
    },
    {
      title: "Berapakah biaya kuliah di LMS M-Knows?",
      desc: "LMS M-Knows adalah sebuah sistem manajemen e-learning yang gratis, berkualitas, bisa diakses siapapun, kapanpun, dimanapun, dan selalu update",
    },
    {
      title: "Bagaimana alur pendaftaran di LMS M-Knows?",
      desc: "LMS M-Knows adalah sebuah sistem manajemen e-learning yang gratis, berkualitas, bisa diakses siapapun, kapanpun, dimanapun, dan selalu update",
    },
    {
      title: "Program studi apa saja yang ditawarkan oleh LMS M-Knows?",
      desc: "LMS M-Knows adalah sebuah sistem manajemen e-learning yang gratis, berkualitas, bisa diakses siapapun, kapanpun, dimanapun, dan selalu update",
    },
    {
      title:
        "Bolehkah pegawai yang perusahaannya di bawah naungan Kementrian di luar Kemendikbud Ristek  mendaftar di LMS M-Knows",
      desc: "LMS M-Knows adalah sebuah sistem manajemen e-learning yang gratis, berkualitas, bisa diakses siapapun, kapanpun, dimanapun, dan selalu update",
    },
    {
      title: "Jika ada perusahaan yang belum bermitra tetapi ingin ikut program LMS M-Knows?",
      desc: "LMS M-Knows adalah sebuah sistem manajemen e-learning yang gratis, berkualitas, bisa diakses siapapun, kapanpun, dimanapun, dan selalu update",
    },
  ];

  return (
    <section className="min-h-[90vh]">
      <section className="px-8 md:px-14 lg:px-16 pb-40 flex flex-col gap-6 ">
        {dummyQuestionsList.map((question, index) => {
          return (
            <Suspense key={index}>
              <ConsultingQuestionsList title={question.title} desc={question.desc} />
            </Suspense>
          );
        })}
      </section>
    </section>
  );
};

export default ConsultingAndServiceQuestions;
