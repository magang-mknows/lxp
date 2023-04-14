"use client";
import React, { FC, lazy, ReactElement, Suspense } from "react";
import DiscussionPostOption from "../atoms/DiscussionPostOption";
import DiscussionSearch from "../atoms/DiscussionSearch";
import DiscussionCard from "../atoms/DisscucionCard";

const DiscussionComment = lazy(() => import("./DiscussionComment"));

const DiscussionContent: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50 rounded-md shadow-sm my-8 mx-8 md:mx-14 lg:mx-16 py-8 px-8 md:px-14 lg:px-16 ">
      <DiscussionSearch />
      <section className="py-4 relative w-fit">
        {[...Array(3)].map((item, index) => {
          return (
            <Suspense key={index}>
              <DiscussionCard
                type="post"
                hasImage={false}
                countLikes={3}
                time="100 hari"
                userName="Bandi Sukanto"
                text="Diskusikan tentang manajemen keuangan menurut pemahaman anda? Apakah fungsi dan tujuan dari manajemen keuangan. Apa modul yang telah kalian pelajari sudah jelas?"
                title="Diskusi Manajemen Keuangan"
              >
                <DiscussionPostOption id={index as unknown as string} />
              </DiscussionCard>
            </Suspense>
          );
        })}
      </section>
      <DiscussionComment />
    </section>
  );
};

export default DiscussionContent;
