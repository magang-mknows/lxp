"use client";
import React, { FC, lazy, ReactElement, Suspense, useState } from "react";
import DiscussionSearch from "../atoms/DiscussionSearch";
import DiscussionCard from "../atoms/DisscucionCard";
import DiscussionPostOption from "../atoms/DiscussionPostOption";
import { useRecoilState, useRecoilValue } from "recoil";
import { isModalOpen, selectedOption } from "@/modules/discussion-room/store";
import Modal from "../atoms/Modal";
import PostReportModal from "../atoms/PostReportModal";
import PostSpamModal from "../atoms/PostSpamModal";
import ReportSuccessModal from "../atoms/ReportSuccessModal";
import DeleteConfirmModal from "../atoms/DeleteConfirmModal";
import DiscussionAddComment from "../atoms/DiscussionAddComment";

const DiscussionComment = lazy(() => import("./DiscussionComment"));

const DiscussionContent: FC = (): ReactElement => {
  const [isOptionOpen, setOptionOpen] = useRecoilState(isModalOpen);
  const getSelectedOption = useRecoilValue(selectedOption);

  const dummyComments = [
    {
      hasImage: false,
      text: "Dalam dunia bisnis, manajemen keuangan adalah kegiatan perencanaan, pengaturan, pengarahan, dan pengendalian keuangan suatu perusahaan. Dengan adanya pengelolaan keuangan secara profesional, suatu usaha bisa mengurangi resiko kerugian. Pengontrolan keuangan di perusahaan dimulai dari pengadaan dana perusahaan.",
      userName: "Bambang S",
      time: "10 detik",
      countLikes: 10,
      type: "comment",
    },
    {
      hasImage: true,
      imgSource: "/assets/dashboard/dummyCourse.png",
      text: "pengendalian keuangan suatu perusahaan.esional, suatu usaha bisa mengurangi resiko kerugian. Pengontrolan keuangan di perusahaan dimulai dari pengadaan dana perusahaan.",
      userName: "Surti B",
      time: "10 detik",
      countLikes: 3,
      type: "comment",
    },
  ];

  return (
    <section className="bg-neutral-50 rounded-md shadow-sm my-8 mx-8 md:mx-14 lg:mx-16 py-8 px-8 md:px-14 lg:px-16 ">
      <DiscussionSearch />
      <section className="py-4 relative w-fit">
        <Suspense>
          {[...Array(2)].map((item, index) => {
            return (
              <DiscussionCard
                key={index}
                type="post"
                hasImage={false}
                countLikes={3}
                time="100 hari"
                userName="Bandi Sukanto"
                text="Diskusikan tentang manajemen keuangan menurut pemahaman anda? Apakah fungsi dan tujuan dari manajemen keuangan. Apa modul yang telah kalian pelajari sudah jelas?"
                title="Diskusi Manajemen Keuangan"
                option={<DiscussionPostOption id={`test id ${(index + 1) as unknown as string}`} />}
              >
                <DiscussionAddComment />
                <section>
                  <h1 className="mb-6 md:mb-8 lg:mb-10 text-version2-400 dark:text-[#17A2B8] font-bold text-sm">
                    {dummyComments.length} balasan
                  </h1>
                  <section>
                    {dummyComments.map((comment, index) => {
                      return (
                        <section key={index} className="mb-10 pl-6 md:pl-8 lg:pl-14">
                          <DiscussionCard
                            hasImage={comment.hasImage}
                            countLikes={comment.countLikes}
                            time={comment.time}
                            type="comment"
                            userName={comment.userName}
                            text={comment.text}
                            imgSource={comment.imgSource as unknown as string}
                            title={""}
                            option={
                              <DiscussionPostOption
                                id={`test id ${(index + 1) as unknown as string}`}
                              />
                            }
                          ></DiscussionCard>
                        </section>
                      );
                    })}
                  </section>
                </section>
              </DiscussionCard>
            );
          })}
        </Suspense>
      </section>
      {/* <DiscussionComment /> */}
      <Modal
        withClose={false}
        hasImage={false}
        lookup={isOptionOpen}
        onClose={() => setOptionOpen(false)}
      >
        {getSelectedOption === "report" ? <PostReportModal /> : null}
        {getSelectedOption === "reportDetail" ? <PostSpamModal /> : null}
        {getSelectedOption === "reportSuccess" ? <ReportSuccessModal /> : null}
        {getSelectedOption === "delete" ? <DeleteConfirmModal /> : null}
      </Modal>
    </section>
  );
};

export default DiscussionContent;
